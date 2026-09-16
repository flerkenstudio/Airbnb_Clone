import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Listing mock API
app.get('/api/listing', (req, res) => {
  res.json({
    id: "1",
    title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
    propertyType: "Entire serviced apartment",
    location: "Candolim, India",
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    rating: 4.95,
    reviewsCount: 19
  });
});

app.listen(port, () => {
  console.log(`API Server running on port ${port}`);
});
