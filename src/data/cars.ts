export interface Car {
  id: string;
  name: string;
  category: "Economy" | "Sedan" | "Premium SUV" | "Luxury";
  seats: number;
  transmission: "Manual" | "Automatic";
  ac: boolean;
  fuel: string;
  description: string;
  price: string;
  image: string;
  altText: string;
  featured?: boolean;
}

export function carImageUrl(car: Car) {
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
    featured: true,
  }
];

export const featuredCars = cars.filter((car) => car.featured);
