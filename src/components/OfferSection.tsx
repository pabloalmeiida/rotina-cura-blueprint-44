import { Button } from "@/components/ui/button";
import { Clock, Lock, Users } from "lucide-react";
import mockupImage from "@/assets/mockup.png";

const OfferSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section font-lato">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-banner text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-bold mb-4 sm:mb-6 shadow-strong">
              <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
              OFERTA EXCLUSIVA
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-text mb-4 sm:mb-6 px-2">
              OFERTA DE PRÉ-LANÇAMENTO:
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-success-green font-bold mb-4 px-2">
              Um Valor Único e IRRESISTÍVEL para Quem Entrar no Grupo VIP!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Offer Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-strong border-l-4 border-success-green">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                  Você está prestes a descobrir não apenas um livro, mas um 
                  <span className="font-bold text-dark-text"> guia completo para a transformação da sua saúde</span>. 
                  E para os leitores mais dedicados e proativos, a Dra. Luciana Lavigne preparou uma condição que 
                  <span className="font-bold text-success-green"> jamais se repetirá</span>.
                </p>
                
                <div className="bg-success-green/10 p-4 sm:p-6 rounded-xl border border-success-green/30">
                  <p className="text-dark-text font-semibold text-center text-sm sm:text-base lg:text-lg">
                    ⚠️ Não haverá bônus adicionais ou ofertas extras nesta página.
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-text text-sm sm:text-base lg:text-lg mb-2">Grupo VIP Exclusivo</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                      O grande benefício aqui é o acesso a um <span className="font-bold text-success-green">VALOR EXCLUSIVO e LIMITADO</span>, 
                      disponível APENAS para quem estiver no nosso Grupo VIP de WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-text text-sm sm:text-base lg:text-lg mb-2">Oferta Irresistível</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                      Esta oferta <span className="font-bold text-success-green">não se repetirá</span> após o período de pré-lançamento. 
                      É a sua chance de investir na sua saúde com as melhores condições.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 max-w-xs sm:max-w-sm lg:max-w-lg mx-auto">
                <img 
                  src={mockupImage} 
                  alt="Livro A Rotina que Cura - Oferta Exclusiva de Pré-lançamento"
                  className="w-full"
                />
              </div>
              {/* Exclusive badge */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-success-green text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-strong animate-pulse z-20">
                85% OFF
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-16 h-16 sm:w-24 sm:h-24 bg-primary-blue/10 rounded-full"></div>
              <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-20 h-20 sm:w-32 sm:h-32 bg-success-green/10 rounded-full"></div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 lg:mt-16 space-y-6 lg:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-strong max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-text mb-4 sm:mb-6 px-2">
                QUERO GARANTIR O PREÇO ÚNICO!
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
                Entrar no Grupo VIP do WhatsApp para Acesso Exclusivo à Oferta de Pré-Venda
              </p>
              
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full sm:w-auto text-lg sm:text-xl lg:text-2xl py-6 sm:py-8 px-8 sm:px-16 shadow-strong hover:shadow-2xl mb-4 sm:mb-6"
                style={{
                  background: 'linear-gradient(90deg, rgba(184, 11, 11, 1) 0%, rgba(212, 23, 23, 1) 100%)'
                }}
              >
                🚀 QUERO MEU LIVRO 85% OFF
              </Button>
              
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 bg-light-bg p-3 sm:p-4 rounded-lg">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">As vagas no Grupo VIP são limitadas</span> para garantir a melhor experiência. 
                  A oferta de pré-lançamento com o valor único e irresistível será liberada primeiro e exclusivamente lá. 
                  <span className="font-bold text-success-green"> Não perca essa chance!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;