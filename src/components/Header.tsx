import { User, ShoppingBag, Newspaper, Info } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-primary-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-primary">CS2 Market</Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/marketplace" className="text-gray-700 hover:text-primary transition-colors">
                <ShoppingBag className="inline-block mr-1 h-4 w-4" />
                Marketplace
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-primary transition-colors">
                <Newspaper className="inline-block mr-1 h-4 w-4" />
                News
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
                <Info className="inline-block mr-1 h-4 w-4" />
                About Us
              </Link>
            </nav>
          </div>
          <Link to="/profile" className="p-2 hover:bg-primary-softer rounded-full transition-colors">
            <User className="h-6 w-6 text-primary-dark" />
          </Link>
        </div>
      </div>
    </header>
  );
};