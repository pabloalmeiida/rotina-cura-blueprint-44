import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import testimonial1 from "@/assets/testimonials/testimonial-new-1.jpg";
import testimonial2 from "@/assets/testimonials/testimonial-new-2.jpg";
import testimonial3 from "@/assets/testimonials/testimonial-new-3.jpg";
import testimonial4 from "@/assets/testimonials/testimonial-new-4.jpg";
import testimonial5 from "@/assets/testimonials/testimonial-new-5.jpg";
import launchEvent from "@/assets/book-launch-event.jpg";

const TestimonialsSection = () => {
  const testimonialImages = [
    testimonial1,
    testimonial2, 
    testimonial3,
    testimonial4,
    testimonial5
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark-text mb-4 sm:mb-6 px-2">
              Veja o que Pacientes Dizem Sobre a Abordagem da Dra. Luciana:
            </h2>
            <div className="flex justify-center gap-1 mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 px-2">
              Transformações reais de pacientes que seguiram os princípios da Medicina Funcional Integrativa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonialImages.map((image, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2">
                    <div className="p-1 sm:p-2">
                      <div className="bg-gradient-section p-3 sm:p-4 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 border border-soft-gray/30">
                        <img 
                          src={image} 
                          alt={`Depoimento de paciente ${index + 1}`}
                          width="1080"
                          height="1920"
                          className="w-full h-auto rounded-lg shadow-soft"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-cta text-white hover:bg-gradient-cta hover:text-white border-0" />
              <CarouselNext className="right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-cta text-white hover:bg-gradient-cta hover:text-white border-0" />
            </Carousel>
          </div>

          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-text mb-4">
                Centenas de Pessoas Já Adquiriram o Livro!
              </h3>
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-section p-4 sm:p-6 rounded-2xl shadow-soft border border-soft-gray/30">
                <img 
                  src={launchEvent} 
                  alt="Evento de lançamento do livro A Rotina Que Cura com leitores"
                  width="2048"
                  height="1365"
                  className="w-full h-auto rounded-xl shadow-strong"
                />
              </div>
            </div>

            <div className="bg-primary-cyan/10 p-4 sm:p-6 rounded-xl mb-6 max-w-[70%] mx-auto">
              <p className="text-dark-text font-semibold text-sm sm:text-base lg:text-lg px-2 text-center">
                ✨ Estes são apenas alguns dos <span className="text-primary-cyan">resultados reais</span> que 
                os princípios do livro proporcionaram aos pacientes da Dra. Luciana
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex justify-center">
              <a href="https://www.amazon.com.br/rotina-que-cura-pr%C3%A1tico-vitalidade/dp/6501663040/ref=tmm_pap_swatch_0" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-10 font-bold text-white rounded-xl shadow-strong hover:shadow-custom transition-all"
                >
                  QUERO MEU LIVRO AGORA
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;