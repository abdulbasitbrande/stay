// mock/properties.ts

// import { Property } from "@/types/property";

// export const properties: Property[] = [
//   {
//     id: 1,
//     title: "Elegant Contemporary Villa with a Garden",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     image: "/assets/images/villa (1).jpg",
//     tags: ["VILLA", "1 BEDROOM", "2 BATHROOM", "839 SQ.FT"],
//   },
//   {
//     id: 2,
//     title: "Prime Location Generous Space High Return",
//     description: "Lorem ipsum dolor sit amet consectetur.",
//     image: "/assets/images/villa (2).jpg",
//     tags: ["VILLA", "1 BEDROOM", "2 BATHROOM", "839 SQ.FT"],
//   },
//   {
//     id: 3,
//     title: "Luxury Modern Villa",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.",
//     image: "/assets/images/villa (3).jpg",
//     tags: ["VILLA", "1 BEDROOM", "2 BATHROOM", "839 SQ.FT"],
//   },
//   {
//     id: 4,
//     title: "Luxury Modern Villa",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.",
//     image: "/assets/images/villa (3).jpg",
//     tags: ["VILLA", "1 BEDROOM", "2 BATHROOM", "839 SQ.FT"],
//   },
// ];

import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Villa",
    price: 2700000,
    type: "villa",
    beds: 4,
    areasize: 3200,
    location: "JVT Dubai",
    purpose: "buy",
    amenities: ["pool", "garden"],
    slug: "modern-villa-jvt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.",
    image: "/assets/images/villa (3).jpg",
    tags: ["VILLA", "1 BEDROOM", "2 BATHROOM", "839 SQ.FT"],
  },
  {
    id: "2",
    title: "Luxury Apartment",
    price: 900000,
    type: "apartment",
    beds: 2,
    areasize: 1200,
    location: "Dubai Marina",
    purpose: "rent",
    amenities: ["gym"],
    slug: "luxury-apartment-marina",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.",
    image: "/assets/images/villa (3).jpg",
    tags: ["VILLA", "1 BEDROOM", "2 BATHROOM", "839 SQ.FT"],
  },
  {
    id: "3",
    title: "Offplan Penthouse",
    price: 5000000,
    type: "penthouse",
    beds: 5,
    areasize: 5000,
    location: "Downtown Dubai",
    purpose: "offplan",
    amenities: ["pool", "gym"],
    slug: "offplan-penthouse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.",
    image: "/assets/images/villa (3).jpg",
    tags: ["VILLA", "1 BEDROOM", "2 BATHROOM", "839 SQ.FT"],
  },
];
