const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const screenshotDir = path.join(__dirname, '../qa_screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

(async () => {
  console.log('--- RUNNING AIRBNB CLONE AUTOMATED VISUAL QA ---');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  // STATE 01: Listing Page Initial Viewport
  console.log('Capturing STATE 01: Listing Page Initial...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, 'state_01_listing_page.png') });

  // STATE 02: Gallery Hover
  console.log('Capturing STATE 02: Gallery Hover...');
  const heroFirst = await page.$('[aria-label*="View first photo"]');
  if (heroFirst) {
    await heroFirst.hover();
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(screenshotDir, 'state_02_gallery_hover.png') });
  }

  // STATE 03: Photo Tour Initial
  console.log('Capturing STATE 03: Photo Tour Initial...');
  const showAllBtn = await page.$('#show-all-photos-btn');
  await showAllBtn.click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(screenshotDir, 'state_03_photo_tour_initial.png') });

  // STATE 04: Photo Tour Scrolled
  console.log('Capturing STATE 04: Photo Tour Scrolled...');
  const poolBtn = await page.$('button:has-text("Pool")');
  if (poolBtn) {
    await poolBtn.click();
    await page.waitForTimeout(600);
  }
  await page.screenshot({ path: path.join(screenshotDir, 'state_04_photo_tour_scrolled.png') });

  // STATE 05: Lightbox First Image
  console.log('Capturing STATE 05: Lightbox First Image...');
  const anyPhoto = await page.$('[role="button"][aria-label*="View photo"]');
  await anyPhoto.click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(screenshotDir, 'state_05_lightbox_first.png') });

  // STATE 06: Lightbox Middle Image
  console.log('Capturing STATE 06: Lightbox Middle Image...');
  for (let i = 0; i < 4; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(150);
  }
  await page.screenshot({ path: path.join(screenshotDir, 'state_06_lightbox_middle.png') });

  // STATE 07: Lightbox Last Image
  console.log('Capturing STATE 07: Lightbox Last Image...');
  for (let i = 0; i < 38; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(40);
  }
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(screenshotDir, 'state_07_lightbox_last.png') });

  // STATE 08: Close and Restore
  console.log('Capturing STATE 08: Close and Restore...');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(screenshotDir, 'state_09_restored_listing.png') });

  console.log('Finished Visual QA. Console errors:', consoleErrors.length);
  await browser.close();
  if (consoleErrors.length > 0) {
    console.error('Errors found:', consoleErrors);
    process.exit(1);
  }
  console.log('--- ALL VISUAL QA CHECKS PASSED (0 ERRORS) ---');
})();
