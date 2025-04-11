
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-gray-900 py-12 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-display font-bold">
                Info<span className="text-sneaker-red">Sneakers</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your go-to encyclopedia for sneaker knowledge, history, and culture.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/browse" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Sneakers
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-muted-foreground hover:text-foreground transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/popular" className="text-muted-foreground hover:text-foreground transition-colors">
                  Popular
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/browse?category=basketball" className="text-muted-foreground hover:text-foreground transition-colors">
                  Basketball
                </Link>
              </li>
              <li>
                <Link to="/browse?category=running" className="text-muted-foreground hover:text-foreground transition-colors">
                  Running
                </Link>
              </li>
              <li>
                <Link to="/browse?category=lifestyle" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/browse?category=skateboarding" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skateboarding
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} InfoSneakers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
