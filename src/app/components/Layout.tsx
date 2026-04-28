import { Outlet, Link, useLocation } from "react-router";
import { Store, ShoppingBag, Info, Menu, X, Search, User, ShoppingCart, ChevronDown, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { getImageUrl } from "../utils/images";
import { categories } from "../data/shops";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home", icon: Store },
    { path: "/shops", label: "All Shops", icon: ShoppingBag },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header: Logo, Search, Account */}
          <div className="flex items-center justify-between h-20 gap-4 md:gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 shrink-0">
              <div className="relative">
                <img src={getImageUrl("/logo.PNG")} alt="Souk Malaibar Logo" className="h-12 w-auto" />
              </div>
              <div className="block">
                <h1 className="font-serif font-bold text-lg sm:text-2xl text-gray-900 leading-tight">
                  Souk <span className="text-red-700">Malaibar</span>
                </h1>
                <p className="text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] uppercase text-gray-500 font-medium">Markaz Knowledge City</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl relative">
              <input
                type="text"
                placeholder="Search the store..."
                className="w-full pl-4 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-red-600 transition-colors">
                <Search className="size-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>

          {/* Bottom Header: Navigation */}
          <div className="hidden md:flex items-center justify-between h-12 border-t border-gray-50">
            <div className="flex items-center space-x-8">
              {/* Categories Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center space-x-2 text-gray-800 font-semibold hover:text-red-600 transition-colors h-full">
                  <Menu className="size-5" />
                  <span>Browse All Categories</span>
                  <ChevronDown className="size-4 opacity-50" />
                </button>
                
                {/* Mega Menu Placeholder */}
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border border-gray-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                   {categories.map((category) => (
                     <Link 
                       key={category} 
                       to={`/category/${encodeURIComponent(category)}`}
                       className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                     >
                       {category}
                     </Link>
                   ))}
                </div>
              </div>

              {/* Main Nav Links */}
              <nav className="flex items-center space-x-6">
                <Link to="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-red-700" : "text-gray-600 hover:text-red-600"}`}>Home</Link>
                <Link to="/shops" className={`text-sm font-medium transition-colors ${isActive("/shops") ? "text-red-700" : "text-gray-600 hover:text-red-600"}`}>Stores</Link>
                <Link to="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-red-700" : "text-gray-600 hover:text-red-600"}`}>About Us</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 animate-in slide-in-from-top duration-300">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the store..."
                className="w-full pl-4 pr-12 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
              />
              <Search className="absolute right-4 top-2.5 size-4 text-gray-400" />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-2 border-b border-gray-50">Home</Link>
              <Link to="/shops" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-2 border-b border-gray-50">Stores</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-2 border-b border-gray-50">About Us</Link>
              <div className="pt-2 flex flex-col space-y-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Categories</p>
                {categories.slice(0, 5).map(cat => (
                  <Link key={cat} to={`/category/${cat}`} onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 py-1">{cat}</Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Souk Malaibar</h3>
              <p className="text-gray-400 text-sm">
                A complete shopping experience at the heart of Markaz Knowledge City
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shops" className="text-gray-400 hover:text-white transition-colors">
                    All Shops
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Location</h3>
              <a 
                href="https://maps.app.goo.gl/q5DVN4bHnBXEREjL6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-white transition-colors block"
              >
                Markaz Knowledge City
                <br />
                Surrounding Jamiul Futuh
                <br />
                Indian Grand Masjid
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2026 Souk Malaibar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
