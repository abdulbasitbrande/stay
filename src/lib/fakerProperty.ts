import { faker } from "@faker-js/faker";

const imageGallery = [
  "/assets/images/propgal (1).jpg",
  "/assets/images/propgal (2).jpg",
  "/assets/images/propgal (3).jpg",
  "/assets/images/propgal (4).jpg",
  "/assets/images/propgal (5).jpg",
];

const mainImage = "/assets/images/villa (3).jpg";

const amenitiesPool = [
  {
    title: "pool",
    description: "Private swimming pool with temperature control.",
  },
  {
    title: "garden",
    description: "Landscaped green garden area.",
  },
  {
    title: "gym",
    description: "Fully equipped modern gym.",
  },
  {
    title: "security",
    description: "24/7 CCTV and security system.",
  },
  {
    title: "parking",
    description: "Dedicated covered parking spaces.",
  },
];

// -------------------- Helpers --------------------

function getRandomAmenities() {
  return faker.helpers.arrayElements(amenitiesPool, 2);
}

function getRandomGallery() {
  return faker.helpers.arrayElements(imageGallery, 5).map((src) => ({ src }));
}

function getRandomTags(): string[] {
  const base = faker.helpers.arrayElements(
    ["VILLA", "APARTMENT", "PENTHOUSE", "DUPLEX", "STUDIO"],
    1
  );

  const details = [
    `${faker.number.int({ min: 1, max: 5 })} BEDROOM`,
    `${faker.number.int({ min: 1, max: 4 })} BATHROOM`,
    `${faker.number.int({ min: 800, max: 5000 })} SQ.FT`,
  ];

  return [...base, ...details];
}

// UAE-style fake phone generator
function generatePhone(): number {
  return Number(
    `9715${faker.number.int({
      min: 10000000,
      max: 99999999,
    })}`
  );
}

// -------------------- Main Generator --------------------

export function generateProperty(id: number) {
  const type = faker.helpers.arrayElement([
    "villa",
    "apartment",
    "penthouse",
  ]);

  const purpose = faker.helpers.arrayElement(["buy", "rent"]);

  const phone = generatePhone();

  return {
    projectData: {
      projectCard: {
        id: String(id),

        title: `${faker.helpers.arrayElement([
          "Luxury Living",
          "Modern Home",
          "Premium Residence",
          "Elegant Villa",
          "Skyline Apartment",
        ])} | ${faker.company.catchPhrase()}`,

        price: faker.number.int({ min: 900000, max: 8000000 }),

        type,

        beds: faker.number.int({ min: 1, max: 6 }),

        areasize: faker.number.int({ min: 700, max: 5000 }),

        location: faker.helpers.arrayElement([
          "Downtown Dubai",
          "Dubai Marina",
          "JVC Dubai",
          "Business Bay",
          "Palm Jumeirah",
        ]),

        // ✅ Random buy/rent
        purpose,

        amenities: getRandomAmenities(),

        slug: faker.helpers.slugify(`property-${id}-${type}`),

        description: faker.lorem.sentences(2),

        image: mainImage,

        tags: getRandomTags(),
      },

      gallery: {
        galleryItem: getRandomGallery(),
      },

      agent: {
        image: "assets/images/agent.jpg",
        title: faker.person.fullName().toUpperCase(),
        designation: faker.person.jobTitle(),
        email: faker.internet.email(),
        phone,
        whatsapp: phone,
      },

      propertyLocation: {
        title: faker.location.street(),
        description: faker.location.secondaryAddress(),
        link: "https://www.google.com",
      },

      permit: {
        permitNumber: faker.number.int({
          min: 1000000000,
          max: 9999999999,
        }),
        qrcode: "assets/images/qrcode.png",
      },
    },
  };
}