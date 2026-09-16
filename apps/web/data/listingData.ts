export interface ListingData {
  id: string;
  title: string;
  propertyType: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  reviewsCount: number;
  isGuestFavourite: boolean;
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
    yearsHosting: number;
    description: string;
  };
  highlights: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  description: string;
  sleepingArrangement: {
    title: string;
    bedType: string;
  };
  amenities: Array<{
    category: string;
    icon: string;
    name: string;
  }>;
}

export const LISTING_DATA: ListingData = {
  id: "mirashya-ug10",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment",
  location: "Candolim, India",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewsCount: 19,
  isGuestFavourite: true,
  pricePerNight: 5700,
  cleaningFee: 1200,
  serviceFee: 3980,
  host: {
    name: "Mirashya",
    avatar: "/images/host_avatar.svg",
    isSuperhost: true,
    yearsHosting: 3,
    description: "Mirashya Homes manages premium boutique serviced apartments in North Goa, offering couples and families a luxurious, peaceful retreat with personalized hospitality.",
  },
  highlights: [
    {
      icon: "Bath",
      title: "Dive right in",
      description: "This is one of the few places in the area with a private jacuzzi.",
    },
    {
      icon: "Laptop",
      title: "Dedicated workspace",
      description: "A room with wifi that's well-suited for working.",
    },
    {
      icon: "KeyRound",
      title: "Self check-in",
      description: "Check yourself in with the secure smart lockbox.",
    },
  ],
  description:
    "Escape into ultimate comfort at our romantic 1BHK luxury serviced apartment in Candolim, North Goa. Designed with couples in mind, the highlight of this retreat is an exquisite private jacuzzi set against natural stone and lush potted greens. Featuring warm ambient interiors, a fully equipped modular kitchen, plush king-sized bed, high-speed WiFi, and access to a resort-style swimming pool and gym, this is your idyllic Goa sanctuary. Located just 10 minutes from the golden sands of Candolim Beach and fine dining restaurants.",
  sleepingArrangement: {
    title: "Bedroom",
    bedType: "1 king bed",
  },
  amenities: [
    { category: "Scenic views", icon: "Trees", name: "Courtyard view" },
    { category: "Bathroom", icon: "Bath", name: "Private hot tub / jacuzzi" },
    { category: "Bathroom", icon: "ShowerHead", name: "Hot water" },
    { category: "Bedroom and laundry", icon: "Bed", name: "Bed linens & extra pillows" },
    { category: "Entertainment", icon: "Tv", name: "43\" HDTV with Netflix" },
    { category: "Heating and cooling", icon: "AirVent", name: "Air conditioning" },
    { category: "Heating and cooling", icon: "Fan", name: "Ceiling fan" },
    { category: "Home safety", icon: "ShieldCheck", name: "Carbon monoxide alarm" },
    { category: "Internet and office", icon: "Wifi", name: "Wifi – 50 Mbps" },
    { category: "Kitchen and dining", icon: "Utensils", name: "Kitchen" },
    { category: "Kitchen and dining", icon: "Refrigerator", name: "Refrigerator & Microwave" },
    { category: "Parking and facilities", icon: "Car", name: "Free parking on premises" },
    { category: "Parking and facilities", icon: "Waves", name: "Shared outdoor pool" },
    { category: "Parking and facilities", icon: "Dumbbell", name: "Shared gym on premises" },
  ],
};
