import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="hero"
      size="icon"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-strong hover:shadow-2xl"
      onClick={scrollToTop}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
};

export default ScrollToTop;