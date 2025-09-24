import { Button } from "@/components/ui/button";
import heroImage from "@/assets/person-holding-book.png";
const HeroSection = () => {
  return <section className="relative min-h-screen font-lato overflow-hidden">
      {/* Pre-launch banner */}
      <div className="relative z-20 bg-gradient-banner text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-bold tracking-wide">
            ✨ PRÉ-LANÇAMENTO 85% OFF - OFERTA IRRESISTÍVEL
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative min-h-[95vh] bg-gradient-elegant">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-cta opacity-10"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-cyan/20 rounded-full blur-3xl md:-top-40 md:-right-40 md:w-80 md:h-80"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-blue/20 rounded-full blur-3xl md:-bottom-40 md:-left-40 md:w-80 md:h-80"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-cyan/10 rounded-full blur-3xl md:w-96 md:h-96"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[75vh]">
            {/* Content */}
            <div className="space-y-6 lg:space-y-10">
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="text-primary-cyan text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase bg-primary-cyan/10 px-3 sm:px-4 py-2 rounded-full">
                      Livro Exclusivo
                    </span>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-black leading-[0.9] text-dark-text">
                    A Rotina <span className="text-primary-cyan">que Cura</span>
                  </h1>
                </div>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-dark-text/80 leading-relaxed max-w-lg font-light">
                  Um guia estratégico aplicado e validado em <span className="font-semibold text-primary-cyan">centenas de pacientes</span>, para ter mais energia, saúde e vitalidade.
                </p>
                
                <div className="space-y-3 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-soft-gray/30">
                  <p className="text-lg sm:text-xl font-bold text-dark-text">Dra. Luciana Lavigne</p>
                  <p className="text-sm sm:text-base text-dark-text/70 leading-relaxed">
                    Médica especialista em Medicina Funcional Integrativa com mais de 15 anos de experiência
                  </p>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-dark-text/80 max-w-md">
                    Entre para nossa lista de espera e receba nossa oferta exclusiva de pré-lançamento.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-primary-cyan font-semibold">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full"></div>
                    <span>Oferta válida por tempo limitado</span>
                  </div>
                </div>
                
                <Button variant="hero" size="xl" className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-10 font-bold text-white rounded-xl">QUERO MEU LIVRO COM 85% OFF</Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-cta opacity-20 rounded-3xl blur-2xl"></div>
                <img src={heroImage} alt="Dra. Luciana Lavigne segurando o livro A Rotina que Cura" className="relative w-full h-auto rounded-3xl shadow-strong border-4 border-white/50" />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-primary-cyan text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-custom">
                  ✨ Exclusivo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;