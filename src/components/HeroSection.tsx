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
      <div className="relative min-h-[95vh] bg-gradient-elegant overflow-hidden">
        {/* Decorative elements inspired by health, routine, and vitality */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-cta opacity-10"></div>
          
          {/* Clock/Time element - left side */}
          <div className="absolute left-10 top-1/4 w-64 h-64 md:w-96 md:h-96 opacity-[0.12]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-cyan" />
              {/* Clock marks */}
              <line x1="100" y1="15" x2="100" y2="25" stroke="currentColor" strokeWidth="2" className="text-primary-cyan" />
              <line x1="100" y1="175" x2="100" y2="185" stroke="currentColor" strokeWidth="2" className="text-primary-cyan" />
              <line x1="15" y1="100" x2="25" y2="100" stroke="currentColor" strokeWidth="3" className="text-primary-cyan" />
              <line x1="175" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="3" className="text-primary-cyan" />
              {/* Diagonal marks */}
              <line x1="35" y1="35" x2="42" y2="42" stroke="currentColor" strokeWidth="1.5" className="text-primary-cyan" />
              <line x1="165" y1="35" x2="158" y2="42" stroke="currentColor" strokeWidth="1.5" className="text-primary-cyan" />
              <line x1="35" y1="165" x2="42" y2="158" stroke="currentColor" strokeWidth="1.5" className="text-primary-cyan" />
              <line x1="165" y1="165" x2="158" y2="158" stroke="currentColor" strokeWidth="1.5" className="text-primary-cyan" />
              {/* Clock hands */}
              <line x1="100" y1="100" x2="100" y2="50" stroke="currentColor" strokeWidth="2" className="text-primary-cyan" />
              <line x1="100" y1="100" x2="130" y2="100" stroke="currentColor" strokeWidth="2" className="text-primary-cyan" />
            </svg>
          </div>

          {/* Floating circles - right side scattered (similar to left side) */}
          <div className="absolute top-20 right-1/4 w-12 h-12 rounded-full bg-primary-cyan/5 backdrop-blur-sm"></div>
          <div className="absolute top-32 right-1/3 w-8 h-8 rounded-full bg-primary-blue/5 backdrop-blur-sm"></div>
          <div className="absolute top-40 right-1/5 w-6 h-6 rounded-full bg-primary-cyan/10 backdrop-blur-sm"></div>
          
          <div className="absolute bottom-40 left-3/4 w-16 h-16 rounded-full bg-primary-cyan/5 backdrop-blur-sm"></div>
          <div className="absolute bottom-32 left-2/3 w-10 h-10 rounded-full bg-primary-blue/5 backdrop-blur-sm"></div>
          <div className="absolute bottom-24 left-4/5 w-8 h-8 rounded-full bg-primary-cyan/8 backdrop-blur-sm"></div>
          
          <div className="absolute top-1/2 right-1/6 w-14 h-14 rounded-full bg-primary-blue/5 backdrop-blur-sm"></div>
          <div className="absolute top-1/3 left-5/6 w-12 h-12 rounded-full bg-primary-cyan/5 backdrop-blur-sm"></div>

          <div className="absolute top-20 left-1/4 w-12 h-12 rounded-full bg-primary-cyan/5 backdrop-blur-sm"></div>
          <div className="absolute top-32 left-1/3 w-8 h-8 rounded-full bg-primary-blue/5 backdrop-blur-sm"></div>
          <div className="absolute top-40 left-1/5 w-6 h-6 rounded-full bg-primary-cyan/10 backdrop-blur-sm"></div>
          
          <div className="absolute bottom-40 right-1/4 w-16 h-16 rounded-full bg-primary-cyan/5 backdrop-blur-sm"></div>
          <div className="absolute bottom-32 right-1/3 w-10 h-10 rounded-full bg-primary-blue/5 backdrop-blur-sm"></div>
          <div className="absolute bottom-24 right-1/5 w-8 h-8 rounded-full bg-primary-cyan/8 backdrop-blur-sm"></div>
          
          <div className="absolute top-1/2 left-1/6 w-14 h-14 rounded-full bg-primary-blue/5 backdrop-blur-sm"></div>
          <div className="absolute top-1/3 right-1/6 w-12 h-12 rounded-full bg-primary-cyan/5 backdrop-blur-sm"></div>

          {/* Glowing orbs for depth */}
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
                  <h1 className="font-trajan text-4xl lg:text-6xl font-bold leading-tight text-dark-text tracking-wide">
                    A ROTINA <span className="text-primary-cyan">QUE CURA</span>
                  </h1>
                </div>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-dark-text/80 leading-relaxed max-w-lg font-light">
                  Um guia estratégico aplicado e validado em <span className="font-semibold text-primary-cyan">centenas de pacientes</span>, para ter mais energia, saúde e vitalidade.
                </p>
                
                <div className="space-y-3 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-soft-gray/30">
                  <p className="text-lg sm:text-xl font-bold text-dark-text">Dra. Luciana Lavigne</p>
                  <p className="text-sm sm:text-base text-dark-text/70 leading-relaxed">Médica especialista em Medicina Funcional Integrativa com mais de 10 anos de experiência</p>
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
                
                <a href="https://chat.whatsapp.com/FiJjHFWLDzWHVAcTAHsOTG?mode=ems_share_t" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-10 font-bold text-white rounded-xl" style={{
                  background: 'linear-gradient(90deg, rgba(20, 171, 12, 1) 0%, rgba(20, 176, 12, 1) 100%)'
                }}>
                    QUERO MEU LIVRO COM 85% OFF
                  </Button>
                </a>
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