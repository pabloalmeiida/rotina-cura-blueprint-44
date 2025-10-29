const Footer = () => {
  return (
    <footer className="bg-dark-text text-white py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Dra. Luciana Lavigne</h3>
            <p className="text-soft-gray text-sm sm:text-base">Medicina Funcional Integrativa</p>
          </div>
          
          <div className="border-t border-white/20 pt-4 sm:pt-6">
            <p className="text-xs sm:text-sm opacity-80">
              © 2025 Dra. Luciana Lavigne | Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-3 sm:mt-4 text-xs sm:text-sm">
              <a href="https://lucianalavigne.com.br/politica-de-privacidade/" className="hover:text-success-green transition-colors">
                Políticas de Privacidade
              </a>
              <span className="opacity-50 hidden sm:inline">|</span>
              <a href="https://lucianalavigne.com.br/termos-de-uso/" className="hover:text-success-green transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;