
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SneakerCard from "@/components/sneakers/SneakerCard";
import FilterBar from "@/components/sneakers/FilterBar";
import { getAllSneakers, searchSneakers, getSneakersByBrand, getSneakersByCategory } from "@/data/sneakers";
import { Sneaker } from "@/types/sneaker";

const BrowsePage = () => {
  const [searchParams] = useSearchParams();
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [filteredSneakers, setFilteredSneakers] = useState<Sneaker[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("newest");
  const [isLoading, setIsLoading] = useState(true);

  const initialSearch = searchParams.get("search") || "";
  const initialBrand = searchParams.get("brand") || "";
  const initialCategory = searchParams.get("category") || "";

  useEffect(() => {
    // Fetch all sneakers
    const allSneakers = getAllSneakers();
    setSneakers(allSneakers);
    
    // Set initial filters from URL
    if (initialBrand) {
      setSelectedBrand(initialBrand);
    }
    
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    
    setIsLoading(false);
  }, [initialBrand, initialCategory]);

  useEffect(() => {
    // Apply filters
    let results = [...sneakers];
    
    // Apply search filter
    if (initialSearch) {
      results = searchSneakers(initialSearch);
    }
    
    // Apply brand filter
    if (selectedBrand) {
      results = results.filter(sneaker => 
        sneaker.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      results = results.filter(sneaker => 
        sneaker.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase())
      );
    }
    
    // Apply sorting
    results = sortSneakers(results, selectedSort);
    
    setFilteredSneakers(results);
  }, [sneakers, initialSearch, selectedBrand, selectedCategory, selectedSort]);

  const sortSneakers = (sneakersToSort: Sneaker[], sort: string): Sneaker[] => {
    const sorted = [...sneakersToSort];
    
    switch (sort) {
      case "newest":
        return sorted.sort((a, b) => b.releaseYear - a.releaseYear);
      case "oldest":
        return sorted.sort((a, b) => a.releaseYear - b.releaseYear);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {initialSearch ? `Search: "${initialSearch}"` : "Browse Sneakers"}
          </h1>
          <p className="text-muted-foreground">
            {filteredSneakers.length} sneakers found
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          onBrandChange={handleBrandChange}
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
          selectedBrand={selectedBrand}
          selectedCategory={selectedCategory}
          selectedSort={selectedSort}
        />

        {/* Sneakers Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-lg bg-secondary/30 aspect-[3/4] animate-pulse"></div>
            ))}
          </div>
        ) : filteredSneakers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSneakers.map((sneaker) => (
              <SneakerCard key={sneaker.id} sneaker={sneaker} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No sneakers found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BrowsePage;
