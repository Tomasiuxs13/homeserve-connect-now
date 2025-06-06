
export interface MockService {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  provider: {
    name: string;
    rating: number;
    reviewCount: number;
    image: string;
  };
  city: string;
  state: string;
  isActive: boolean;
}

export const mockServices: MockService[] = [
  {
    id: "1",
    title: "Professional House Cleaning",
    description: "Deep cleaning service for your entire home including all rooms, bathrooms, and kitchen",
    price: 80,
    duration: 240,
    category: "Cleaning",
    provider: {
      name: "Valymo Ekspertai",
      rating: 4.9,
      reviewCount: 127,
      image: "https://images.unsplash.com/photo-1494790108755-2616c7e4b3e8?w=100&h=100&fit=crop&crop=face"
    },
    city: "Vilnius",
    state: "LT",
    isActive: true
  },
  {
    id: "2",
    title: "Kitchen Cabinet Repair",
    description: "Professional cabinet door adjustment, handle replacement, and minor repairs",
    price: 45,
    duration: 120,
    category: "Handyman",
    provider: {
      name: "Meistro Paslaugos",
      rating: 4.7,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    city: "Kaunas",
    state: "LT",
    isActive: true
  },
  {
    id: "3",
    title: "Toilet Installation & Repair",
    description: "Complete toilet installation, repair, and replacement services",
    price: 120,
    duration: 180,
    category: "Plumbing",
    provider: {
      name: "Santechnikos Specialistai",
      rating: 4.8,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    city: "Klaipeda",
    state: "LT",
    isActive: true
  },
  {
    id: "4",
    title: "Outlet Installation",
    description: "Safe installation of new electrical outlets and GFCI outlets",
    price: 55,
    duration: 90,
    category: "Electrical",
    provider: {
      name: "ElektroMeistrai",
      rating: 4.9,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    city: "Vilnius",
    state: "LT",
    isActive: true
  },
  {
    id: "5",
    title: "Interior Room Painting",
    description: "Professional interior painting service with premium paint included",
    price: 180,
    duration: 480,
    category: "Painting",
    provider: {
      name: "Dažymo Profesionalai",
      rating: 4.6,
      reviewCount: 74,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
    },
    city: "Kaunas",
    state: "LT",
    isActive: true
  },
  {
    id: "6",
    title: "Lawn Mowing & Edging",
    description: "Weekly lawn maintenance including mowing, edging, and cleanup",
    price: 35,
    duration: 60,
    category: "Landscaping",
    provider: {
      name: "Žalių Plotų Priežiūra",
      rating: 4.5,
      reviewCount: 112,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    },
    city: "Klaipeda",
    state: "LT",
    isActive: true
  },
  {
    id: "7",
    title: "Local Moving Service",
    description: "Professional local moving within Lithuania with packing services",
    price: 250,
    duration: 360,
    category: "Moving",
    provider: {
      name: "Perkraustymo Ekspertai",
      rating: 4.7,
      reviewCount: 91,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    city: "Vilnius",
    state: "LT",
    isActive: true
  },
  {
    id: "8",
    title: "IKEA Furniture Assembly",
    description: "Expert assembly of IKEA and other furniture brands",
    price: 40,
    duration: 90,
    category: "Assembly",
    provider: {
      name: "Baldų Surinkimo Meistrai",
      rating: 4.8,
      reviewCount: 134,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    city: "Kaunas",
    state: "LT",
    isActive: true
  },
  {
    id: "9",
    title: "Office Deep Cleaning",
    description: "Commercial office cleaning including desks, floors, and common areas",
    price: 65,
    duration: 180,
    category: "Cleaning",
    provider: {
      name: "Komercinė Valyba",
      rating: 4.9,
      reviewCount: 88,
      image: "https://images.unsplash.com/photo-1494790108755-2616c7e4b3e8?w=100&h=100&fit=crop&crop=face"
    },
    city: "Klaipeda",
    state: "LT",
    isActive: true
  },
  {
    id: "10",
    title: "Bathroom Faucet Repair",
    description: "Repair and replacement of bathroom and kitchen faucets",
    price: 75,
    duration: 120,
    category: "Plumbing",
    provider: {
      name: "Greitosios Santechnikos",
      rating: 4.6,
      reviewCount: 67,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    city: "Vilnius",
    state: "LT",
    isActive: true
  }
];

export const cities = [
  "Vilnius",
  "Kaunas", 
  "Klaipeda"
];
