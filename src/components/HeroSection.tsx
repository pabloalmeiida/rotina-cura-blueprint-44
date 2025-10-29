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
        background: 'linear-gradient(135deg, #F5F1E8 0%, #E8E9F0 30%, #EFF5F7 60%, #F5F1E8 100%)'
      }}>
        {/* Elegant decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large organic shapes with cyan/blue tones */}
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] opacity-[0.08]">
            <svg viewBox="0 0 800 800" className="w-full h-full">
              <ellipse cx="400" cy="400" rx="350" ry="400" fill="url(#cyanGradient)" transform="rotate(-25 400 400)" />
              <defs>
                <radialGradient id="cyanGradient">
                  <stop offset="0%" style={{ stopColor: 'hsl(188, 99%, 39%)', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(194, 100%, 20%)', stopOpacity: 0.3 }} />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] opacity-[0.06]">
            <svg viewBox="0 0 700 700" className="w-full h-full">
              <ellipse cx="350" cy="350" rx="320" ry="360" fill="url(#blueGradient)" transform="rotate(15 350 350)" />
              <defs>
                <radialGradient id="blueGradient">
                  <stop offset="0%" style={{ stopColor: 'hsl(194, 100%, 20%)', stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(188, 99%, 39%)', stopOpacity: 0.2 }} />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Flowing curved lines */}
          <div className="absolute top-1/4 left-0 w-full h-px opacity-[0.08]">
            <svg viewBox="0 0 1400 200" className="w-full" preserveAspectRatio="none">
              <path d="M0,100 Q350,50 700,100 T1400,100" fill="none" stroke="hsl(188, 99%, 39%)" strokeWidth="2" />
            </svg>
          </div>

          <div className="absolute bottom-1/3 left-0 w-full h-px opacity-[0.06]">
            <svg viewBox="0 0 1400 200" className="w-full" preserveAspectRatio="none">
              <path d="M0,100 Q350,150 700,100 T1400,100" fill="none" stroke="hsl(194, 100%, 20%)" strokeWidth="2" />
            </svg>
          </div>

          {/* Subtle floating circles */}
          <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full opacity-[0.05]" style={{
            background: 'radial-gradient(circle, hsl(188, 99%, 39%) 0%, transparent 70%)'
          }}></div>
          <div className="absolute bottom-40 right-1/4 w-56 h-56 rounded-full opacity-[0.04]" style={{
            background: 'radial-gradient(circle, hsl(194, 100%, 20%) 0%, transparent 70%)'
          }}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full opacity-[0.06]" style={{
            background: 'radial-gradient(circle, hsl(188, 99%, 39%) 0%, transparent 70%)'
          }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-44 h-44 rounded-full opacity-[0.05]" style={{
            background: 'radial-gradient(circle, hsl(194, 100%, 20%) 0%, transparent 70%)'
          }}></div>

          {/* Geometric accent shapes */}
          <div className="absolute top-32 right-1/3 w-24 h-24 opacity-[0.04]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,10 90,90 10,90" fill="hsl(188, 99%, 39%)" />
            </svg>
          </div>
          
          <div className="absolute bottom-48 left-1/4 w-20 h-20 opacity-[0.05]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="20" y="20" width="60" height="60" fill="hsl(194, 100%, 20%)" transform="rotate(45 50 50)" />
            </svg>
          </div>

          {/* Soft gradient overlays for depth */}
          <div className="absolute top-0 left-0 w-full h-1/3 opacity-[0.03]" style={{
            background: 'linear-gradient(180deg, hsl(188, 99%, 39%) 0%, transparent 100%)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.03]" style={{
            background: 'linear-gradient(0deg, hsl(194, 100%, 20%) 0%, transparent 100%)'
          }}></div>
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
                    background: 'linear-gradient(135deg, rgba(1, 181, 200, 0.15) 0%, rgba(0, 92, 100, 0.1) 100%)',
                    boxShadow: '0 20px 60px rgba(1, 181, 200, 0.15)'
                  }}></div>
                </div>
                
                {/* Decorative frame */}
                <div className="absolute -inset-3 rounded-3xl" style={{
                  border: '1px solid rgba(1, 181, 200, 0.2)',
                  boxShadow: '0 0 40px rgba(1, 181, 200, 0.1)'
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;