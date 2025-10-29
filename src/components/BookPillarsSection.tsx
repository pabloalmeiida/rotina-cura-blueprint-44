import { Utensils, Clock, Moon, Pill, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import mockupImage from "@/assets/mockup.png";

const BookPillarsSection = () => {
  const pillars = [
    {
      icon: Utensils,
      title: "Alimentação",
      subtitle: "A Base da Sua Saúde",
      description: "Desvende o poder dos alimentos de verdade para desinflamar seu corpo.",
      details: "Qual o tipo de alimentos que você deve ou não comer. A importância de ler rótulos para não ser enganado(a), a verdade sobre macronutrientes, grãos, carboidratos, tipos de gorduras, quantidades de proteínas. É uma sugestão de cardápios em um Programa de Desinflamação completo."
    },
    {
      icon: Clock,
      title: "Rotina",
      subtitle: "O Hábito Que Transforma",
      description: "Crie uma estrutura para o dia a dia que fortaleça seu organismo e traga energia duradoura.",
      details: "O poder dos hábitos durante sua rotina matinal, ajudando na melhora na digestão e absorção dos nutrientes. Os perigos de uma vida sem rotina, que ajuda a equilibrar o ciclo circadiano que equilibra o hormônio neurotransmissor. A importância do exercício físico e como os 5 pilares se encaixam na sua rotina."
    },
    {
      icon: Moon,
      title: "Sono",
      subtitle: "A Rotina Noturna",
      description: "Descubra o sono reparador que desintoxica, regula hormônios e clareia a mente.",
      details: "Como dormir bem de verdade, como sincronizar seu relógio interno (crononutrição), e como a falta de sono afeta seus pensamentos, bem-estar, regulação do seu metabolismo e na sua saúde física e mental."
    },
    {
      icon: Pill,
      title: "Suplementação",
      subtitle: "A Faísca que Seu Corpo Precisa",
      description: "Entenda quando e como os suplementos são um grande aliado e fundamentais para saúde integral do ser humano.",
      details: "Guias práticos de suplementação para o dia a dia, para melhorar o sono, tratar gastrite, cuidar do fígado, reequilibrar a tireoide e diminuir a inflamação intestinal."
    },
    {
      icon: Heart,
      title: "Saúde Mental",
      subtitle: "O Equilíbrio Essencial",
      description: "Compreenda como a saúde mental está relacionada com os outros pilares.",
      details: "Como a saúde mental está interligada a tudo e como ter um corpo são e mente sã, mesmo em um mundo apressado."
    }
  ];

  const bonusContent = [
    "As panelas ideais para cozinhar sem intoxicar seu corpo",
    "A surpreendente conexão entre sua língua e sua saúde",
    "Como sua tireoide orquestra seu metabolismo e como otimizá-la"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section font-lato">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-text mb-4 sm:mb-6 px-2">
              O que você vai aprender no livro?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Em <span className="font-bold text-success-green">A Rotina Que Cura</span>, 
              a Dra. Luciana Lavigne, vai te guiar para entender a causa raiz por trás dos seus sintomas. 
              Você descobrirá como reequilibrar seu corpo e criar uma rotina através de 
              <span className="font-bold text-primary-blue"> 5 pilares fundamentais e interligados</span>:
            </p>
          </div>

          {/* Book mockup */}
          <div className="flex justify-center mb-12 lg:mb-16">
            <img 
              src={mockupImage} 
              alt="Livro A Rotina que Cura em diferentes formatos - físico, tablet e celular"
              className="max-w-xs sm:max-w-sm lg:max-w-lg w-full h-auto"
            />
          </div>

          {/* Pillars */}
          <div className="space-y-8 lg:space-y-12">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center" style={{
                        background: 'linear-gradient(90deg, rgba(216, 188, 128, 1) 0%, rgba(173, 143, 78, 1) 100%)'
                      }}>
                        <pillar.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-dark-text">
                          Pilar {index + 1}: {pillar.title}
                        </h3>
                        <p className="text-success-green font-semibold text-sm sm:text-base lg:text-lg">
                          {pillar.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">
                        {pillar.description}
                      </p>
                      
                      <div className="bg-light-bg p-3 sm:p-4 rounded-lg">
                        <p className="text-xs sm:text-sm font-medium text-dark-text mb-2">Você vai aprender:</p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                          {pillar.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus content */}
          <div className="mt-12 lg:mt-16 bg-success-green/10 p-6 sm:p-8 rounded-2xl border-2 border-success-green/30">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-dark-text mb-4 sm:mb-6 text-center px-2">
              E mais! No livro, você também vai descobrir:
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {bonusContent.map((bonus, index) => (
                <div 
                  key={index}
                  className="bg-white p-3 sm:p-4 rounded-lg shadow-soft text-center"
                >
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">{bonus}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm sm:text-base lg:text-lg font-semibold text-dark-text mt-4 sm:mt-6 px-2">
              Prepare-se para enxergar seu corpo com novas lentes e construir uma saúde sólida, 
              resistente às adversidades, com um guia prático que vai <span className="text-success-green">muito além do óbvio!</span>
            </p>
          </div>

          <div className="text-center mt-8 sm:mt-12">
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
    </section>
  );
};

export default BookPillarsSection;