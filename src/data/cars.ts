export interface Car {
  id: string;
  name: string;
  category: "Economy" | "Sedan" | "SUV" | "Premium SUV" | "Hatchback" | "Hybrid" | "Luxury";
  seats: number;
  transmission: "Manual" | "Automatic";
  ac: boolean;
  fuel: string;
  description: string;
  price: string;
  image: string;
  focus?: { x?: number; y?: number; z?: number };
  altText: string;
  featured?: boolean;
  lastModified?: string;
}

const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 500;

export function carImageUrl(car: Car) {
  if (car.image.startsWith("http")) {
    const { x = 0.5, y = 0.5, z = 1 } = car.focus ?? {};
    const params = new URLSearchParams({
      w: String(IMAGE_WIDTH),
      h: String(IMAGE_HEIGHT),
      fit: "crop",
      crop: "focalpoint",
      "fp-x": String(x),
      "fp-y": String(y),
      "fp-z": String(z),
      q: "80",
    });
    return `${car.image}?${params}`;
  }
  return car.image;
}

export const cars: Car[] = [
  {
    id: "toyota-corolla",
    name: "Toyota Corolla",
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description: "Reliable & fuel-efficient choice for everyday commutes in Karachi.",
    price: "PKR 4,000/day",
    image: "/images/toyota_corolla.jpg",
    altText: "Toyota Corolla for rent in Karachi",
    lastModified: "2026-08-15",
    featured: true,
  },
  {
    id: "honda-civic",
    name: "Honda Civic",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description: "Comfortable and spacious. Ideal for families and executives.",
    price: "PKR 5,000/day",
    image: "/images/honda_civic.jpg",
    altText: "Honda Civic for rent in Karachi",
    lastModified: "2026-08-15",
    featured: true,
  },
  {
    id: "toyota-yaris",
    name: "Toyota Yaris",
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description: "A modern, reliable choice for daily city commute.",
    price: "PKR 5,000/day",
    image: "/images/toyota_yaris.jpg",
    altText: "Toyota Yaris for rent in Karachi",
    lastModified: "2026-08-15",
    featured: true,
  },
  {
    id: "toyota-hilux-revo",
    name: "Toyota Hilux Revo",
    category: "Premium SUV",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Diesel",
    description: "Command respect on the roads with this robust 4x4 pickup.",
    price: "PKR 9,000/day",
    image: "/images/toyota_hilux_revo.jpg",
    altText: "Toyota Hilux Revo for rent in Karachi",
    lastModified: "2026-08-15",
    featured: true,
  },
  {
    id: "land-cruiser-v8",
    name: "Land Cruiser V8 / Prado",
    category: "Premium SUV",
    seats: 7,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description: "The ultimate luxury SUV for VIP travel and premium comfort.",
    price: "Ask Rates",
    image: "/images/land_cruiser.jpg",
    altText: "Land Cruiser V8 for rent in Karachi",
    lastModified: "2026-08-15",
    featured: true,
  },
  {
    id: "luxury-benz",
    name: "Audi / BMW / Benz",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description: "Unmatched elegance and status. Protocol and chauffeur services available.",
    price: "Ask Rates",
    image: "/images/luxury_car.jpg",
    altText: "Luxury Mercedes Benz for rent in Karachi",
    lastModified: "2026-08-15",
    featured: true,
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    seats: 7,
    transmission: "Automatic",
    ac: true,
    fuel: "Diesel",
    description: "A premium full size SUV offering comfort and power for family trips and corporate travel.",
    price: "PKR 12,000/day",
    image: "/images/toyota_fortuner.jpg",
    altText: "Toyota Fortuner for rent in Karachi",
    lastModified: "2026-08-15",
  },
  {
    id: "suzuki-alto",
    name: "Suzuki Alto",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    ac: true,
    fuel: "Petrol",
    description: "A compact and economical city car, perfect for budget friendly daily rentals in Karachi.",
    price: "PKR 3,000/day",
    image: "/images/suzuki_alto.jpg",
    altText: "Suzuki Alto for rent in Karachi",
    lastModified: "2026-08-15",
  },
  {
    id: "toyota-vitz",
    name: "Toyota Vitz",
    category: "Hatchback",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description: "A popular Japanese hatchback known for reliability, low fuel consumption and easy city driving.",
    price: "PKR 4,000/day",
    image: "/images/toyota_vitz.jpg",
    altText: "Toyota Vitz rental car Karachi",
    lastModified: "2026-08-15",
  },
  {
    id: "toyota-aqua",
    name: "Toyota Aqua",
    category: "Hybrid",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Hybrid",
    description: "A fuel efficient hybrid vehicle that is gentle on your wallet and the environment.",
    price: "PKR 4,500/day",
    image: "/images/toyota_aqua.jpg",
    altText: "Toyota Aqua hybrid car rental Karachi",
    lastModified: "2026-08-15",
  },
  {
    id: "toyota-prius",
    name: "Toyota Prius",
    category: "Hybrid",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Hybrid",
    description: "The world renowned hybrid sedan offering exceptional fuel efficiency for long distance travel.",
    price: "PKR 6,000/day",
    image: "/images/toyota_prius.jpg",
    altText: "Toyota Prius on rent Karachi Pakistan",
    lastModified: "2026-08-15",
  },
  {
    id: "jac-t9",
    name: "JAC T9",
    category: "SUV",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description: "A rugged and capable pickup truck offering powerful performance, modern features and a commanding road presence.",
    price: "PKR 15,000/day",
    image: "/images/jac_t9.jpg",
    altText: "JAC T9 pickup truck rental Karachi",
    lastModified: "2026-08-15",
  }
];

export const featuredCars = cars.filter((car) => car.featured);
