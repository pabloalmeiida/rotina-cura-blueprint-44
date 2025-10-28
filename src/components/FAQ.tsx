import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O livro está disponível para compra imediata?",
      answer: "Sim! Adquira agora mesmo e garanta seu exemplar. Você receberá acesso ao conteúdo logo após a confirmação da compra."
    },
    {
      question: "Qual é o valor do livro?",
      answer: "O preço pode sofrer reajustes devido à alta procura ou fim do lote promocional, então aproveite a condição vigente enquanto está disponível."
    },
    {
      question: "Em quais formatos o livro está disponível?",
      answer: "Disponível em formato digital na Amazon Kindle e também físico. Entrega imediata para o digital."
    },
    {
      question: "Preciso ser da área da saúde para aproveitar o conteúdo?",
      answer: "Não! \"A Rotina Que Cura\" é escrito em linguagem acessível e prática, para qualquer pessoa mudar sua saúde sem complicações."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-lato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-text mb-4 sm:mb-6 px-2">
              Perguntas Frequentes - FAQ
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 px-2">
              Esclarecemos as principais dúvidas sobre o livro e a compra
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
                  <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-dark-text hover:text-primary-cyan hover:no-underline text-sm sm:text-base">
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
            <div className="bg-primary-cyan/10 p-4 sm:p-6 rounded-xl inline-block">
              <p className="text-dark-text font-semibold text-sm sm:text-base px-2">
                💬 Ainda tem dúvidas? Adquira agora e transforme sua saúde!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;