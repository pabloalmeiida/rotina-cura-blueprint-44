import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é \"pré-lançamento\" e como funciona?",
      answer: "É a oportunidade de comprar o livro digital \"A Rotina Que Cura\" na Amazon com um preço promocional exclusivo, antes do lançamento oficial."
    },
    {
      question: "Qual será o preço promocional?",
      answer: "O valor promocional, único e exclusivo, será revelado apenas para os participantes do Grupo VIP de WhatsApp. Este preço não se repetirá!"
    },
    {
      question: "Quando o livro será liberado para leitura?",
      answer: "Automaticamente após a compra na Amazon."
    },
    {
      question: "Para quem é este livro?",
      answer: "Para todos que buscam mais energia, saúde e vitalidade, que se sentem cansados, com sintomas crônicos sem explicação clara, ou que desejam entender a raiz dos seus problemas de saúde e construir uma rotina de autocuidado baseada em ciência."
    },
    {
      question: "Preciso ser da área da saúde para entender o livro?",
      answer: "Não! A Dra. Luciana escreveu \"A Rotina Que Cura\" em uma linguagem acessível e prática, para que qualquer pessoa possa aplicar o conhecimento no seu dia a dia, sem jargões médicos desnecessários."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-lato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-text mb-4 sm:mb-6 px-2">
              Perguntas Frequentes
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 px-2">
              Esclarecemos as principais dúvidas sobre o livro e a oferta de pré-lançamento
            </p>
          </div>

          <div className="bg-gradient-section p-4 sm:p-6 lg:p-8 rounded-2xl shadow-soft">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-soft border border-soft-gray/30"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-dark-text hover:text-success-green hover:no-underline text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-success-green/10 p-4 sm:p-6 rounded-xl inline-block">
              <p className="text-dark-text font-semibold text-sm sm:text-base px-2">
                💬 Ainda tem dúvidas? Entre no Grupo VIP e receba atendimento personalizado!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;