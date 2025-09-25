import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AuthorSection from "@/components/AuthorSection";
import BookPillarsSection from "@/components/BookPillarsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MediaSection from "@/components/MediaSection";
import OfferSection from "@/components/OfferSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";


const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <AuthorSection />
      <BookPillarsSection />
      <TestimonialsSection />
      <MediaSection />
      <OfferSection />
      <FAQ />
      <Footer />
      
    </main>
  );
};

export default LandingPage;