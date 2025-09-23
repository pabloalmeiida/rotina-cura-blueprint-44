    <!-- Footer -->
    <footer class="bg-dark-text text-white py-12">
        <div class="container">
            <div class="max-w-4xl mx-auto text-center space-y-6">
                <div>
                    <h3 class="text-2xl font-bold mb-2">Dra. Luciana Lavigne</h3>
                    <p class="text-soft-gray">Medicina Funcional Integrativa</p>
                </div>
                
                <div class="border-t border-white border-opacity-20 pt-6">
                    <p class="text-sm opacity-80">
                        © <?php echo date('Y'); ?> Dra. Luciana Lavigne | Todos os direitos reservados.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-6 mt-4 text-sm">
                        <a href="https://lucianalavigne.com.br/politica-de-privacidade/" class="hover:text-success-green transition-colors">
                            Políticas de Privacidade
                        </a>
                        <span class="opacity-50 hidden sm:inline">|</span>
                        <a href="https://lucianalavigne.com.br/termos-de-uso/" class="hover:text-success-green transition-colors">
                            Termos de Uso
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div><!-- #page -->

<!-- Initialize Lucide Icons -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });
        
        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
</script>

<?php wp_footer(); ?>

</body>
</html>