import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import Pricing from "@/components/Pricing";
import GallerySection from "@/components/GallerySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Activities />
      <GallerySection />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
