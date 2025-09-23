<?php
/**
 * A Rotina que Cura Theme Functions
 * 
 * @package RotinaqueCura
 * @version 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function rotina_que_cura_setup() {
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'rotina_que_cura_setup');

/**
 * Enqueue Styles and Scripts
 */
function rotina_que_cura_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'rotina-que-cura-fonts',
        'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
        array(),
        '1.0.0'
    );
    
    // Theme stylesheet
    wp_enqueue_style(
        'rotina-que-cura-style',
        get_stylesheet_uri(),
        array('rotina-que-cura-fonts'),
        '1.0.0'
    );
    
    // Lucide icons (CDN)
    wp_enqueue_script(
        'lucide-icons',
        'https://unpkg.com/lucide@latest/dist/umd/lucide.js',
        array(),
        '1.0.0',
        true
    );
    
    // Theme JavaScript
    wp_enqueue_script(
        'rotina-que-cura-script',
        get_template_directory_uri() . '/js/theme.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'rotina_que_cura_scripts');

/**
 * Add meta tags to head
 */
function rotina_que_cura_meta_tags() {
    ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descubra os 5 pilares da Medicina Funcional Integrativa para ter mais energia, saúde e vitalidade. Livro da Dra. Luciana Lavigne em pré-lançamento com 85% de desconto.">
    <meta name="author" content="Dra. Luciana Lavigne">
    <meta name="keywords" content="medicina funcional integrativa, saúde, bem-estar, energia, vitalidade, rotina saudável, livro saúde">
    
    <!-- Open Graph -->
    <meta property="og:title" content="A Rotina que Cura - Livro da Dra. Luciana Lavigne | Pré-lançamento 85% OFF">
    <meta property="og:description" content="Descubra os 5 pilares da Medicina Funcional Integrativa para ter mais energia, saúde e vitalidade.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/og-image.jpg">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="A Rotina que Cura - Livro da Dra. Luciana Lavigne | Pré-lançamento 85% OFF">
    <meta name="twitter:description" content="Descubra os 5 pilares da Medicina Funcional Integrativa para ter mais energia, saúde e vitalidade.">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/og-image.jpg">
    <?php
}
add_action('wp_head', 'rotina_que_cura_meta_tags');

/**
 * Remove unnecessary WordPress features for landing page
 */
function rotina_que_cura_cleanup() {
    // Remove WordPress version from head
    remove_action('wp_head', 'wp_generator');
    
    // Remove RSD link
    remove_action('wp_head', 'rsd_link');
    
    // Remove wlwmanifest link
    remove_action('wp_head', 'wlwmanifest_link');
    
    // Remove shortlink
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Remove feed links
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);
}
add_action('init', 'rotina_que_cura_cleanup');

/**
 * Customizer additions
 */
function rotina_que_cura_customize_register($wp_customize) {
    // Add CTA section
    $wp_customize->add_section('cta_section', array(
        'title'    => __('CTA Settings', 'rotina-que-cura'),
        'priority' => 30,
    ));
    
    // CTA URL
    $wp_customize->add_setting('cta_url', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('cta_url', array(
        'label'   => __('CTA Button URL', 'rotina-que-cura'),
        'section' => 'cta_section',
        'type'    => 'url',
    ));
    
    // CTA Text
    $wp_customize->add_setting('cta_text', array(
        'default'           => '✅ QUERO MEU LIVRO COM 85% OFF',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('cta_text', array(
        'label'   => __('CTA Button Text', 'rotina-que-cura'),
        'section' => 'cta_section',
        'type'    => 'text',
    ));
    
    // WhatsApp Group URL
    $wp_customize->add_setting('whatsapp_url', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control('whatsapp_url', array(
        'label'   => __('WhatsApp Group URL', 'rotina-que-cura'),
        'section' => 'cta_section',
        'type'    => 'url',
    ));
}
add_action('customize_register', 'rotina_que_cura_customize_register');

/**
 * Get CTA URL from customizer
 */
function get_cta_url() {
    return get_theme_mod('cta_url', '#');
}

/**
 * Get CTA Text from customizer
 */
function get_cta_text() {
    return get_theme_mod('cta_text', '✅ QUERO MEU LIVRO COM 85% OFF');
}

/**
 * Get WhatsApp URL from customizer
 */
function get_whatsapp_url() {
    return get_theme_mod('whatsapp_url', '#');
}

/**
 * Add structured data for the book
 */
function rotina_que_cura_structured_data() {
    $structured_data = array(
        '@context' => 'https://schema.org',
        '@type' => 'Book',
        'name' => 'A Rotina que Cura',
        'author' => array(
            '@type' => 'Person',
            'name' => 'Dra. Luciana Lavigne',
            'jobTitle' => 'Médica especialista em Medicina Funcional Integrativa'
        ),
        'description' => 'Um guia estratégico aplicado e validado em centenas de pacientes, para ter mais energia, saúde e vitalidade através dos 5 pilares da Medicina Funcional Integrativa.',
        'genre' => 'Health & Wellness',
        'inLanguage' => 'pt-BR',
        'offers' => array(
            '@type' => 'Offer',
            'availability' => 'https://schema.org/PreOrder',
            'priceValidUntil' => date('Y-m-d', strtotime('+30 days')),
            'url' => home_url()
        )
    );
    ?>
    <script type="application/ld+json">
    <?php echo json_encode($structured_data, JSON_UNESCAPED_SLASHES); ?>
    </script>
    <?php
}
add_action('wp_head', 'rotina_que_cura_structured_data');

/**
 * Disable WordPress admin bar for front-end
 */
add_filter('show_admin_bar', '__return_false');

/**
 * Add security headers
 */
function rotina_que_cura_security_headers() {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
}
add_action('send_headers', 'rotina_que_cura_security_headers');

/**
 * Optimize performance
 */
// Remove emoji scripts
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Remove jQuery migrate
function rotina_que_cura_remove_jquery_migrate($scripts) {
    if (!is_admin() && isset($scripts->registered['jquery'])) {
        $script = $scripts->registered['jquery'];
        if ($script->deps) {
            $script->deps = array_diff($script->deps, array('jquery-migrate'));
        }
    }
}
add_action('wp_default_scripts', 'rotina_que_cura_remove_jquery_migrate');

/**
 * Add async/defer to scripts
 */
function rotina_que_cura_async_scripts($tag, $handle, $src) {
    $async_scripts = array('lucide-icons', 'rotina-que-cura-script');
    
    if (in_array($handle, $async_scripts)) {
        return str_replace('<script ', '<script async ', $tag);
    }
    
    return $tag;
}
add_filter('script_loader_tag', 'rotina_que_cura_async_scripts', 10, 3);
?>