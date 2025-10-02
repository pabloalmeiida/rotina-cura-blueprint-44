import authorImage from "@/assets/person.png";
import { Button } from "@/components/ui/button";

const AuthorSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-lato">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-text mb-4 sm:mb-6 px-2">
              Minha Jornada da Dor à Descoberta:
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-success-green font-semibold px-2">
              Como me Curei e Encontrei A Rotina Que Cura
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Author Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <img 
                  src={authorImage} 
                  alt="Dra. Luciana Lavigne - Médica especialista em Medicina Funcional Integrativa"
                  className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl shadow-strong"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-success-green/10 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-primary-blue/10 rounded-full"></div>
            </div>

            {/* Author Story */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-light-bg p-4 sm:p-6 lg:p-8 rounded-2xl border-l-4 border-success-green">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-medium">
                  "Aos 23 anos, na faculdade de medicina, enfrentei um diagnóstico de asma severa 
                  e uma sentença: <span className="text-dark-text font-bold">'sem cura, apenas controle'</span>. 
                  Mas meu corpo já clamava por ajuda com dores, problemas digestivos, rinite... 
                  <span className="text-success-green font-bold">Recusei-me a aceitar!</span>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                  Mergulhei na <span className="font-bold text-primary-blue">Medicina Funcional Integrativa</span> 
                  e descobri que todos os meus sintomas estavam interligados por uma 
                  <span className="font-bold text-success-green"> inflamação crônica</span>.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                  Essa busca não só me curou de um tratamento vitalício, mas me deu um propósito: 
                  <span className="font-bold text-dark-text"> tratar a raiz das doenças, não apenas os sintomas</span>.
                </p>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-soft border border-success-green/30">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                    Se você se sente preso(a) a diagnósticos sem solução, saiba que existe um caminho 
                    para a transformação. <span className="font-bold text-success-green">Eu vivi essa cura 
                    e quero te guiar nessa jornada para A Rotina Que Cura.</span>
                  </p>
                </div>

                <div className="text-left mt-6 sm:mt-8">
                  <a href="https://chat.whatsapp.com/FiJjHFWLDzWHVAcTAHsOTG?mode=ems_share_t" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="w-full sm:w-auto text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-10 font-bold text-white rounded-xl"
                      style={{
                        background: 'linear-gradient(90deg, rgba(20, 171, 12, 1) 0%, rgba(20, 176, 12, 1) 100%)'
                      }}
                    >
                      QUERO MEU LIVRO COM 85% OFF
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;