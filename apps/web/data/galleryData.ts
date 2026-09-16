export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  roomName: string;
  caption?: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  thumbnail: string;
  subtitle: string;
  photoIds: number[];
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "living-room-1",
    name: "Living room 1",
    thumbnail: "/images/thumb_living_room_1.jpg",
    subtitle: "Sofa · Air conditioning · Ceiling fan · TV",
    photoIds: [1, 2, 3, 4, 5, 6],
  },
  {
    id: "living-room-2",
    name: "Living room 2",
    thumbnail: "/images/thumb_living_room_2.jpg",
    subtitle: "Seating area · Coffee table · Terrace access",
    photoIds: [7, 8, 9, 10, 11],
  },
  {
    id: "full-kitchen",
    name: "Full kitchen",
    thumbnail: "/images/thumb_kitchen.jpg",
    subtitle: "Refrigerator · Microwave · Induction stove · Cookware",
    photoIds: [12, 13, 14, 15, 16],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    thumbnail: "/images/thumb_bedroom.jpg",
    subtitle: "1 king bed · Wardrobe · Full length mirror · AC",
    photoIds: [17, 18, 19, 20, 21, 22],
  },
  {
    id: "full-bathroom",
    name: "Full bathroom",
    thumbnail: "/images/thumb_bathroom.jpg",
    subtitle: "Hot water · Vanity mirror · Shower cubicle · Toiletries",
    photoIds: [23, 24, 25, 26, 27],
  },
  {
    id: "gym",
    name: "Gym",
    thumbnail: "/images/thumb_gym.jpg",
    subtitle: "Treadmill · Stationary bike · Dumbbells · Shared access",
    photoIds: [28, 29, 30, 31],
  },
  {
    id: "exterior",
    name: "Exterior",
    thumbnail: "/images/thumb_exterior.jpg",
    subtitle: "Amor de Goa residential building · Courtyard view · Parking",
    photoIds: [32, 33, 34, 35, 36],
  },
  {
    id: "pool",
    name: "Pool",
    thumbnail: "/images/thumb_pool.jpg",
    subtitle: "Shared outdoor pool · Sun loungers · Tropical deck",
    photoIds: [37, 38, 39, 40],
  },
  {
    id: "additional-photos",
    name: "Additional photos",
    thumbnail: "/images/thumb_additional.jpg",
    subtitle: "Private Jacuzzi deck · Garden patio · Outdoor lighting",
    photoIds: [41, 42, 43],
  },
];

