
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="container-custom py-16 md:py-24 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed or doesn't exist.
          </p>
          <Link to="/">
            <Button size="lg">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
