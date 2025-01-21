import { User, ShoppingBag, Newspaper, Info, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-purple-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-purple-800">CS2BEST</Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/marketplace" className="text-gray-700 hover:text-purple-600 transition-colors">
                <ShoppingBag className="inline-block mr-1 h-4 w-4" />
                Marketplace
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Newspaper className="inline-block mr-1 h-4 w-4" />
                News
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Info className="inline-block mr-1 h-4 w-4" />
                About Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-purple-600">
                EN <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Русский</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/profile" className="p-2 hover:bg-purple-100 rounded-full transition-colors">
              <User className="h-6 w-6 text-purple-800" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};