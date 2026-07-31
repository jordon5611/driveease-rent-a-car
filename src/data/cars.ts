export interface Car {
  id: string;
  name: string;
  category: "Economy" | "Sedan" | "SUV" | "Hatchback" | "Hybrid";
  seats: number;
  transmission: "Manual" | "Automatic";
  ac: boolean;
  fuel: string;
  description: string;
  /** Base Unsplash URL, with no sizing params. See carImageUrl. */
  image: string;
  /**
   * Where the car actually sits in the photo, as 0-1 fractions of the frame,
   * plus an optional zoom. Only needed when the vehicle is not centred.
   */
  focus?: { x?: number; y?: number; z?: number };
  altText: string;
  /** Shown on the home page. The full list always lives at /fleet. */
  featured?: boolean;
}

// The shape the fleet cards render images at.
const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 500;

/**
 * Several source photos are portrait, or put the car well off centre, so a
 * plain centre crop slices the vehicle in half. Asking the CDN for an image
 * already cropped around the car's focal point means what we download is
 * exactly the shape the card needs, and nothing has to be cropped again.
 */
export function carImageUrl(car: Car) {
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
    image: "https://images.unsplash.com/photo-1641333326784-24a9c21d3c4e",
    // Portrait photo; the truck sits low in the frame.
    focus: { y: 0.72 },
    altText: "Toyota Revo for rent in Karachi",
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
    description:
      "A premium full size SUV offering comfort and power for family trips and corporate travel.",
    image: "https://images.unsplash.com/photo-1664783856972-ac9922d7b2d3",
    // Portrait photo; the SUV sits low in the frame.
    focus: { y: 0.72 },
    altText: "Toyota Fortuner for rent in Karachi",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1638618164682-12b986ec2a75",
    altText: "Toyota Corolla rental car Karachi",
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
    description:
      "A stylish and sporty sedan with a smooth ride, ideal for business travel and airport transfers.",
    image: "https://images.unsplash.com/photo-1570303278489-041bd897a873",
    // Portrait photo; the car's front end sits above centre.
    focus: { y: 0.4 },
    altText: "Honda Civic on rent Karachi Pakistan",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1762944080822-ff6e79bb8099",
    // The car is small and off to the right, so this crops in tightly.
    focus: { x: 0.8, y: 0.56, z: 2.2 },
    altText: "Suzuki Alto for rent in Karachi",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
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
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a",
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
    image: "https://images.unsplash.com/photo-1551952237-954a0e68786c",
    // Wide landscape shot with the car parked far right.
    focus: { x: 0.72, y: 0.72, z: 2.1 },
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
    image: "https://images.unsplash.com/photo-1707050050343-352947150d4e",
    focus: { x: 0.62, y: 0.62, z: 1.4 },
    altText: "Toyota Prius on rent Karachi Pakistan",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1714213624189-9a9fc8a0736a",
    focus: { x: 0.45, y: 0.62, z: 1.5 },
    altText: "JAC T9 pickup truck rental Karachi",
  },
];

/** The six models shown on the home page, in fleet order. */
export const featuredCars = cars.filter((car) => car.featured);
