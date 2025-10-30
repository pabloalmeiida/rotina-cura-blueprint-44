import { Button } from "@/components/ui/button";
import { Clock, Check, Sparkles } from "lucide-react";
import mockupImage from "@/assets/mockup.png";
const OfferSection = () => {
  return <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Special Launch Offer Badge */}
          <div className="text-center mb-8">
            <span className="inline-block bg-accent-gold text-white px-6 py-3 rounded-full text-sm sm:text-base font-bold tracking-wide shadow-strong">
              🎉 OFERTA ESPECIAL DE LANÇAMENTO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-dark-text mb-6 lg:mb-8 px-2">
            Condições Únicas para Esta Página
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-center text-dark-text/80 mb-12 lg:mb-16 max-w-3xl mx-auto px-2">
            Agora em pronta-entrega com benefícios exclusivos. Estoques limitados.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Book Image */}
            <div className="relative">
              <div className="bg-gradient-section p-4 sm:p-6 rounded-2xl shadow-soft">
                <div className="bg-primary-cyan text-white text-center py-3 px-4 sm:px-6 rounded-t-2xl">
                  <p className="font-bold text-lg sm:text-xl">📦 Pronta-Entrega</p>
                </div>
                <div className="bg-white p-6 sm:p-8 rounded-b-2xl">
                  <div className="relative z-10 max-w-xs mx-auto mb-6">
                    <img 
                      src={mockupImage} 
                      alt="Livro A Rotina que Cura - Disponível Agora" 
                      width="1920"
                      height="1090"
                      className="w-full" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Offer Content */}
            <div className="space-y-6">
              <div className="bg-gradient-section p-6 sm:p-8 rounded-2xl shadow-soft border border-soft-gray/30">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-text mb-6">
                  🎁 Benefícios Exclusivos
                </h3>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-cyan/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary-cyan" />
                    </div>
                    <span className="text-dark-text/80 text-base sm:text-lg">
                      <span className="font-semibold">Entrega rápida</span> - Estoques limitados
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-cyan/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary-cyan" />
                    </div>
                    <span className="text-dark-text/80 text-base sm:text-lg">
                      <span className="font-semibold">Conteúdo completo</span> - Método validado em centenas de pacientes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-cyan/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary-cyan" />
                    </div>
                    <span className="text-dark-text/80 text-base sm:text-lg">
                      <span className="font-semibold">Garantia Amazon</span> - Compra 100% segura
                    </span>
                  </li>
                </ul>

                {/* CTA Button */}
                <div className="space-y-4">
                  <a href="https://www.amazon.com.br/rotina-que-cura-pr%C3%A1tico-vitalidade/dp/6501663040/ref=tmm_pap_swatch_0" target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="xl" 
                      className="w-full text-base sm:text-lg py-6 sm:py-8 px-6 font-bold text-white rounded-xl shadow-strong hover:shadow-custom transition-all"
                    >
                      <span className="flex items-center justify-center gap-2">
                        🚀 QUERO MEU LIVRO AGORA
                      </span>
                    </Button>
                  </a>
                  
                  <p className="text-center text-sm text-accent-gold font-semibold">
                    📦 Condições especiais só enquanto durar o estoque
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency & Scarcity */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="bg-gradient-section p-6 sm:p-8 rounded-2xl shadow-strong max-w-2xl mx-auto border-2 border-accent-gold/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-accent-gold" />
                <h3 className="text-xl sm:text-2xl font-bold text-dark-text">
                  Estoques Limitados
                </h3>
              </div>
              <p className="text-base sm:text-lg text-dark-text/70 mb-6">
                Esta é uma <span className="font-bold">oferta especial</span> para quem adquirir nesta página. Todas essas <span className="text-accent-gold font-semibold">condições únicas</span> não se repetirão.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent-gold font-semibold">
                <Sparkles className="w-5 h-5" />
                <span>Garanta já seu exemplar e inicie sua transformação!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OfferSection;