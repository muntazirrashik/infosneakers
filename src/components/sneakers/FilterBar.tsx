
import { useState } from "react";
import { Check, ChevronDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getBrands, getCategories } from "@/data/sneakers";

interface FilterBarProps {
  onBrandChange: (brand: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  selectedBrand: string;
  selectedCategory: string;
  selectedSort: string;
}

const FilterBar = ({
  onBrandChange,
  onCategoryChange,
  onSortChange,
  selectedBrand,
  selectedCategory,
  selectedSort,
}: FilterBarProps) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const brands = ["All Brands", ...getBrands()];
  const categories = ["All Categories", ...getCategories()];
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
  ];

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setFiltersVisible(!filtersVisible)}
          className="md:hidden"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>

        <div className={`w-full md:w-auto md:flex items-center gap-2 ${filtersVisible ? 'block' : 'hidden md:flex'} mt-4 md:mt-0`}>
          {/* Brand Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="mb-2 md:mb-0 w-full md:w-auto">
                {selectedBrand === "" ? "All Brands" : selectedBrand}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup value={selectedBrand} onValueChange={onBrandChange}>
                {brands.map((brand) => (
                  <DropdownMenuRadioItem key={brand} value={brand === "All Brands" ? "" : brand}>
                    {brand}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Category Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="mb-2 md:mb-0 w-full md:w-auto">
                {selectedCategory === "" ? "All Categories" : selectedCategory}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup value={selectedCategory} onValueChange={onCategoryChange}>
                {categories.map((category) => (
                  <DropdownMenuRadioItem key={category} value={category === "All Categories" ? "" : category}>
                    {category}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Sort Options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-full md:w-auto">
              {sortOptions.find((option) => option.value === selectedSort)?.label || "Sort By"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuRadioGroup value={selectedSort} onValueChange={onSortChange}>
              {sortOptions.map((option) => (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FilterBar;
