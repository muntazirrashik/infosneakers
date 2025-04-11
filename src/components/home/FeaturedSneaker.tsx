
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Sneaker } from "@/types/sneaker";
import { Button } from "@/components/ui/button";

interface FeaturedSneakerProps {
  sneaker: Sneaker;
}

const FeaturedSneaker = ({ sneaker }: FeaturedSneakerProps) => {
  const primaryImage = sneaker.images.find(img => img.primary) || sneaker.images[0];

  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-secondary/40 to-background">
      <div className="container-custom grid md:grid-cols-2 gap-8 py-12 md:py-16 items-center">
        <div className="order-2 md:order-1 animate-slide-in">
          <div className="space-y-2 mb-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              {sneaker.name}
            </h2>
            <p className="text-muted-foreground">
              {sneaker.brand} • {sneaker.releaseYear}
            </p>
          </div>

          <p className="text-lg mb-8">{sneaker.description}</p>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {sneaker.colorways.slice(0, 3).map((colorway, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full border border-border"
                    style={{ backgroundColor: colorway.color }}
                  />
                  <span className="text-sm">{colorway.name}</span>
                </div>
              ))}
            </div>

            <Link to={`/sneaker/${sneaker.id}`}>
              <Button className="group">
                View Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <img
              src={primaryImage.url}
              alt={primaryImage.alt}
              className="relative z-10 max-h-[400px] object-contain transform md:rotate-[-12deg] drop-shadow-2xl animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sneaker-blue to-sneaker-red opacity-20 blur-3xl rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSneaker;
