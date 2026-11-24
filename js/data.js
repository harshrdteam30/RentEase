const categories = [
  { id: "cameras", name: "Cameras & Photography", icon: "📷" },
  { id: "party", name: "Party & Events", icon: "🎉" },
  { id: "tools", name: "Tools & Home Improvement", icon: "🛠️" },
  { id: "furniture", name: "Furniture & Décor", icon: "🛋️" },
  { id: "electronics", name: "Laptops & Electronics", icon: "💻" },
  { id: "sports", name: "Sports & Fitness", icon: "🏋️" },
  { id: "music", name: "Musical Instruments", icon: "🎸" },
  { id: "vehicles", name: "Cars & Bikes", icon: "🚗" }
];

const products = [
  {
    id: 1,
    name: "Canon DSLR Camera",
    category: "cameras",
    price: 900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    description: "Professional DSLR camera suitable for photography, events and video recording."
  },
  {
    id: 2,
    name: "JBL Party Speaker",
    category: "party",
    price: 600,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description: "Powerful Bluetooth party speaker for birthdays, weddings and events."
  },
  {
    id: 3,
    name: "Cordless Drill Machine",
    category: "tools",
    price: 300,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    description: "Cordless drill machine for home repair, furniture assembly and small construction work."
  },
  {
    id: 4,
    name: "Modern Sofa Set",
    category: "furniture",
    price: 1200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable 3-seater sofa set for home, office or event decoration."
  },
  {
    id: 5,
    name: "Gaming Laptop",
    category: "electronics",
    price: 1500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    description: "High-performance laptop for gaming, programming, editing and student projects."
  },
  {
    id: 6,
    name: "Dumbbell Set",
    category: "sports",
    price: 400,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    description: "Adjustable dumbbell set for home workout and fitness training."
  },
  {
    id: 7,
    name: "Acoustic Guitar",
    category: "music",
    price: 500,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80",
    description: "Acoustic guitar for beginners, college events and music practice."
  },
  {
    id: 8,
    name: "Royal Enfield Bike",
    category: "vehicles",
    price: 1800,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    description: "Classic bike available for daily and weekly rental with helmet included."
  },
  {
    id: 9,
    name: "LED Projector",
    category: "electronics",
    price: 800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1594922082796-9b2f5f2b3e1a?auto=format&fit=crop&w=800&q=80",
    description: "HD projector for movie nights, presentations, seminars and events."
  },
  {
    id: 10,
    name: "Camping Tent",
    category: "sports",
    price: 350,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    description: "Water-resistant camping tent for 4 people, ideal for trips and trekking."
  },
  {
    id: 11,
    name: "DJ Lighting Set",
    category: "party",
    price: 1000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
    description: "Colorful DJ lighting set for parties, weddings and college events."
  },
  {
    id: 12,
    name: "Study Table",
    category: "furniture",
    price: 250,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    description: "Wooden study table for students, home office and workspace setup."
  }
];