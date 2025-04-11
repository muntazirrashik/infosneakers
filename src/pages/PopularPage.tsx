
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SneakerCard from "@/components/sneakers/SneakerCard";
import { getAllSneakers } from "@/data/sneakers";
import { Sneaker } from "@/types/sneaker";

const PopularPage = () => {
  const [popularSneakers, setPopularSneakers] = useState<Sneaker[]>([]);

  useEffect(() => {
    // For demo purposes, we're using all sneakers as popular
    // In a real app, this would be based on view counts, ratings, etc.
    const allSneakers = getAllSneakers();
    setPopularSneakers(allSneakers);
  }, []);

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Popular Sneakers</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularSneakers.map((sneaker) => (
            <SneakerCard key={sneaker.id} sneaker={sneaker} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PopularPage;
