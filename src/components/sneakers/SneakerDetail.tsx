
import { useState } from "react";
import { ExternalLink, Heart } from "lucide-react";
import { Sneaker } from "@/types/sneaker";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SneakerDetailProps {
  sneaker: Sneaker;
}

const SneakerDetail = ({ sneaker }: SneakerDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(
    sneaker.images.find((img) => img.primary)?.url || sneaker.images[0]?.url
  );

  return (
    <div className="container-custom py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden bg-secondary/30 aspect-square">
            <img
              src={selectedImage}
              alt={sneaker.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {sneaker.images.map((image, index) => (
              <button
                key={index}
                className={`rounded-md overflow-hidden flex-shrink-0 w-20 h-20 border-2 ${
                  selectedImage === image.url
                    ? "border-sneaker-blue"
                    : "border-transparent"
                } transition-all`}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Sneaker Info */}
        <div>
          <div className="mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                  {sneaker.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>{sneaker.brand}</span>
                  <span>•</span>
                  <span>{sneaker.model}</span>
                </div>
              </div>
              <Badge variant="outline" className="text-base px-3 py-1">
                ${sneaker.price}
              </Badge>
            </div>
          </div>

          <Separator className="my-6" />

          <Tabs defaultValue="details" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="story">Story</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="pt-4">
              <div className="space-y-4">
                <p>{sneaker.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-1">Release Date</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(sneaker.releaseDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  {sneaker.designer && (
                    <div>
                      <h3 className="font-medium mb-1">Designer</h3>
                      <p className="text-sm text-muted-foreground">{sneaker.designer}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-medium mb-1">Categories</h3>
                    <div className="flex flex-wrap gap-1">
                      {sneaker.categories.map((category, index) => (
                        <Badge key={index} variant="secondary" className="capitalize">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="story" className="pt-4">
              <p>{sneaker.story || "No story information available for this sneaker."}</p>
            </TabsContent>
            
            <TabsContent value="materials" className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Materials Used</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {sneaker.materials.map((material, index) => (
                      <li key={index} className="capitalize">{material}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mb-8">
            <h3 className="font-medium mb-3">Available Colorways</h3>
            <div className="flex flex-wrap gap-3">
              {sneaker.colorways.map((colorway, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full border border-border"
                    style={{ backgroundColor: colorway.color }}
                  />
                  <span className="text-sm">{colorway.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {sneaker.affiliateLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={index === 0 ? "default" : "outline"}>
                  Buy on {link.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            ))}
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to favorites</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SneakerDetail;
