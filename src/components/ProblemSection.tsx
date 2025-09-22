import { CheckCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Acorda cansado(a), mesmo depois de \"dormir\" por horas, e sente a energia se esvair ao longo do dia?",
    "Lida com dores crônicas, problemas digestivos (intestino \"preso\" ou \"solto\"), alergias que não dão trégua ou uma imunidade que parece fraca?",
    "Sente seu humor oscilar, com ansiedade, irritabilidade ou aquela sensação de estar sempre \"no limite\"?",
    "Já tentou dietas milagrosas, tratamentos isolados, mas os sintomas voltam, como se seu corpo estivesse lutando contra você?",
    "A medicina tradicional parece tratar cada parte do seu corpo de forma isolada, sem \"juntar as pontas\" para entender a raiz dos seus problemas?"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section font-lato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-12">
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-text px-2">
              Você se reconhece em alguma dessas situações?
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 text-left">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 border border-soft-gray/30"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-success-green" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-strong border-l-4 border-success-green">
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-dark-text leading-relaxed">
              Se você respondeu sim a uma ou mais perguntas, saiba que você não está sozinho(a). 
              E mais importante: <span className="text-success-green">existe um caminho para a cura 
              que ninguém te contou.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;