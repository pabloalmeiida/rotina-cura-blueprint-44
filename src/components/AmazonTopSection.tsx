import { Star, TrendingUp } from "lucide-react";

const AmazonTopSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 bg-accent-gold/20 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-5 h-5 text-accent-gold" />
              <span className="text-accent-gold font-bold text-sm sm:text-base">SUCESSO DE VENDAS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-text mb-4 sm:mb-6 px-2">
              Entre os 10 Mais Vendidos na Amazon
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-dark-text/70 px-2 mb-6">
              Nas categorias: <span className="font-bold text-primary-cyan">Medicina</span>, <span className="font-bold text-primary-cyan">Vida Saudável e Bem-estar</span> e <span className="font-bold text-primary-cyan">Mente, Corpo e Espírito</span>
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-strong border border-soft-gray/30">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 sm:h-10 sm:w-10 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <div className="text-center space-y-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-dark-text">
                  Avaliado com 5 Estrelas pelos Leitores
                </p>
                <p className="text-sm sm:text-base text-dark-text/70">
                  Um dos livros mais procurados sobre saúde e bem-estar no Brasil
                </p>
              </div>

              {/* Amazon Screenshot placeholder - você pode adicionar um screenshot real aqui */}
              <div className="w-full bg-gradient-elegant p-6 rounded-xl border-2 border-accent-gold/30">
                <p className="text-center text-dark-text/60 text-sm">
                  🏆 Destaque entre os mais vendidos da Amazon Brasil
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-primary-cyan/10 p-4 sm:p-6 rounded-xl inline-block">
              <p className="text-dark-text font-semibold text-sm sm:text-base px-2">
                ⭐ Milhares de leitores já estão transformando suas vidas com este método!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazonTopSection;
