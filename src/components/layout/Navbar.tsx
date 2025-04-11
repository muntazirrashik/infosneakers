
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/browse?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold">
                Info<span className="text-sneaker-red">Sneakers</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/browse" className="font-medium hover:text-sneaker-blue transition-colors">
              Browse
            </Link>
            <Link to="/brands" className="font-medium hover:text-sneaker-blue transition-colors">
              Brands
            </Link>
            <Link to="/popular" className="font-medium hover:text-sneaker-blue transition-colors">
              Popular
            </Link>
          </div>

          {/* Search, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block w-64">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search sneakers..."
                  className="pl-9 pr-4 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </form>
            </div>
            
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input
                type="search"
                placeholder="Search sneakers..."
                className="pl-9 pr-4 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </form>
            
            <div className="flex flex-col space-y-4">
              <Link to="/browse" className="font-medium hover:text-sneaker-blue transition-colors">
                Browse
              </Link>
              <Link to="/brands" className="font-medium hover:text-sneaker-blue transition-colors">
                Brands
              </Link>
              <Link to="/popular" className="font-medium hover:text-sneaker-blue transition-colors">
                Popular
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
