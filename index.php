<?php
/**
 * Main template file
 * 
 * @package RotinaqueCura
 */

get_header(); ?>

<main id="primary" class="site-main min-h-screen">
    
    <!-- Pre-launch Banner -->
    <section class="bg-gradient-banner text-white py-4 relative z-20">
        <div class="container text-center">
            <div class="inline-flex items-center gap-2 text-sm font-bold tracking-wide">
                ✨ PRÉ-LANÇAMENTO 85% OFF - OFERTA IRRESISTÍVEL
            </div>
        </div>
    </section>

    <!-- Hero Section -->
    <section class="relative min-h-screen overflow-hidden">
        <div class="relative min-h-screen bg-gradient-elegant">
            <!-- Decorative elements -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-cta opacity-10"></div>
                <div class="absolute -top-20 -right-20 w-40 h-40 bg-primary-cyan opacity-20 rounded-full blur-3xl md:-top-40 md:-right-40 md:w-80 md:h-80" style="background-color: hsl(188, 99%, 39%);"></div>
                <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-blue opacity-20 rounded-full blur-3xl md:-bottom-40 md:-left-40 md:w-80 md:h-80" style="background-color: hsl(194, 100%, 20%);"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-cyan opacity-10 rounded-full blur-3xl md:w-96 md:h-96" style="background-color: hsl(188, 99%, 39%);"></div>
            </div>

            <div class="relative z-10 container py-12 lg:py-20">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
                    <!-- Content -->
                    <div class="space-y-6 lg:space-y-10">
                        <div class="space-y-6 lg:space-y-8">
                            <div class="space-y-4">
                                <div class="inline-block">
                                    <span class="text-primary-cyan text-xs font-semibold tracking-widest uppercase bg-primary-cyan bg-opacity-10 px-4 py-2 rounded-full">
                                        Livro Exclusivo
                                    </span>
                                </div>
                                <h1 class="text-4xl lg:text-6xl font-black leading-tight text-dark-text">
                                    A Rotina <span class="text-primary-cyan">que Cura</span>
                                </h1>
                            </div>
                            
                            <p class="text-lg lg:text-2xl text-dark-text opacity-80 leading-relaxed max-w-lg font-light">
                                Um guia estratégico aplicado e validado em <span class="font-semibold text-primary-cyan">centenas de pacientes</span>, para ter mais energia, saúde e vitalidade.
                            </p>
                            
                            <div class="space-y-3 p-6 bg-white bg-opacity-60 backdrop-blur rounded-2xl border border-soft-gray border-opacity-30">
                                <p class="text-xl font-bold text-dark-text">Dra. Luciana Lavigne</p>
                                <p class="text-dark-text opacity-70 leading-relaxed">
                                    Médica especialista em Medicina Funcional Integrativa com mais de 15 anos de experiência
                                </p>
                            </div>
                        </div>

                        <div class="space-y-6 lg:space-y-8">
                            <div class="space-y-4">
                                <p class="leading-relaxed text-dark-text opacity-80 max-w-md">
                                    Entre para nossa lista de espera e receba nossa oferta exclusiva de pré-lançamento.
                                </p>
                                <div class="flex items-center gap-3 text-sm text-primary-cyan font-semibold">
                                    <div class="w-2 h-2 bg-primary-cyan rounded-full"></div>
                                    <span>Oferta válida por tempo limitado</span>
                                </div>
                            </div>
                            
                            <a href="<?php echo esc_url(get_cta_url()); ?>" class="btn btn-primary btn-xl w-full text-center block">
                                <?php echo esc_html(get_cta_text()); ?>
                            </a>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="relative flex justify-center lg:justify-end">
                        <div class="relative max-w-md mx-auto">
                            <div class="absolute -inset-4 bg-gradient-cta opacity-20 rounded-3xl blur-2xl"></div>
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/person-holding-book.png" 
                                alt="Dra. Luciana Lavigne segurando o livro A Rotina que Cura"
                                class="relative w-full h-auto rounded-3xl shadow-strong border-4 border-white border-opacity-50"
                            />
                            <div class="absolute -bottom-6 -right-6 bg-primary-cyan text-white px-4 py-2 rounded-full text-sm font-bold shadow-custom">
                                ✨ Exclusivo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section class="py-16 lg:py-20 bg-gradient-section">
        <div class="container">
            <div class="max-w-4xl mx-auto text-center space-y-12">
                <div class="space-y-6">
                    <h2 class="text-3xl lg:text-5xl font-bold text-dark-text">
                        Você se reconhece em alguma dessas situações?
                    </h2>
                </div>

                <div class="grid gap-6 text-left">
                    <?php 
                    $problems = array(
                        "Acorda cansado(a), mesmo depois de \"dormir\" por horas, e sente a energia se esvair ao longo do dia?",
                        "Lida com dores crônicas, problemas digestivos (intestino \"preso\" ou \"solto\"), alergias que não dão trégua ou uma imunidade que parece fraca?",
                        "Sente seu humor oscilar, com ansiedade, irritabilidade ou aquela sensação de estar sempre \"no limite\"?",
                        "Já tentou dietas milagrosas, tratamentos isolados, mas os sintomas voltam, como se seu corpo estivesse lutando contra você?",
                        "A medicina tradicional parece tratar cada parte do seu corpo de forma isolada, sem \"juntar as pontas\" para entender a raiz dos seus problemas?"
                    );
                    
                    foreach ($problems as $problem): ?>
                    <div class="flex gap-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-strong transition-all border border-soft-gray border-opacity-30">
                        <div class="flex-shrink-0 mt-1">
                            <i data-lucide="check-circle" class="h-6 w-6 text-success-green"></i>
                        </div>
                        <p class="text-gray-700 leading-relaxed">
                            <?php echo esc_html($problem); ?>
                        </p>
                    </div>
                    <?php endforeach; ?>
                </div>

                <div class="bg-white p-8 rounded-2xl shadow-strong border-l-4 border-success-green">
                    <p class="text-lg font-semibold text-dark-text leading-relaxed">
                        Se você respondeu sim a uma ou mais perguntas, saiba que você não está sozinho(a). 
                        E mais importante: <span class="text-success-green">existe um caminho para a cura 
                        que ninguém te contou.</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Author Section -->
    <section class="py-16 lg:py-20 bg-white">
        <div class="container">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-5xl font-bold text-dark-text mb-6">
                        Minha Jornada da Dor à Descoberta:
                    </h2>
                    <p class="text-xl lg:text-2xl text-success-green font-semibold">
                        Como me Curei e Encontrei A Rotina Que Cura
                    </p>
                </div>

                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Author Image -->
                    <div class="relative lg:order-1">
                        <div class="relative z-10">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/person.png" 
                                alt="Dra. Luciana Lavigne - Médica especialista em Medicina Funcional Integrativa"
                                class="w-full max-w-md mx-auto rounded-2xl shadow-strong"
                            />
                        </div>
                        <!-- Decorative elements -->
                        <div class="absolute -top-6 -right-6 w-24 h-24 bg-success-green bg-opacity-10 rounded-full"></div>
                        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-blue bg-opacity-10 rounded-full"></div>
                    </div>

                    <!-- Author Story -->
                    <div class="space-y-6 lg:order-2">
                        <div class="bg-light-bg p-8 rounded-2xl border-l-4 border-success-green">
                            <p class="leading-relaxed text-gray-700 font-medium">
                                "Aos 23 anos, na faculdade de medicina, enfrentei um diagnóstico de asma severa 
                                e uma sentença: <span class="text-dark-text font-bold">'sem cura, apenas controle'</span>. 
                                Mas meu corpo já clamava por ajuda com dores, problemas digestivos, rinite... 
                                <span class="text-success-green font-bold">Recusei-me a aceitar!</span>
                            </p>
                        </div>

                        <div class="space-y-4">
                            <p class="leading-relaxed text-gray-700">
                                Mergulhei na <span class="font-bold text-primary-blue">Medicina Funcional Integrativa</span> 
                                e descobri que todos os meus sintomas estavam interligados por uma 
                                <span class="font-bold text-success-green"> inflamação crônica</span>.
                            </p>

                            <p class="leading-relaxed text-gray-700">
                                Essa busca não só me curou de um tratamento vitalício, mas me deu um propósito: 
                                <span class="font-bold text-dark-text"> tratar a raiz das doenças, não apenas os sintomas</span>.
                            </p>

                            <div class="bg-white p-6 rounded-xl shadow-soft border border-success-green border-opacity-30">
                                <p class="leading-relaxed text-gray-700">
                                    Se você se sente preso(a) a diagnósticos sem solução, saiba que existe um caminho 
                                    para a transformação. <span class="font-bold text-success-green">Eu vivi essa cura 
                                    e quero te guiar nessa jornada para A Rotina Que Cura.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Book Pillars Section -->
    <section class="py-16 lg:py-20 bg-gradient-section">
        <div class="container">
            <div class="max-w-6xl mx-auto">
                <!-- Header -->
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-5xl font-bold text-dark-text mb-6">
                        O que você vai aprender no livro?
                    </h2>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Em <span class="font-bold text-success-green">A Rotina Que Cura</span>, 
                        a Dra. Luciana Lavigne, vai te guiar para entender a causa raiz por trás dos seus sintomas. 
                        Você descobrirá como reequilibrar seu corpo e criar uma rotina através de 
                        <span class="font-bold text-primary-blue"> 5 pilares fundamentais e interligados</span>:
                    </p>
                </div>

                <!-- Book mockup -->
                <div class="flex justify-center mb-16">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/mockup.png" 
                        alt="Livro A Rotina que Cura em diferentes formatos - físico, tablet e celular"
                        class="max-w-lg w-full h-auto"
                    />
                </div>

                <!-- Pillars -->
                <div class="space-y-12">
                    <?php 
                    $pillars = array(
                        array(
                            'icon' => 'utensils',
                            'title' => 'Alimentação',
                            'subtitle' => 'A Base da Sua Saúde',
                            'description' => 'Desvende o poder dos alimentos de verdade para desinflamar seu corpo.',
                            'details' => 'Qual o tipo de alimentos que você deve ou não comer. A importância de ler rótulos para não ser enganado(a), a verdade sobre macronutrientes, grãos, carboidratos, tipos de gorduras, quantidades de proteínas. É uma sugestão de cardápios em um Programa de Desinflamação completo.'
                        ),
                        array(
                            'icon' => 'clock',
                            'title' => 'Rotina',
                            'subtitle' => 'O Hábito Que Transforma',
                            'description' => 'Crie uma estrutura para o dia a dia que fortaleça seu organismo e traga energia duradoura.',
                            'details' => 'O poder dos hábitos durante sua rotina matinal, ajudando na melhora na digestão e absorção dos nutrientes. Os perigos de uma vida sem rotina, que ajuda a equilibrar o ciclo circadiano que equilibra o hormônio neurotransmissor. A importância do exercício físico e como os 5 pilares se encaixam na sua rotina.'
                        ),
                        array(
                            'icon' => 'moon',
                            'title' => 'Sono',
                            'subtitle' => 'A Rotina Noturna',
                            'description' => 'Descubra o sono reparador que desintoxica, regula hormônios e clareia a mente.',
                            'details' => 'Como dormir bem de verdade, como sincronizar seu relógio interno (crononutrição), e como a falta de sono afeta seus pensamentos, bem-estar, regulação do seu metabolismo e na sua saúde física e mental.'
                        ),
                        array(
                            'icon' => 'pill',
                            'title' => 'Suplementação',
                            'subtitle' => 'A Faísca que Seu Corpo Precisa',
                            'description' => 'Entenda quando e como os suplementos são um grande aliado e fundamentais para saúde integral do ser humano.',
                            'details' => 'Guias práticos de suplementação para o dia a dia, para melhorar o sono, tratar gastrite, cuidar do fígado, reequilibrar a tireoide e diminuir a inflamação intestinal.'
                        ),
                        array(
                            'icon' => 'heart',
                            'title' => 'Saúde Mental',
                            'subtitle' => 'O Equilíbrio Essencial',
                            'description' => 'Compreenda como a saúde mental está relacionada com os outros pilares.',
                            'details' => 'Como a saúde mental está interligada a tudo e como ter um corpo são e mente sã, mesmo em um mundo apressado.'
                        )
                    );
                    
                    foreach ($pillars as $index => $pillar): ?>
                    <div class="bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all overflow-hidden">
                        <div class="p-8">
                            <div class="flex flex-col sm:flex-row items-start gap-6">
                                <div class="flex-shrink-0 mx-auto sm:mx-0">
                                    <div class="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center">
                                        <i data-lucide="<?php echo esc_attr($pillar['icon']); ?>" class="h-8 w-8 text-white"></i>
                                    </div>
                                </div>
                                
                                <div class="flex-1 space-y-4 text-center sm:text-left">
                                    <div>
                                        <h3 class="text-2xl font-bold text-dark-text">
                                            Pilar <?php echo ($index + 1); ?>: <?php echo esc_html($pillar['title']); ?>
                                        </h3>
                                        <p class="text-success-green font-semibold text-lg">
                                            <?php echo esc_html($pillar['subtitle']); ?>
                                        </p>
                                    </div>
                                    
                                    <p class="font-medium text-gray-700">
                                        <?php echo esc_html($pillar['description']); ?>
                                    </p>
                                    
                                    <div class="bg-light-bg p-4 rounded-lg">
                                        <p class="text-dark-text font-medium mb-2">Você vai aprender:</p>
                                        <p class="text-gray-700 leading-relaxed text-sm">
                                            <?php echo esc_html($pillar['details']); ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>

                <!-- Bonus content -->
                <div class="mt-16 bg-success-green bg-opacity-10 p-8 rounded-2xl border-2 border-success-green border-opacity-30">
                    <h3 class="text-2xl font-bold text-dark-text mb-6 text-center">
                        E mais! No livro, você também vai descobrir:
                    </h3>
                    <div class="grid md:grid-cols-3 gap-4">
                        <?php 
                        $bonus_content = array(
                            'As panelas ideais para cozinhar sem intoxicar seu corpo',
                            'A surpreendente conexão entre sua língua e sua saúde',
                            'Como sua tireoide orquestra seu metabolismo e como otimizá-la'
                        );
                        
                        foreach ($bonus_content as $bonus): ?>
                        <div class="bg-white p-4 rounded-lg shadow-soft text-center">
                            <p class="text-gray-700 font-medium"><?php echo esc_html($bonus); ?></p>
                        </div>
                        <?php endforeach; ?>
                    </div>
                    <p class="text-center font-semibold text-dark-text mt-6">
                        Prepare-se para enxergar seu corpo com novas lentes e construir uma saúde sólida, 
                        resistente às adversidades, com um guia prático que vai <span class="text-success-green">muito além do óbvio!</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Offer Section -->
    <section class="py-16 lg:py-20 bg-gradient-section">
        <div class="container">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <div class="inline-flex items-center gap-2 bg-success-green text-white px-6 py-3 rounded-full font-bold mb-6 shadow-strong">
                        <i data-lucide="lock" class="h-5 w-5"></i>
                        OFERTA EXCLUSIVA
                    </div>
                    <h2 class="text-3xl lg:text-5xl font-bold text-dark-text mb-6">
                        OFERTA DE PRÉ-LANÇAMENTO:
                    </h2>
                    <p class="text-xl lg:text-2xl text-success-green font-bold mb-4">
                        Um Valor Único e IRRESISTÍVEL para Quem Entrar no Grupo VIP!
                    </p>
                </div>

                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Offer Content -->
                    <div class="space-y-8 lg:order-1">
                        <div class="bg-white p-8 rounded-2xl shadow-strong border-l-4 border-success-green">
                            <p class="leading-relaxed text-gray-700 mb-6">
                                Você está prestes a descobrir não apenas um livro, mas um 
                                <span class="font-bold text-dark-text"> guia completo para a transformação da sua saúde</span>. 
                                E para os leitores mais dedicados e proativos, a Dra. Luciana Lavigne preparou uma condição que 
                                <span class="font-bold text-success-green"> jamais se repetirá</span>.
                            </p>
                            
                            <div class="bg-success-green bg-opacity-10 p-6 rounded-xl border border-success-green border-opacity-30">
                                <p class="text-dark-text font-semibold text-center">
                                    ⚠️ Não haverá bônus adicionais ou ofertas extras nesta página.
                                </p>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <div class="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft">
                                <div class="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="users" class="h-6 w-6 text-white"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-dark-text mb-2">Grupo VIP Exclusivo</h3>
                                    <p class="text-gray-700 text-sm">
                                        O grande benefício aqui é o acesso a um <span class="font-bold text-success-green">VALOR EXCLUSIVO e LIMITADO</span>, 
                                        disponível APENAS para quem estiver no nosso Grupo VIP de WhatsApp.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft">
                                <div class="w-12 h-12 bg-success-green rounded-full flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="clock" class="h-6 w-6 text-white"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-dark-text mb-2">Oferta Irresistível</h3>
                                    <p class="text-gray-700 text-sm">
                                        Esta oferta <span class="font-bold text-success-green">não se repetirá</span> após o período de pré-lançamento. 
                                        É a sua chance de investir na sua saúde com as melhores condições.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Book Image -->
                    <div class="relative lg:order-2">
                        <div class="relative z-10 max-w-lg mx-auto">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/mockup.png" 
                                alt="Livro A Rotina que Cura - Oferta Exclusiva de Pré-lançamento"
                                class="w-full"
                            />
                        </div>
                        <!-- Exclusive badge -->
                        <div class="absolute -top-4 -right-4 bg-success-green text-white px-4 py-2 rounded-full font-bold text-sm shadow-strong animate-pulse z-20">
                            85% OFF
                        </div>
                        <!-- Decorative elements -->
                        <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-blue bg-opacity-10 rounded-full"></div>
                        <div class="absolute -top-8 -right-8 w-32 h-32 bg-success-green bg-opacity-10 rounded-full"></div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="text-center mt-16 space-y-8">
                    <div class="bg-white p-8 rounded-2xl shadow-strong max-w-4xl mx-auto">
                        <h3 class="text-2xl lg:text-3xl font-bold text-dark-text mb-6">
                            QUERO GARANTIR O PREÇO ÚNICO!
                        </h3>
                        <p class="text-gray-600 mb-8">
                            Entrar no Grupo VIP do WhatsApp para Acesso Exclusivo à Oferta de Pré-Venda
                        </p>
                        
                        <a href="<?php echo esc_url(get_whatsapp_url()); ?>" class="btn btn-primary btn-xl text-2xl py-8 px-16 shadow-strong hover:shadow-2xl mb-6 inline-block">
                            🚀 QUERO MEU LIVRO 85% OFF
                        </a>
                        
                        <div class="flex items-start gap-2 text-sm text-gray-600 bg-light-bg p-4 rounded-lg">
                            <i data-lucide="lock" class="h-4 w-4 flex-shrink-0 mt-0.5"></i>
                            <p>
                                <span class="font-semibold">As vagas no Grupo VIP são limitadas</span> para garantir a melhor experiência. 
                                A oferta de pré-lançamento com o valor único e irresistível será liberada primeiro e exclusivamente lá. 
                                <span class="font-bold text-success-green"> Não perca essa chance!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 lg:py-20 bg-white">
        <div class="container">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-3xl lg:text-5xl font-bold text-dark-text mb-6">
                        Perguntas Frequentes
                    </h2>
                    <p class="text-gray-600">
                        Esclarecemos as principais dúvidas sobre o livro e a oferta de pré-lançamento
                    </p>
                </div>

                <div class="bg-gradient-section p-8 rounded-2xl shadow-soft">
                    <div class="space-y-4">
                        <?php 
                        $faqs = array(
                            array(
                                'question' => 'O que é "pré-lançamento" e como funciona?',
                                'answer' => 'É a oportunidade de comprar o livro digital "A Rotina Que Cura" na Amazon com um preço promocional exclusivo, antes do lançamento oficial.'
                            ),
                            array(
                                'question' => 'Qual será o preço promocional?',
                                'answer' => 'O valor promocional, único e exclusivo, será revelado apenas para os participantes do Grupo VIP de WhatsApp. Este preço não se repetirá!'
                            ),
                            array(
                                'question' => 'Quando o livro será liberado para leitura?',
                                'answer' => 'Automaticamente após a compra na Amazon.'
                            ),
                            array(
                                'question' => 'Para quem é este livro?',
                                'answer' => 'Para todos que buscam mais energia, saúde e vitalidade, que se sentem cansados, com sintomas crônicos sem explicação clara, ou que desejam entender a raiz dos seus problemas de saúde e construir uma rotina de autocuidado baseada em ciência.'
                            ),
                            array(
                                'question' => 'Preciso ser da área da saúde para entender o livro?',
                                'answer' => 'Não! A Dra. Luciana escreveu "A Rotina Que Cura" em uma linguagem acessível e prática, para que qualquer pessoa possa aplicar o conhecimento no seu dia a dia, sem jargões médicos desnecessários.'
                            )
                        );
                        
                        foreach ($faqs as $faq): ?>
                        <details class="bg-white rounded-xl shadow-soft border border-soft-gray border-opacity-30">
                            <summary class="px-6 py-4 font-semibold text-dark-text cursor-pointer hover:text-success-green">
                                <?php echo esc_html($faq['question']); ?>
                            </summary>
                            <div class="px-6 pb-4 text-gray-700 leading-relaxed">
                                <?php echo esc_html($faq['answer']); ?>
                            </div>
                        </details>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <div class="bg-success-green bg-opacity-10 p-6 rounded-xl inline-block">
                        <p class="text-dark-text font-semibold">
                            💬 Ainda tem dúvidas? Entre no Grupo VIP e receba atendimento personalizado!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Scroll to Top Button -->
    <button id="scrollToTop" class="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-strong hover:shadow-2xl btn btn-hero hidden no-print">
        <i data-lucide="arrow-up" class="h-6 w-6"></i>
    </button>

</main>

<?php get_footer(); ?>