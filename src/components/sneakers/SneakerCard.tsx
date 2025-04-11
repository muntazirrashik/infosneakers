
import { Link } from "react-router-dom";
import { Sneaker } from "@/types/sneaker";
import { Badge } from "@/components/ui/badge";

interface SneakerCardProps {
  sneaker: Sneaker;
}

const SneakerCard = ({ sneaker }: SneakerCardProps) => {
  const primaryImage = sneaker.images.find(img => img.primary) || sneaker.images[0];
  
  return (
    <Link to={`/sneaker/${sneaker.id}`}>
      <div className="sneaker-card group h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <img 
            src={primaryImage.url} 
            alt={primaryImage.alt} 
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {sneaker.releaseYear}
            </Badge>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium text-lg line-clamp-2">{sneaker.name}</h3>
            <span className="text-sm font-medium text-sneaker-blue">${sneaker.price}</span>
          </div>
          
          <div className="flex items-center mb-3 text-sm text-muted-foreground">
            <span>{sneaker.brand}</span>
            <span className="mx-2">•</span>
            <span>{sneaker.model}</span>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
            {sneaker.description}
          </p>
          
          <div className="flex mt-auto pt-2 border-t border-border">
            <div className="flex gap-1 overflow-hidden">
              {sneaker.colorways.slice(0, 3).map((colorway, index) => (
                <div 
                  key={index}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: colorway.color }}
                  title={colorway.name}
                />
              ))}
              {sneaker.colorways.length > 3 && (
                <div className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center text-[10px]">
                  +{sneaker.colorways.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SneakerCard;
