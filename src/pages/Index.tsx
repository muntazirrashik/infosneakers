
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SneakerCard from "@/components/sneakers/SneakerCard";
import FeaturedSneaker from "@/components/home/FeaturedSneaker";
import { getFeaturedSneakers, getAllSneakers, getBrands } from "@/data/sneakers";
import { Sneaker } from "@/types/sneaker";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredSneaker, setFeaturedSneaker] = useState<Sneaker | null>(null);
  const [popularSneakers, setPopularSneakers] = useState<Sneaker[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    // Get featured sneaker
    const featured = getFeaturedSneakers();
    if (featured.length > 0) {
      setFeaturedSneaker(featured[0]);
    }

    // Get popular sneakers (using all sneakers for now)
    const allSneakers = getAllSneakers();
    setPopularSneakers(allSneakers.slice(0, 4));

    // Get brands
    setBrands(getBrands().slice(0, 6));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/browse?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Your Sneaker Encyclopedia
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
            Explore the world of iconic footwear with detailed info on history, design, and cultural impact.
          </p>

          <form onSubmit={handleSearch} className="relative max-w-md mx-auto mb-8 animate-fade-in">
            <Input
              type="search"
              placeholder="Search for sneakers, brands, or models..."
              className="pl-10 pr-4 py-6 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </form>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            <Link to="/browse">
              <Button size="lg">Browse All Sneakers</Button>
            </Link>
            <Link to="/popular">
              <Button variant="outline" size="lg">
                Popular Models
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sneaker */}
      {featuredSneaker && (
        <section className="py-16">
          <div className="container-custom mb-8">
            <h2 className="section-title">Featured Sneaker</h2>
          </div>
          <FeaturedSneaker sneaker={featuredSneaker} />
        </section>
      )}

      {/* Popular Sneakers */}
      <section className="py-16 bg-secondary/30 dark:bg-secondary/10">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">Popular Sneakers</h2>
            <Link to="/popular" className="text-sneaker-blue font-medium flex items-center hover:underline">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSneakers.map((sneaker) => (
              <SneakerCard key={sneaker.id} sneaker={sneaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Brand */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Browse by Brand</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <Link to={`/browse?brand=${brand}`} key={brand}>
                <div className="bg-background rounded-lg border border-border p-4 h-24 flex items-center justify-center hover:border-primary/50 transition-all">
                  <h3 className="font-display font-semibold text-center">{brand}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
