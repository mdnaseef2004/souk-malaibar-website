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
  youtube?: string;
  instagram?: string;
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
  "Dry Fruits",
  "Fashion",
  "Jewelry",
  "Cafe/Bakes",
  "Mobile Accessories",
  "Home Decor"
];

export const shops: Shop[] = [
  {
    id: "1",
    name: "MS NATURAL",
    category: "Cosmetics",
    logo: "/MS OIL Intro.png",
    description: "Premium natural oils and wellness products",
    website: "https://msnatural.in/?v=13b5bfe96f3e",
    phone: "+91 90489 31831",
    email: "info@msnatural.in",
    products: []
  },
  {
    id: "2",
    name: "Ajmal",
    category: "Perfumes",
    logo: "/Ajmal Intro.png",
    description: "Discover a rich legacy of authentic perfumery and luxurious fragrances.",
    website: "https://in.ajmal.com/",
    phone: "+91 9930063303",
    email: "contact@ajmal.com",
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
    name: "Half collar pvt limited",
    category: "Perfumes",
    logo: "/aydi1.jpg",
    description: "Premium agarwood and luxury perfumes.",
    website: "https://www.instagram.com/aydi_agarwood?utm_source=qr&igsh=MWF1cHNsY2ExcDFkbg==",
    phone: "+91 9947330550",
    email: "mohammedshanir872@gmail.com",
    products: []
  },
  {
    id: "4",
    name: "Hijabi Souq",
    category: "Fashion",
    logo: "/hijabintro.jpg",
    description: "Elegant collection of modest wear and hijabs.",
    website: "https://www.instagram.com/hijabi_souq_?igsh=MTQ4dG92djdhZnV1aw==",
    phone: "+91 9567224313",
    email: "contact@hijabisouq.com",
    products: []
  },
  {
    id: "5",
    name: "Le Arjan pvt limited",
    category: "Perfumes",
    logo: "/aydi1.jpg",
    description: "Exquisite collection of premium perfumes and agarwood.",
    website: "https://www.instagram.com/aydi_agarwood?utm_source=qr&igsh=MWF1cHNsY2ExcDFkbg==",
    phone: "+91 9947330550",
    email: "mohammedshanir872@gmail.com",
    products: []
  },


  {
    id: "13",
    name: "Cafe Sufie",
    category: "Cafe/Bakes",
    logo: "/Cafesufiprofile.jpg",
    description: "Experience the unique blend of flavors and tranquil atmosphere at Cafe Sufie. We serve premium coffee, artisanal bakes, and soulful snacks.",
    website: "https://www.instagram.com/cafesufieofficial?igsh=ejZuMTFjaGNxNzFp",
    phone: "+91 080-75847722",
    email: "cafesufieofficial@gmail.com",
    products: []
  },
  {
    id: "14",
    name: "Jibru World",
    category: "Stationery",
    logo: "/jibruworldprofile.jpg",
    description: "Your ultimate destination for quality stationery, creative supplies, and educational materials.",
    website: "https://www.instagram.com/jibruworld?igsh=aTZnOGZ5dmZsdDlh",
    phone: "+91 9744515732",
    email: "jibruworld@gmail.com",
    products: []
  },
  {
    id: "15",
    name: "Gencon Digital",
    category: "Mobile Accessories",
    logo: "/gencondigitalprofile.jpg",
    description: "Your trusted destination for the latest mobile phones, premium accessories, and digital gadgets.",
    website: "https://www.instagram.com/gencon_digital?igsh=MWJ0ZDA0dWJ5eGN5ag==",
    phone: "+91 8622020222",
    email: "gencondigital@gmail.com",
    products: []
  },
  {
    id: "16",
    name: "AL Raiqa",
    category: "Dry Fruits",
    logo: "/alraiqaprofile.jpg",
    description: "Premium selection of dry fruits, nuts, and exotic spices.",
    website: "https://www.alraiqa.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARQDN9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAad82wsbpsDgmIH548ICeVZykRyzj_JwtdonjBFMb1xdAccyjo2VRiIka1rs0g_aem_G_kO_lHqFpQmCPN4DbREIA",
    phone: "+91 9188071198",
    youtube: "https://youtube.com/@alraiqagroup",
    instagram: "https://www.instagram.com/alraiqa.in?igsh=aWloajJteWlha2Ez",
    products: []
  }
];
