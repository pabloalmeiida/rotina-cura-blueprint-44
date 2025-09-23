/**
 * Theme JavaScript
 * A Rotina que Cura Theme
 */

(function() {
    'use strict';
    
    // DOM Ready
    document.addEventListener('DOMContentLoaded', function() {
        
        // Smooth scrolling for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.card, .space-y-4 > *, .space-y-6 > *, .space-y-8 > *');
        animateElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(el);
        });
        
        // Lazy loading for images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(function(img) {
            imageObserver.observe(img);
        });
        
        // Form validation (if needed)
        const forms = document.querySelectorAll('form');
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(function(field) {
                    field.classList.remove('error');
                    
                    if (!field.value.trim()) {
                        field.classList.add('error');
                        isValid = false;
                    }
                    
                    // Email validation
                    if (field.type === 'email' && field.value) {
                        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailPattern.test(field.value)) {
                            field.classList.add('error');
                            isValid = false;
                        }
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    const firstError = form.querySelector('.error');
                    if (firstError) {
                        firstError.focus();
                        firstError.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }
            });
        });
        
        // Performance optimizations
        // Debounce scroll events
        let scrollTimeout;
        const originalScrollHandler = window.onscroll;
        
        window.onscroll = function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            scrollTimeout = setTimeout(function() {
                if (originalScrollHandler) {
                    originalScrollHandler();
                }
            }, 16); // ~60fps
        };
        
        // Preload critical images
        const criticalImages = [
            '/assets/person-holding-book.png',
            '/assets/person.png',
            '/assets/mockup.png'
        ];
        
        criticalImages.forEach(function(src) {
            const img = new Image();
            img.src = getThemeUrl() + src;
        });
        
    });
    
    // Utility function to get theme URL
    function getThemeUrl() {
        const scripts = document.querySelectorAll('script[src*="theme.js"]');
        if (scripts.length > 0) {
            const src = scripts[0].src;
            return src.replace('/js/theme.js', '');
        }
        return '';
    }
    
    // Handle CTA button clicks (analytics)
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Track CTA button clicks
        if (target.matches('.btn-primary, .btn-cta') || target.closest('.btn-primary, .btn-cta')) {
            // Add analytics tracking here if needed
            console.log('CTA button clicked');
            
            // Optional: Add loading state
            const btn = target.matches('.btn-primary, .btn-cta') ? target : target.closest('.btn-primary, .btn-cta');
            if (btn) {
                btn.style.opacity = '0.8';
                setTimeout(function() {
                    btn.style.opacity = '1';
                }, 200);
            }
        }
    });
    
})();