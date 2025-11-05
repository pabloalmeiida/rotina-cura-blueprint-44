import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import news1 from "@/assets/news-1.webp";
import news2 from "@/assets/news-2.webp";
import news3 from "@/assets/news-3.webp";

const MediaSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const newsItems = [
    {
      image: news1,
      title: "Luciana Lavigne lança obra sobre saúde preventiva - UOL Legado Business",
      outlet: "UOL"
    },
    {
      image: news2,
      title: "Luciana Lavigne lança obra sobre saúde preventiva - Portal Ton",
      outlet: "Portal Ton"
    },
    {
      image: news3,
      title: "Luciana Lavigne lança obra sobre saúde preventiva - Business Feed",
      outlet: "Business Feed"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-dark-text text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-2">
              🏆 A Rotina Que Cura: Destaque na Mídia!
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl opacity-90 max-w-3xl mx-auto px-2">
              A expertise da Dra. Luciana Lavigne e seu método revolucionário 
              ganharam reconhecimento em importantes veículos de comunicação
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-strong">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {newsItems.map((news, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                        <div className="bg-success-green text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold inline-block mb-2 sm:mb-4">
                          {news.outlet}
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                          {news.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-dark-text w-8 h-8 sm:w-10 sm:h-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-dark-text w-8 h-8 sm:w-10 sm:h-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-success-green' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-success-green/20 p-4 sm:p-6 rounded-xl inline-block">
              <p className="text-white font-semibold text-sm sm:text-base lg:text-lg px-2">
                📰 <span className="text-soft-gray">Reconhecimento nacional</span> da 
                importância da Medicina Funcional Integrativa e do método da Dra. Luciana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;