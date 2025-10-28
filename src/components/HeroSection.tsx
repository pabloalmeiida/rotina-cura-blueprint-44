import { Button } from "@/components/ui/button";
import heroImage from "@/assets/person-holding-book.png";
const HeroSection = () => {
  return <section className="relative min-h-screen font-lato overflow-hidden">
      {/* Launch banner */}
      <div className="relative z-20 bg-primary-cyan text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-bold tracking-wide">
            📚 Livro já disponível para venda!
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative min-h-[95vh] overflow-hidden" style={{
        background: 'linear-gradient(135deg, #F5F1E8 0%, #E8DFD0 50%, #F5F1E8 100%)'
      }}>
        {/* Elegant decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft organic shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30">
            <svg viewBox="0 0 600 600" className="w-full h-full">
              <path 
                d="M 0,150 Q 150,0 300,50 T 600,100 L 600,0 L 0,0 Z" 
                fill="url(#gradient1)" 
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#D4C5B0', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#C9B99A', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] opacity-25">
            <svg viewBox="0 0 700 700" className="w-full h-full">
              <path 
                d="M 0,600 Q 200,550 350,600 T 700,550 L 700,700 L 0,700 Z" 
                fill="url(#gradient2)" 
                opacity="0.4"
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#E8DFD0', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#D4C5B0', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Subtle accent circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(212, 197, 176, 0.15) 0%, transparent 70%)'
          }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(201, 185, 154, 0.12) 0%, transparent 70%)'
          }}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(232, 223, 208, 0.2) 0%, transparent 70%)'
          }}></div>

          {/* Elegant line accents */}
          <div className="absolute top-20 right-20 w-64 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>
          <div className="absolute bottom-32 left-32 w-48 h-px bg-gradient-to-r from-transparent via-accent-gold/15 to-transparent"></div>
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
                  <p className="text-base sm:text-lg leading-relaxed text-dark-text/80 max-w-md font-semibold">
                    Experimente agora o método que está transformando vidas!
                  </p>
                  <div className="flex items-center gap-3 text-sm text-accent-gold font-semibold">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <span>Seu exemplar com frete grátis para todo o Brasil!</span>
                  </div>
                </div>
                
                <a href="https://www.amazon.com.br/rotina-que-cura-pr%C3%A1tico-vitalidade/dp/6501663040/ref=tmm_pap_swatch_0" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-10 font-bold text-white rounded-xl shadow-strong hover:shadow-custom transition-all" style={{
                  background: 'linear-gradient(90deg, hsl(var(--primary-cyan)), hsl(var(--primary-blue)))'
                }}>
                    QUERO MEU LIVRO AGORA
                  </Button>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
                {/* Elegant background shape */}
                <div className="absolute inset-0 -z-10 transform translate-x-4 translate-y-4">
                  <div className="w-full h-full rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(212, 197, 176, 0.3) 0%, rgba(201, 185, 154, 0.2) 100%)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
                  }}></div>
                </div>
                
                {/* Decorative frame */}
                <div className="absolute -inset-3 rounded-3xl" style={{
                  border: '1px solid rgba(212, 197, 176, 0.3)',
                  boxShadow: '0 0 40px rgba(212, 197, 176, 0.15)'
                }}></div>
                
                <div className="relative">
                  <img 
                    src={heroImage} 
                    alt="Dra. Luciana Lavigne segurando o livro A Rotina que Cura" 
                    className="relative w-full h-auto rounded-3xl shadow-strong"
                    style={{
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.12)'
                    }}
                  />
                  
                  {/* Elegant badge */}
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-strong backdrop-blur-sm" style={{
                    background: 'linear-gradient(135deg, hsl(var(--accent-gold)) 0%, #D4A574 100%)',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 24px rgba(212, 165, 116, 0.4)'
                  }}>
                    ✨ Exclusivo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;