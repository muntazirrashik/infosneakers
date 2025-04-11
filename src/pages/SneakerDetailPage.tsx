
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SneakerDetail from "@/components/sneakers/SneakerDetail";
import SneakerCard from "@/components/sneakers/SneakerCard";
import { Button } from "@/components/ui/button";
import { getSneakerById, getAllSneakers } from "@/data/sneakers";
import { Sneaker } from "@/types/sneaker";

const SneakerDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [sneaker, setSneaker] = useState<Sneaker | null>(null);
  const [relatedSneakers, setRelatedSneakers] = useState<Sneaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) {
      const foundSneaker = getSneakerById(id);
      if (foundSneaker) {
        setSneaker(foundSneaker);
        
        // Find related sneakers (same brand or category)
        const allSneakers = getAllSneakers();
        const related = allSneakers
          .filter(s => 
            s.id !== id && 
            (s.brand === foundSneaker.brand || 
             s.categories.some(cat => foundSneaker.categories.includes(cat)))
          )
          .slice(0, 4);
        
        setRelatedSneakers(related);
      } else {
        setNotFound(true);
      }
    } else {
      setNotFound(true);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          <p>Loading sneaker information...</p>
        </div>
      </Layout>
    );
  }

  if (notFound || !sneaker) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Sneaker Not Found</h1>
          <p className="mb-6">We couldn't find the sneaker you're looking for.</p>
          <Link to="/browse">
            <Button>Browse All Sneakers</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-secondary/30 dark:bg-secondary/10 py-4 md:py-6">
        <div className="container-custom">
          <div className="flex items-center">
            <Link to="/browse" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Browse
            </Link>
          </div>
        </div>
      </div>

      <SneakerDetail sneaker={sneaker} />

      {/* Related Sneakers */}
      {relatedSneakers.length > 0 && (
        <div className="container-custom py-12 md:py-16">
          <h2 className="section-title">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedSneakers.map((relatedSneaker) => (
              <SneakerCard key={relatedSneaker.id} sneaker={relatedSneaker} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default SneakerDetailPage;
