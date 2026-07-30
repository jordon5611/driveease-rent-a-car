export interface Car {
  id: string;
  name: string;
  category: "Economy" | "Sedan" | "SUV" | "Hatchback" | "Hybrid";
  seats: number;
  transmission: "Manual" | "Automatic";
  ac: boolean;
  fuel: string;
  description: string;
  image: string;
  altText: string;
}

export const cars: Car[] = [
  {
    id: "toyota-revo",
    name: "Toyota Revo",
    category: "SUV",
    seats: 7,
    transmission: "Manual",
    ac: true,
    fuel: "Diesel",
    description:
      "A powerful 4x4 SUV ideal for long trips and rough terrain around Karachi and beyond.",
    image:
      "https://images.unsplash.com/photo-1641333326784-24a9c21d3c4e?w=800&q=80",
    altText: "Toyota Revo for rent in Karachi",
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    seats: 7,
    transmission: "Automatic",
    ac: true,
    fuel: "Diesel",
    description:
      "A premium full size SUV offering comfort and power for family trips and corporate travel.",
    image:
      "https://images.unsplash.com/photo-1664783856972-ac9922d7b2d3?w=800&q=80",
    altText: "Toyota Fortuner for rent in Karachi",
  },
  {
    id: "toyota-corolla",
    name: "Toyota Corolla",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description:
      "Pakistan's most trusted sedan. Comfortable, fuel efficient and perfect for city driving in Karachi.",
    image:
      "https://images.unsplash.com/photo-1638618164682-12b986ec2a75?w=800&q=80",
    altText: "Toyota Corolla rental car Karachi",
  },
  {
    id: "honda-civic",
    name: "Honda Civic",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description:
      "A stylish and sporty sedan with a smooth ride, ideal for business travel and airport transfers.",
    image:
      "https://images.unsplash.com/photo-1570303278489-041bd897a873?w=800&q=80",
    altText: "Honda Civic on rent Karachi Pakistan",
  },
  {
    id: "suzuki-alto",
    name: "Suzuki Alto",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    ac: true,
    fuel: "Petrol",
    description:
      "A compact and economical city car, perfect for budget friendly daily rentals in Karachi.",
    image:
      "https://images.unsplash.com/photo-1762944080822-ff6e79bb8099?w=800&q=80",
    altText: "Suzuki Alto for rent in Karachi",
  },
  {
    id: "toyota-vitz",
    name: "Toyota Vitz",
    category: "Hatchback",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description:
      "A popular Japanese hatchback known for reliability, low fuel consumption and easy city driving.",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    altText: "Toyota Vitz rental car Karachi",
  },
  {
    id: "toyota-yaris",
    name: "Toyota Yaris",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description:
      "A modern and comfortable sedan with great fuel economy, suitable for all types of trips.",
    image:
      "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&q=80",
    altText: "Toyota Yaris for rent in Karachi Pakistan",
  },
  {
    id: "toyota-aqua",
    name: "Toyota Aqua",
    category: "Hybrid",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Hybrid",
    description:
      "A fuel efficient hybrid vehicle that is gentle on your wallet and the environment.",
    image:
      "https://images.unsplash.com/photo-1551952237-954a0e68786c?w=800&q=80",
    altText: "Toyota Aqua hybrid car rental Karachi",
  },
  {
    id: "toyota-prius",
    name: "Toyota Prius",
    category: "Hybrid",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Hybrid",
    description:
      "The world renowned hybrid sedan offering exceptional fuel efficiency for long distance travel.",
    image:
      "https://images.unsplash.com/photo-1707050050343-352947150d4e?w=800&q=80",
    altText: "Toyota Prius on rent Karachi Pakistan",
  },
  {
    id: "jac-t9",
    name: "JAC T9",
    category: "SUV",
    seats: 5,
    transmission: "Automatic",
    ac: true,
    fuel: "Petrol",
    description:
      "A rugged and capable pickup truck offering powerful performance, modern features and a commanding road presence.",
    image:
      "https://images.unsplash.com/photo-1714213624189-9a9fc8a0736a?w=800&q=80",
    altText: "JAC T9 pickup truck rental Karachi",
  },
];
