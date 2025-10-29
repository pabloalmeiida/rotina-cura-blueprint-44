import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-elegant font-lato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-accent-gold/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-accent-gold" />
              <span className="text-accent-gold font-bold text-sm sm:text-base">ÚLTIMA CHAMADA</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-text mb-6 px-2">
              Pronto Para Começar Sua Transformação?
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-dark-text/80 mb-8 px-2">
              Não deixe para depois o que pode transformar sua vida agora. 
              Centenas de pessoas já iniciaram essa jornada de saúde e vitalidade.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-strong mb-8 border-2 border-primary-cyan/20">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Package className="w-8 h-8 text-primary-cyan" />
                <p className="text-xl sm:text-2xl font-bold text-dark-text">
                  Condições Especiais de Lançamento
                </p>
              </div>
              
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">✓</span>
                  <span className="text-dark-text/80">Frete grátis para todo o Brasil</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">✓</span>
                  <span className="text-dark-text/80">Pronta-entrega com estoques limitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">✓</span>
                  <span className="text-dark-text/80">Método validado em centenas de pacientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">✓</span>
                  <span className="text-dark-text/80">Compra 100% segura pela Amazon</span>
                </li>
              </ul>
            </div>
          </div>

          <a href="https://www.amazon.com.br/rotina-que-cura-pr%C3%A1tico-vitalidade/dp/6501663040/ref=tmm_pap_swatch_0" target="_blank" rel="noopener noreferrer" className="block">
            <Button 
              size="xl" 
              className="w-full sm:w-auto text-base sm:text-xl lg:text-2xl py-5 sm:py-6 lg:py-8 px-6 sm:px-8 lg:px-12 font-bold text-white rounded-xl shadow-strong hover:shadow-custom transition-all mb-4"
            >
              <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center leading-tight">
                <span className="whitespace-nowrap">QUERO COMEÇAR MINHA</span>
                <span className="whitespace-nowrap flex items-center gap-2">
                  TRANSFORMAÇÃO
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </span>
              </span>
            </Button>
          </a>

          <p className="text-accent-gold font-bold text-sm sm:text-base">
            ⚠️ Condições especiais só enquanto durar o estoque
          </p>

          <div className="mt-8 p-4 bg-primary-cyan/10 rounded-xl">
            <p className="text-dark-text/70 text-sm sm:text-base">
              💚 Junte-se a milhares de leitores que já estão transformando suas vidas com 
              <span className="font-bold text-primary-cyan"> A Rotina Que Cura</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
