
import { Sneaker } from "../types/sneaker";

export const sneakerData: Sneaker[] = [
  {
    id: "aj1-chicago",
    name: "Air Jordan 1 High",
    brand: "Jordan",
    model: "Air Jordan 1",
    description: "The shoe that started it all, the Air Jordan 1 in the iconic Chicago colorway became an instant classic.",
    releaseYear: 1985,
    releaseDate: "1985-04-01",
    price: 65,
    colorways: [
      { name: "Chicago", color: "#CE1141" },
      { name: "Black Toe", color: "#000000" },
      { name: "Royal Blue", color: "#1D4289" }
    ],
    categories: ["basketball", "lifestyle", "retro"],
    materials: ["leather", "rubber"],
    designer: "Peter Moore",
    story: "Michael Jordan's first signature shoe that was banned by the NBA, creating instant notoriety and changing sneaker culture forever.",
    images: [
      { url: "https://images.unsplash.com/photo-1591731247631-36556a030281?q=80&w=1000", alt: "Air Jordan 1 Chicago Profile", primary: true },
      { url: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwam9yZGFuJTIwMXxlbnwwfHwwfHx8MA%3D%3D", alt: "Air Jordan 1 Side View" }
    ],
    affiliateLinks: [
      { name: "StockX", url: "https://stockx.com/air-jordan-1-retro-high-chicago-2015" },
      { name: "GOAT", url: "https://www.goat.com/sneakers/air-jordan-1-retro-high-og-chicago-555088-101" },
      { name: "Nike", url: "https://www.nike.com/jordan" }
    ],
    featured: true
  },
  {
    id: "yeezy-350-zebra",
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    model: "Yeezy Boost 350 V2",
    description: "The Adidas Yeezy Boost 350 V2 'Zebra' features a striking white and black Primeknit pattern.",
    releaseYear: 2017,
    releaseDate: "2017-02-25",
    price: 220,
    colorways: [
      { name: "Zebra", color: "#FFFFFF" },
      { name: "Beluga", color: "#BB6B42" },
      { name: "Black Red", color: "#000000" }
    ],
    categories: ["lifestyle", "running"],
    materials: ["primeknit", "boost", "rubber"],
    designer: "Kanye West",
    story: "Part of Kanye West's influential Yeezy line with Adidas, the 350 V2 became one of the most coveted sneakers in modern history.",
    images: [
      { url: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000", alt: "Yeezy Boost 350 V2 Zebra", primary: true },
      { url: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVlenl8ZW58MHx8MHx8fDA%3D", alt: "Yeezy Boost 350 V2 Side View" }
    ],
    affiliateLinks: [
      { name: "StockX", url: "https://stockx.com/adidas-yeezy-boost-350-v2-zebra" },
      { name: "GOAT", url: "https://www.goat.com/sneakers/yeezy-boost-350-v2-zebra-cp9654" },
      { name: "Adidas", url: "https://www.adidas.com/yeezy" }
    ],
    featured: true
  },
  {
    id: "af1-white",
    name: "Air Force 1 Low",
    brand: "Nike",
    model: "Air Force 1",
    description: "The classic all-white Air Force 1 Low, a timeless sneaker that has been a staple in fashion and streetwear.",
    releaseYear: 1982,
    releaseDate: "1982-06-01",
    price: 90,
    colorways: [
      { name: "White", color: "#FFFFFF" },
      { name: "Black", color: "#000000" },
      { name: "Flax", color: "#D3B784" }
    ],
    categories: ["basketball", "lifestyle"],
    materials: ["leather", "rubber"],
    designer: "Bruce Kilgore",
    story: "Originally a basketball shoe, the Air Force 1 transcended sports to become a cultural icon especially in hip-hop and streetwear communities.",
    images: [
      { url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000", alt: "Nike Air Force 1 White", primary: true },
      { url: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyJTIwZm9yY2UlMjAxfGVufDB8fDB8fHww", alt: "Air Force 1 Front View" }
    ],
    affiliateLinks: [
      { name: "Nike", url: "https://www.nike.com/t/air-force-1-07-mens-shoes-5QFp5Z/CW2288-111" },
      { name: "StockX", url: "https://stockx.com/nike-air-force-1-low-white-07" },
      { name: "GOAT", url: "https://www.goat.com/sneakers/air-force-1-07-white-315122-111" }
    ],
    featured: true
  },
  {
    id: "nb-990",
    name: "990v5",
    brand: "New Balance",
    model: "990",
    description: "The premium New Balance 990v5, known for its comfort, quality materials, and made in the USA craftsmanship.",
    releaseYear: 2019,
    releaseDate: "2019-05-01",
    price: 175,
    colorways: [
      { name: "Grey", color: "#888888" },
      { name: "Navy", color: "#1A2B3C" },
      { name: "Black", color: "#000000" }
    ],
    categories: ["running", "lifestyle"],
    materials: ["suede", "mesh", "rubber"],
    designer: "New Balance Design Team",
    story: "The 990 series has been the flagship of New Balance's premium lineup since 1982, representing American craftsmanship and quality.",
    images: [
      { url: "https://images.unsplash.com/photo-1659593254319-3777fc810953?q=80&w=1000", alt: "New Balance 990v5 Grey", primary: true },
      { url: "https://images.unsplash.com/photo-1621665422246-39e8fc940a4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIwYmFsYW5jZSUyMDk5MHxlbnwwfHwwfHx8MA%3D%3D", alt: "New Balance 990v5 Side View" }
    ],
    affiliateLinks: [
      { name: "New Balance", url: "https://www.newbalance.com/pd/made-in-usa-990v5/M990V5-26577.html" },
      { name: "StockX", url: "https://stockx.com/new-balance-990-v5-grey" },
      { name: "GOAT", url: "https://www.goat.com/sneakers/990v5-made-in-usa-grey-m990gl5" }
    ],
    featured: false
  },
  {
    id: "converse-chuck-taylor",
    name: "Chuck Taylor All Star",
    brand: "Converse",
    model: "Chuck Taylor All Star",
    description: "The iconic canvas basketball sneaker that became a worldwide casual footwear staple.",
    releaseYear: 1917,
    releaseDate: "1917-01-01",
    price: 55,
    colorways: [
      { name: "Black", color: "#000000" },
      { name: "Optical White", color: "#FFFFFF" },
      { name: "Red", color: "#CC0000" }
    ],
    categories: ["basketball", "lifestyle", "skateboarding"],
    materials: ["canvas", "rubber"],
    designer: "Converse Design Team",
    story: "Originally designed as a basketball shoe, the Chuck Taylor All Star became the most successful basketball shoe in history and later a cultural icon.",
    images: [
      { url: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1000", alt: "Converse Chuck Taylor All Star Black", primary: true },
      { url: "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udmVyc2V8ZW58MHx8MHx8fDA%3D", alt: "Chuck Taylor All Star Side View" }
    ],
    affiliateLinks: [
      { name: "Converse", url: "https://www.converse.com/shop/p/chuck-taylor-all-star-unisex-high-top-shoe/M9160.html" },
      { name: "StockX", url: "https://stockx.com/converse-chuck-taylor-all-star-70s-hi-black" },
      { name: "GOAT", url: "https://www.goat.com/sneakers/chuck-taylor-all-star-70-hi-black-162050c" }
    ],
    featured: true
  },
  {
    id: "vans-old-skool",
    name: "Old Skool",
    brand: "Vans",
    model: "Old Skool",
    description: "The classic Vans Old Skool with its iconic side stripe has been a favorite in skate culture and casual fashion.",
    releaseYear: 1977,
    releaseDate: "1977-01-01",
    price: 65,
    colorways: [
      { name: "Black/White", color: "#000000" },
      { name: "Navy", color: "#1A2B3C" },
      { name: "Red", color: "#CC0000" }
    ],
    categories: ["skateboarding", "lifestyle"],
    materials: ["suede", "canvas", "rubber"],
    designer: "Paul Van Doren",
    story: "Originally called the 'Style 36', the Vans Old Skool was the first to feature the iconic side stripe that has become synonymous with the brand.",
    images: [
      { url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000", alt: "Vans Old Skool Black/White", primary: true },
      { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFucyUyMHNob2V8ZW58MHx8MHx8fDA%3D", alt: "Vans Old Skool Side View" }
    ],
    affiliateLinks: [
      { name: "Vans", url: "https://www.vans.com/shop/old-skool-black-white" },
      { name: "StockX", url: "https://stockx.com/vans-old-skool-black-white" },
      { name: "GOAT", url: "https://www.goat.com/sneakers/old-skool-black-white-vn000d3hy28" }
    ],
    featured: false
  }
];

export const getAllSneakers = (): Sneaker[] => {
  return sneakerData;
};

export const getFeaturedSneakers = (): Sneaker[] => {
  return sneakerData.filter(sneaker => sneaker.featured);
};

export const getSneakerById = (id: string): Sneaker | undefined => {
  return sneakerData.find(sneaker => sneaker.id === id);
};

export const getSneakersByBrand = (brand: string): Sneaker[] => {
  return sneakerData.filter(sneaker => 
    sneaker.brand.toLowerCase() === brand.toLowerCase()
  );
};

export const getSneakersByCategory = (category: string): Sneaker[] => {
  return sneakerData.filter(sneaker => 
    sneaker.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
};

export const searchSneakers = (query: string): Sneaker[] => {
  const lowerQuery = query.toLowerCase();
  return sneakerData.filter(sneaker => 
    sneaker.name.toLowerCase().includes(lowerQuery) ||
    sneaker.brand.toLowerCase().includes(lowerQuery) ||
    sneaker.model.toLowerCase().includes(lowerQuery) ||
    sneaker.description.toLowerCase().includes(lowerQuery)
  );
};

export const getBrands = (): string[] => {
  const brandsSet = new Set(sneakerData.map(sneaker => sneaker.brand));
  return Array.from(brandsSet);
};

export const getCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  sneakerData.forEach(sneaker => {
    sneaker.categories.forEach(category => {
      categoriesSet.add(category);
    });
  });
  return Array.from(categoriesSet);
};
