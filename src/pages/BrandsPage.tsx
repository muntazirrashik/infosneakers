
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getBrands, getSneakersByBrand } from "@/data/sneakers";

const BrandsPage = () => {
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    // Get all brands
    const allBrands = getBrands();
    setBrands(allBrands);
  }, []);

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Sneaker Brands</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => {
            const brandSneakers = getSneakersByBrand(brand);
            const randomSneaker = brandSneakers[Math.floor(Math.random() * brandSneakers.length)];
            const primaryImage = randomSneaker?.images.find(img => img.primary)?.url || randomSneaker?.images[0]?.url;
            
            return (
              <Link 
                to={`/browse?brand=${brand}`} 
                key={brand} 
                className="group block"
              >
                <div className="rounded-lg overflow-hidden border border-border bg-card hover:shadow-md transition-all h-full">
                  <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                    {primaryImage && (
                      <img 
                        src={primaryImage} 
                        alt={brand} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h2 className="font-display text-2xl font-bold">{brand}</h2>
                        <p className="text-sm text-white/80">{brandSneakers.length} models</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default BrandsPage;