export const GALLERY_PHOTOS: GalleryImage[] = [
  // Living room 1 (1 - 6)
  {
    id: 1,
    src: "/images/living_room_1_large.jpg",
    alt: "Spacious living room with warm yellow wall, leather sofa, coffee table and dining table in background",
    category: "living-room-1",
    roomName: "Living room 1",
    caption: "Main living room with plush leather seating and Persian carpet",
  },
  {
    id: 2,
    src: "/images/hero_1.jpg",
    alt: "Private patio lounge with woven armchairs and ambient wall sconces",
    category: "living-room-1",
    roomName: "Living room 1",
    caption: "Lounge seating adjacent to private jacuzzi",
  },
  {
    id: 3,
    src: "/images/hero_2.jpg",
    alt: "Patio seating under evening lighting with potted plants and glass coffee table",
    category: "living-room-1",
    roomName: "Living room 1",
    caption: "Warm ambiance in the outdoor living area",
  },
  {
    id: 4,
    src: "/images/thumb_living_room_1.jpg",
    alt: "Living room overview towards dining space",
    category: "living-room-1",
    roomName: "Living room 1",
    caption: "Airy open plan living and dining layout",
  },
  {
    id: 5,
    src: "/images/living_room_1_large.jpg",
    alt: "Living room wall art and lamp detail",
    category: "living-room-1",
    roomName: "Living room 1",
    caption: "Curated wall artwork and vintage wooden credenza",
  },
  {
    id: 6,
    src: "/images/hero_1.jpg",
    alt: "Living room entertainment setup with TV",
    category: "living-room-1",
    roomName: "Living room 1",
    caption: "Entertainment center with high definition display",
  },

  // Living room 2 (7 - 11)
  {
    id: 7,
    src: "/images/thumb_living_room_2.jpg",
    alt: "Secondary lounge with comfortable armchairs and stone accent wall",
    category: "living-room-2",
    roomName: "Living room 2",
    caption: "Secondary seating area with stone texture wall",
  },
  {
    id: 8,
    src: "/images/hero_2.jpg",
    alt: "Outdoor covered lounge area with ottoman and coffee table",
    category: "living-room-2",
    roomName: "Living room 2",
    caption: "Outdoor covered lounge seating",
  },
  {
    id: 9,
    src: "/images/hero_1.jpg",
    alt: "Lounge seating next to Jacuzzi with ambient spotlights",
    category: "living-room-2",
    roomName: "Living room 2",
    caption: "Relaxing seating with direct access to private hot tub",
  },
  {
    id: 10,
    src: "/images/thumb_living_room_2.jpg",
    alt: "Evening view of the lounge area with soft lighting",
    category: "living-room-2",
    roomName: "Living room 2",
    caption: "Atmospheric evening relaxation spot",
  },
  {
    id: 11,
    src: "/images/hero_2.jpg",
    alt: "Lounge corner with tropical potted palm",
    category: "living-room-2",
    roomName: "Living room 2",
    caption: "Lush potted palms and designer rattan furniture",
  },

  // Full kitchen (12 - 16)
  {
    id: 12,
    src: "/images/thumb_kitchen.jpg",
    alt: "Modern modular kitchen with wooden cabinets and induction cooktop",
    category: "full-kitchen",
    roomName: "Full kitchen",
    caption: "Fully equipped modular kitchen for home cooking",
  },
  {
    id: 13,
    src: "/images/thumb_kitchen.jpg",
    alt: "Kitchen countertops with microwave and kettle",
    category: "full-kitchen",
    roomName: "Full kitchen",
    caption: "Modern kitchen appliances including microwave and electric kettle",
  },
  {
    id: 14,
    src: "/images/thumb_kitchen.jpg",
    alt: "Overhead kitchen cabinetry with pendant lighting",
    category: "full-kitchen",
    roomName: "Full kitchen",
    caption: "Warm pendant lights over breakfast bar and workspace",
  },
  {
    id: 15,
    src: "/images/thumb_kitchen.jpg",
    alt: "Kitchen storage, cookware and glassware",
    category: "full-kitchen",
    roomName: "Full kitchen",
    caption: "Complete set of dinnerware, pots, pans, and cutlery",
  },
  {
    id: 16,
    src: "/images/thumb_kitchen.jpg",
    alt: "Refrigerator and pantry storage area",
    category: "full-kitchen",
    roomName: "Full kitchen",
    caption: "Full size frost-free refrigerator and water purifier",
  },

  // Bedroom (17 - 22)
  {
    id: 17,
    src: "/images/hero_4.jpg",
    alt: "Sunlit bedroom with king bed, floor length mirror and windows",
    category: "bedroom",
    roomName: "Bedroom",
    caption: "Primary bedroom suite with plush king size mattress",
  },
  {
    id: 18,
    src: "/images/thumb_bedroom.jpg",
    alt: "Bedroom view showing wooden wardrobe and ceiling fan",
    category: "bedroom",
    roomName: "Bedroom",
    caption: "Spacious wooden wardrobe with ample hanger storage",
  },
  {
    id: 19,
    src: "/images/hero_4.jpg",
    alt: "Dressed king bed with fresh white linens and bedside lighting",
    category: "bedroom",
    roomName: "Bedroom",
    caption: "Hotel grade linens, hypoallergenic pillows and soft lighting",
  },
  {
    id: 20,
    src: "/images/thumb_bedroom.jpg",
    alt: "Full length dressing mirror and polished wood flooring",
    category: "bedroom",
    roomName: "Bedroom",
    caption: "Full length vanity mirror and ensuite bathroom entryway",
  },
  {
    id: 21,
    src: "/images/hero_4.jpg",
    alt: "Window curtains and natural morning lighting in bedroom",
    category: "bedroom",
    roomName: "Bedroom",
    caption: "Large windows offering gentle morning sunshine and blackout drapes",
  },
  {
    id: 22,
    src: "/images/thumb_bedroom.jpg",
    alt: "Bedside nightstand and charging points",
    category: "bedroom",
    roomName: "Bedroom",
    caption: "Convenient bedside charging sockets and reading lamps",
  },

  // Full bathroom (23 - 27)
  {
    id: 23,
    src: "/images/thumb_bathroom.jpg",
    alt: "Modern bathroom with granite vanity, oval mirror and walk-in shower",
    category: "full-bathroom",
    roomName: "Full bathroom",
    caption: "Immaculate ensuite bathroom with modern sanitary fittings",
  },
  {
    id: 24,
    src: "/images/thumb_bathroom.jpg",
    alt: "Shower area with continuous hot water supply",
    category: "full-bathroom",
    roomName: "Full bathroom",
    caption: "Spacious shower stall with powerful hot water pressure",
  },
  {
    id: 25,
    src: "/images/thumb_bathroom.jpg",
    alt: "Backlit oval bathroom mirror and designer basin",
    category: "full-bathroom",
    roomName: "Full bathroom",
    caption: "Designer vanity counter with complimentary toiletries",
  },
  {
    id: 26,
    src: "/images/thumb_bathroom.jpg",
    alt: "Bathroom storage and fresh towel rack",
    category: "full-bathroom",
    roomName: "Full bathroom",
    caption: "Plush cotton bath towels and hand towels provided",
  },
  {
    id: 27,
    src: "/images/thumb_bathroom.jpg",
    alt: "Ventilation and exhaust in bathroom",
    category: "full-bathroom",
    roomName: "Full bathroom",
    caption: "Well ventilated bathroom with exhaust fan and anti-skid tiles",
  },

  // Gym (28 - 31)
  {
    id: 28,
    src: "/images/thumb_gym.jpg",
    alt: "Community fitness center with treadmill, elliptical and free weights",
    category: "gym",
    roomName: "Gym",
    caption: "Well-equipped clubhouse fitness center",
  },
  {
    id: 29,
    src: "/images/thumb_gym.jpg",
    alt: "Cardio training equipment in complex gym",
    category: "gym",
    roomName: "Gym",
    caption: "Treadmills and cross-trainers for morning workouts",
  },
  {
    id: 30,
    src: "/images/thumb_gym.jpg",
    alt: "Dumbbell weight rack and exercise mats",
    category: "gym",
    roomName: "Gym",
    caption: "Free weights, benches, and resistance workout gear",
  },
  {
    id: 31,
    src: "/images/thumb_gym.jpg",
    alt: "Air-conditioned fitness studio interior",
    category: "gym",
    roomName: "Gym",
    caption: "Clean, air-conditioned workout space for guests",
  },

  // Exterior (32 - 36)
  {
    id: 32,
    src: "/images/hero_5.jpg",
    alt: "Amor de Goa residential complex exterior with terracotta tiled roof and balconies",
    category: "exterior",
    roomName: "Exterior",
    caption: "Amor de Goa gated community architecture",
  },
  {
    id: 33,
    src: "/images/thumb_exterior.jpg",
    alt: "Aerial perspective of the holiday apartment building surrounded by palm trees",
    category: "exterior",
    roomName: "Exterior",
    caption: "Scenic tropical setting in Candolim, North Goa",
  },
  {
    id: 34,
    src: "/images/hero_5.jpg",
    alt: "Front facade and entrance of the building",
    category: "exterior",
    roomName: "Exterior",
    caption: "Secure gated entrance with 24/7 security personnel",
  },
  {
    id: 35,
    src: "/images/thumb_exterior.jpg",
    alt: "Paved parking area and exterior landscaping",
    category: "exterior",
    roomName: "Exterior",
    caption: "Designated covered parking slots for guest vehicles",
  },
  {
    id: 36,
    src: "/images/hero_5.jpg",
    alt: "Portuguese influenced architectural detail and balconies",
    category: "exterior",
    roomName: "Exterior",
    caption: "Charming Goan-Portuguese architectural styling",
  },

  // Pool (37 - 40)
  {
    id: 37,
    src: "/images/thumb_pool.jpg",
    alt: "Courtyard swimming pool with wooden deck surrounded by apartment wings",
    category: "pool",
    roomName: "Pool",
    caption: "Central courtyard swimming pool with sun deck",
  },
  {
    id: 38,
    src: "/images/thumb_pool.jpg",
    alt: "Crystal clear pool water and poolside loungers",
    category: "pool",
    roomName: "Pool",
    caption: "Pristine swimming pool maintained daily",
  },
  {
    id: 39,
    src: "/images/thumb_pool.jpg",
    alt: "Evening view of the courtyard pool illuminated with underwater lights",
    category: "pool",
    roomName: "Pool",
    caption: "Peaceful evening poolside ambiance",
  },
  {
    id: 40,
    src: "/images/thumb_pool.jpg",
    alt: "Outdoor poolside shower and deck furniture",
    category: "pool",
    roomName: "Pool",
    caption: "Poolside shower and shaded seating areas",
  },

  // Additional photos / Jacuzzi (41 - 43)
  {
    id: 41,
    src: "/images/hero_3.jpg",
    alt: "Private whirlpool jacuzzi bathtub installed in outdoor wooden decking",
    category: "additional-photos",
    roomName: "Additional photos",
    caption: "Private romantic Jacuzzi with hydrotherapy massage jets",
  },
  {
    id: 42,
    src: "/images/thumb_additional.jpg",
    alt: "Jacuzzi surrounded by tropical greenery and ambient night lights",
    category: "additional-photos",
    roomName: "Additional photos",
    caption: "Secluded Jacuzzi deck under the stars",
  },
  {
    id: 43,
    src: "/images/hero_1.jpg",
    alt: "Full patio relaxation area featuring the outdoor jacuzzi and lounge chairs",
    category: "additional-photos",
    roomName: "Additional photos",
    caption: "Exclusive private patio and whirlpool spa retreat",
  },
];

export const HERO_IMAGES = [
  GALLERY_PHOTOS[1], // Hero 1 (Large left)
  GALLERY_PHOTOS[2], // Hero 2 (Top-mid)
  GALLERY_PHOTOS[40], // Hero 3 (Top-right Jacuzzi)
  GALLERY_PHOTOS[16], // Hero 4 (Bottom-mid Bedroom)
  GALLERY_PHOTOS[31], // Hero 5 (Bottom-right Exterior)
];
