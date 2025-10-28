import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AuthorSection from "@/components/AuthorSection";
import BookPillarsSection from "@/components/BookPillarsSection";
import AmazonTopSection from "@/components/AmazonTopSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MediaSection from "@/components/MediaSection";
import OfferSection from "@/components/OfferSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";


const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <AuthorSection />
      <BookPillarsSection />
      <AmazonTopSection />
      <TestimonialsSection />
      <MediaSection />
      <OfferSection />
      <FinalCTASection />
      <FAQ />
      <Footer />
      
    </main>
  );
};

export default LandingPage;