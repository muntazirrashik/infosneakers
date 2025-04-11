
export interface Sneaker {
  id: string;
  name: string;
  brand: SneakerBrand;
  model: string;
  description: string;
  releaseYear: number;
  releaseDate: string;
  price: number;
  colorways: Colorway[];
  categories: string[];
  materials: string[];
  designer?: string;
  story?: string;
  images: SneakerImage[];
  affiliateLinks: AffiliateLink[];
  featured?: boolean;
}

export interface Colorway {
  name: string;
  color: string;
  images?: string[];
}

export interface SneakerImage {
  url: string;
  alt: string;
  primary?: boolean;
}

export interface AffiliateLink {
  name: string;
  url: string;
}

export type SneakerBrand = 
  | "Nike" 
  | "Adidas" 
  | "Jordan" 
  | "New Balance" 
  | "Reebok" 
  | "Converse" 
  | "Vans" 
  | "Puma" 
  | "Asics" 
  | "Yeezy" 
  | "Other";
