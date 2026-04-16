export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Shop {
  id: string;
  name: string;
  category: string;
  logo: string;
  description: string;
  website?: string;
  phone?: string;
  email?: string;
  products: Product[];
}

export const categories = [
  "All",
  "Perfumes",
  "Islamic Products",
  "Stationery",
  "Groceries",
  "Electronics",
  "Cosmetics",
  "Automobiles",
  "Fashion",
  "Jewelry",
  "Bakery",
  "Mobile Accessories",
  "Home Decor"
];

export const shops: Shop[] = [
  {
    id: "1",
    name: "Arabian Essence Perfumes",
    category: "Perfumes",
    logo: "https://images.unsplash.com/photo-1767522247728-a8e304e3660f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbHV4dXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzc2MzE2MDcyfDA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Premium collection of Arabian and international perfumes",
    website: "https://arabianessence.example.com",
    phone: "+971 50 123 4567",
    email: "info@arabianessence.com",
    products: [
      {
        id: "p1",
        name: "Oud Al Malaki",
        price: 299,
        image: "https://images.unsplash.com/photo-1767522247728-a8e304e3660f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbHV4dXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzc2MzE2MDcyfDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Luxurious oud fragrance with royal notes"
      },
      {
        id: "p2",
        name: "Musk Al Tahara",
        price: 89,
        image: "https://images.unsplash.com/photo-1767522247728-a8e304e3660f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbHV4dXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzc2MzE2MDcyfDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Traditional white musk fragrance"
      },
      {
        id: "p3",
        name: "Amber Royale",
        price: 179,
        image: "https://images.unsplash.com/photo-1767522247728-a8e304e3660f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwbHV4dXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzc2MzE2MDcyfDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Rich amber with oriental spices"
      }
    ]
  },
  {
    id: "2",
    name: "Noor Islamic Bookstore",
    category: "Islamic Products",
    logo: "https://images.unsplash.com/photo-1724415471169-d1c322ed8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYm9va3N0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MzE2MDc4fDA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Comprehensive collection of Islamic books, prayer items, and cultural products",
    website: "https://noorislamicbooks.example.com",
    phone: "+971 50 234 5678",
    email: "contact@noorislamic.com",
    products: [
      {
        id: "p4",
        name: "Quran Translation Set",
        price: 149,
        image: "https://images.unsplash.com/photo-1724415471169-d1c322ed8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYm9va3N0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MzE2MDc4fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Complete Quran with multiple language translations"
      },
      {
        id: "p5",
        name: "Premium Prayer Mat",
        price: 79,
        image: "https://images.unsplash.com/photo-1724415471169-d1c322ed8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYm9va3N0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MzE2MDc4fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Handwoven prayer mat with Islamic calligraphy"
      },
      {
        id: "p6",
        name: "Islamic Wall Art",
        price: 199,
        image: "https://images.unsplash.com/photo-1724415471169-d1c322ed8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwYm9va3N0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MzE2MDc4fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Beautiful calligraphy canvas set"
      }
    ]
  },
  {
    id: "3",
    name: "Knowledge Hub Stationery",
    category: "Stationery",
    logo: "https://images.unsplash.com/photo-1558181330-fe3ad47462f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwc3VwcGxpZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzYzMTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Complete range of educational supplies and stationery",
    website: "https://knowledgehub.example.com",
    phone: "+971 50 345 6789",
    email: "info@knowledgehub.com",
    products: [
      {
        id: "p7",
        name: "Student Notebook Set",
        price: 29,
        image: "https://images.unsplash.com/photo-1558181330-fe3ad47462f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwc3VwcGxpZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzYzMTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Pack of 5 premium quality notebooks"
      },
      {
        id: "p8",
        name: "Art Supply Bundle",
        price: 89,
        image: "https://images.unsplash.com/photo-1558181330-fe3ad47462f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwc3VwcGxpZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzYzMTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Complete art supplies for students"
      },
      {
        id: "p9",
        name: "School Backpack",
        price: 129,
        image: "https://images.unsplash.com/photo-1558181330-fe3ad47462f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwc3VwcGxpZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzYzMTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Durable backpack with multiple compartments"
      }
    ]
  },
  {
    id: "4",
    name: "Fresh Market Groceries",
    category: "Groceries",
    logo: "https://images.unsplash.com/photo-1609952578538-3d454550301d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBmcmVzaCUyMHByb2R1Y2V8ZW58MXx8fHwxNzc2MjY4Njg5fDA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Fresh produce and daily grocery essentials",
    website: "https://freshmarket.example.com",
    phone: "+971 50 456 7890",
    email: "hello@freshmarket.com",
    products: [
      {
        id: "p10",
        name: "Organic Vegetables Box",
        price: 45,
        image: "https://images.unsplash.com/photo-1609952578538-3d454550301d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBmcmVzaCUyMHByb2R1Y2V8ZW58MXx8fHwxNzc2MjY4Njg5fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Fresh organic vegetables selection"
      },
      {
        id: "p11",
        name: "Premium Rice 5kg",
        price: 35,
        image: "https://images.unsplash.com/photo-1609952578538-3d454550301d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBmcmVzaCUyMHByb2R1Y2V8ZW58MXx8fHwxNzc2MjY4Njg5fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "High quality basmati rice"
      },
      {
        id: "p12",
        name: "Fresh Fruit Basket",
        price: 59,
        image: "https://images.unsplash.com/photo-1609952578538-3d454550301d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBmcmVzaCUyMHByb2R1Y2V8ZW58MXx8fHwxNzc2MjY4Njg5fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Assorted seasonal fruits"
      }
    ]
  },
  {
    id: "5",
    name: "TechZone Electronics",
    category: "Electronics",
    logo: "https://images.unsplash.com/photo-1740803292814-13d2e35924c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHN0b3JlJTIwbW9kZXJufGVufDF8fHx8MTc3NjI1NjY5Nnww&ixlib=rb-4.1.0&q=80&w=400",
    description: "Latest electronics and gadgets",
    website: "https://techzone.example.com",
    phone: "+971 50 567 8901",
    email: "support@techzone.com",
    products: [
      {
        id: "p13",
        name: "Wireless Headphones",
        price: 299,
        image: "https://images.unsplash.com/photo-1740803292814-13d2e35924c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHN0b3JlJTIwbW9kZXJufGVufDF8fHx8MTc3NjI1NjY5Nnww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Premium noise-cancelling headphones"
      },
      {
        id: "p14",
        name: "Smart Watch",
        price: 499,
        image: "https://images.unsplash.com/photo-1740803292814-13d2e35924c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHN0b3JlJTIwbW9kZXJufGVufDF8fHx8MTc3NjI1NjY5Nnww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Latest smartwatch with health tracking"
      },
      {
        id: "p15",
        name: "Tablet 10 inch",
        price: 799,
        image: "https://images.unsplash.com/photo-1740803292814-13d2e35924c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHN0b3JlJTIwbW9kZXJufGVufDF8fHx8MTc3NjI1NjY5Nnww&ixlib=rb-4.1.0&q=80&w=400",
        description: "High-resolution tablet for work and entertainment"
      }
    ]
  },
  {
    id: "6",
    name: "Glamour Cosmetics",
    category: "Cosmetics",
    logo: "https://images.unsplash.com/photo-1775622360538-7b5b9891c48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBzdG9yZXxlbnwxfHx8fDE3NzYzMTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Premium cosmetics and personal care products",
    website: "https://glamourcosmetics.example.com",
    phone: "+971 50 678 9012",
    email: "info@glamour.com",
    products: [
      {
        id: "p16",
        name: "Skincare Set",
        price: 189,
        image: "https://images.unsplash.com/photo-1775622360538-7b5b9891c48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBzdG9yZXxlbnwxfHx8fDE3NzYzMTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Complete skincare routine set"
      },
      {
        id: "p17",
        name: "Makeup Collection",
        price: 249,
        image: "https://images.unsplash.com/photo-1775622360538-7b5b9891c48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBzdG9yZXxlbnwxfHx8fDE3NzYzMTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Professional makeup palette"
      },
      {
        id: "p18",
        name: "Hair Care Bundle",
        price: 129,
        image: "https://images.unsplash.com/photo-1775622360538-7b5b9891c48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBzdG9yZXxlbnwxfHx8fDE3NzYzMTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Complete hair care treatment"
      }
    ]
  },
  {
    id: "7",
    name: "AutoPro Accessories",
    category: "Automobiles",
    logo: "https://images.unsplash.com/photo-1739009623123-0c963f4618d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwYWNjZXNzb3JpZXMlMjBzaG9wfGVufDF8fHx8MTc3NjMxNjA3NXww&ixlib=rb-4.1.0&q=80&w=400",
    description: "Quality automobile accessories and car care products",
    website: "https://autopro.example.com",
    phone: "+971 50 789 0123",
    email: "sales@autopro.com",
    products: [
      {
        id: "p19",
        name: "Dashboard Camera",
        price: 199,
        image: "https://images.unsplash.com/photo-1739009623123-0c963f4618d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwYWNjZXNzb3JpZXMlMjBzaG9wfGVufDF8fHx8MTc3NjMxNjA3NXww&ixlib=rb-4.1.0&q=80&w=400",
        description: "HD dashboard camera with night vision"
      },
      {
        id: "p20",
        name: "Car Vacuum Cleaner",
        price: 89,
        image: "https://images.unsplash.com/photo-1739009623123-0c963f4618d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwYWNjZXNzb3JpZXMlMjBzaG9wfGVufDF8fHx8MTc3NjMxNjA3NXww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Portable car vacuum cleaner"
      },
      {
        id: "p21",
        name: "Premium Seat Covers",
        price: 159,
        image: "https://images.unsplash.com/photo-1739009623123-0c963f4618d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW9iaWxlJTIwYWNjZXNzb3JpZXMlMjBzaG9wfGVufDF8fHx8MTc3NjMxNjA3NXww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Leather seat cover set"
      }
    ]
  },
  {
    id: "8",
    name: "Style Avenue Fashion",
    category: "Fashion",
    logo: "https://images.unsplash.com/photo-1774691799598-71e688b1bf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBib3V0aXF1ZXxlbnwxfHx8fDE3NzYyNTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Latest fashion trends and modest wear",
    website: "https://styleavenue.example.com",
    phone: "+971 50 890 1234",
    email: "contact@styleavenue.com",
    products: [
      {
        id: "p22",
        name: "Designer Abaya",
        price: 349,
        image: "https://images.unsplash.com/photo-1774691799598-71e688b1bf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBib3V0aXF1ZXxlbnwxfHx8fDE3NzYyNTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Elegant designer abaya with embroidery"
      },
      {
        id: "p23",
        name: "Premium Hijab Set",
        price: 99,
        image: "https://images.unsplash.com/photo-1774691799598-71e688b1bf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBib3V0aXF1ZXxlbnwxfHx8fDE3NzYyNTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Collection of premium quality hijabs"
      },
      {
        id: "p24",
        name: "Thobe Collection",
        price: 229,
        image: "https://images.unsplash.com/photo-1774691799598-71e688b1bf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBib3V0aXF1ZXxlbnwxfHx8fDE3NzYyNTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Traditional thobe in various styles"
      }
    ]
  },
  {
    id: "9",
    name: "Golden Time Jewelry",
    category: "Jewelry",
    logo: "https://images.unsplash.com/photo-1636639821444-479368c96514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbHV4dXJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3NzYzMTYwNzd8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Exquisite jewelry and luxury watches",
    website: "https://goldentime.example.com",
    phone: "+971 50 901 2345",
    email: "info@goldentime.com",
    products: [
      {
        id: "p25",
        name: "Gold Necklace Set",
        price: 2499,
        image: "https://images.unsplash.com/photo-1636639821444-479368c96514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbHV4dXJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3NzYzMTYwNzd8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "22K gold necklace with matching earrings"
      },
      {
        id: "p26",
        name: "Luxury Watch",
        price: 3999,
        image: "https://images.unsplash.com/photo-1636639821444-479368c96514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbHV4dXJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3NzYzMTYwNzd8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Swiss made automatic watch"
      },
      {
        id: "p27",
        name: "Diamond Ring",
        price: 5999,
        image: "https://images.unsplash.com/photo-1636639821444-479368c96514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbHV4dXJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3NzYzMTYwNzd8MA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Elegant diamond solitaire ring"
      }
    ]
  },
  {
    id: "10",
    name: "Artisan Bakery",
    category: "Bakery",
    logo: "https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaCUyMGJyZWFkfGVufDF8fHx8MTc3NjMxMjQ3OHww&ixlib=rb-4.1.0&q=80&w=400",
    description: "Fresh baked goods and pastries daily",
    website: "https://artisanbakery.example.com",
    phone: "+971 50 012 3456",
    email: "orders@artisanbakery.com",
    products: [
      {
        id: "p28",
        name: "Artisan Bread Loaf",
        price: 15,
        image: "https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaCUyMGJyZWFkfGVufDF8fHx8MTc3NjMxMjQ3OHww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Freshly baked sourdough bread"
      },
      {
        id: "p29",
        name: "Croissant Box (6pc)",
        price: 45,
        image: "https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaCUyMGJyZWFkfGVufDF8fHx8MTc3NjMxMjQ3OHww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Buttery French croissants"
      },
      {
        id: "p30",
        name: "Custom Cake",
        price: 199,
        image: "https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaCUyMGJyZWFkfGVufDF8fHx8MTc3NjMxMjQ3OHww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Made-to-order celebration cake"
      }
    ]
  },
  {
    id: "11",
    name: "Mobile World",
    category: "Mobile Accessories",
    logo: "https://images.unsplash.com/photo-1647334864689-e140efbfd51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NjI2NTU2NHww&ixlib=rb-4.1.0&q=80&w=400",
    description: "Mobile phones and accessories for all brands",
    website: "https://mobileworld.example.com",
    phone: "+971 50 123 4567",
    email: "support@mobileworld.com",
    products: [
      {
        id: "p31",
        name: "Wireless Charger",
        price: 79,
        image: "https://images.unsplash.com/photo-1647334864689-e140efbfd51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NjI2NTU2NHww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Fast wireless charging pad"
      },
      {
        id: "p32",
        name: "Phone Case Collection",
        price: 39,
        image: "https://images.unsplash.com/photo-1647334864689-e140efbfd51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NjI2NTU2NHww&ixlib=rb-4.1.0&q=80&w=400",
        description: "Protective cases for all phone models"
      },
      {
        id: "p33",
        name: "Power Bank 20000mAh",
        price: 129,
        image: "https://images.unsplash.com/photo-1647334864689-e140efbfd51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3NjI2NTU2NHww&ixlib=rb-4.1.0&q=80&w=400",
        description: "High-capacity portable charger"
      }
    ]
  },
  {
    id: "12",
    name: "Home Elegance",
    category: "Home Decor",
    logo: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc2MzE2MDc4fDA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Modern and traditional home decor and furniture",
    website: "https://homeelegance.example.com",
    phone: "+971 50 234 5678",
    email: "info@homeelegance.com",
    products: [
      {
        id: "p34",
        name: "Decorative Cushion Set",
        price: 149,
        image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc2MzE2MDc4fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Set of 4 premium decorative cushions"
      },
      {
        id: "p35",
        name: "Wall Mirror",
        price: 299,
        image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc2MzE2MDc4fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Large decorative wall mirror"
      },
      {
        id: "p36",
        name: "Luxury Rug",
        price: 899,
        image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc2MzE2MDc4fDA&ixlib=rb-4.1.0&q=80&w=400",
        description: "Hand-woven Persian style rug"
      }
    ]
  }
];
