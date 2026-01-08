<?php get_header(); ?>

<main>
    <!-- HERO -->
    <section class="section">
        <div class="swiper hero-slider">
            <div class="swiper-wrapper">

                <?php if (have_rows('hero_slider')): ?>
                    <?php while (have_rows('hero_slider')): the_row();
                        $hs_image = get_sub_field('hs_image');
                        $hs_title = get_sub_field('hs_title');
                        $hs_description = get_sub_field('hs_description');
                        $hs_button = get_sub_field('hs_button');

                        $bg_image = wp_get_attachment_image_url($hs_image, 'full');
                    ?>
                        <div class="swiper-slide slide__hero text--white" style="background-image: url('<?php echo esc_url($bg_image); ?>');">
                            <div class="container">
                                <div class="slide__left">
                                    <?php if ($hs_title): ?>
                                        <h1><?php echo esc_html($hs_title); ?></h1>
                                    <?php endif; ?>
                                    <?php if ($hs_description): ?>
                                        <p class="mg-t-1"><?php echo esc_html($hs_description); ?></p>
                                    <?php endif; ?>

                                    <?php if ($hs_button): ?>
                                        <a href="<?php echo esc_url($hs_button['button_url_hs']); ?>"
                                            class="mg-t-3 btn <?php echo esc_attr($hs_button['button_style_hs']); ?>">
                                            <?php echo esc_html($hs_button['button_text_hs']); ?>
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>

                    <?php endwhile; ?>
                <?php endif; ?>

            </div>

            <!-- Controles Swiper -->
            <!-- Navegación -->
            <!-- <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div> -->

            <!-- Paginación -->
            <div class="swiper-pagination"></div>

            <!-- Botón de pausa -->
            <button class="pause--btn" aria-label="Pausar animación">
                <svg
                    class="pause"
                    xmlns="http://www.w3.org/2000/svg" width="80" height="128" viewBox="0 0 320 512">
                    <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48z" />
                </svg>

                <svg
                    class="play"
                    xmlns="http://www.w3.org/2000/svg" width="96" height="128" viewBox="0 0 384 512">
                    <path fill="#ffffff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41z" />
                </svg>
            </button>
        </div>
    </section>
    <!-- CLIENTES -->
    <section>

    </section>

    <!-- SERVICIOS -->
    <section class="section services">
        <div class="container">
            <div class="heading">

                <div class="heading__texts">
                    <?php
                    $services_title = get_field('services_title');
                    $services_description = get_field('services_description');
                    $services_button = get_field('services_button');
                    ?>

                    <?php if ($services_title): ?>
                        <h3 class="secondary--title"><?php echo esc_html($services_title); ?></h3>
                    <?php endif; ?>
                    <?php if ($services_description): ?>
                        <p class="mg-t-1"><?php echo esc_html($services_description); ?></p>
                    <?php endif; ?>
                </div>

                <?php if ($services_button): ?>
                    <a href="<?php echo esc_url($services_button['button_url_services']); ?>"
                        class="btn <?php echo esc_attr($services_button['button_style_services']); ?>">
                        <?php echo esc_html($services_button['button_text_services']); ?>
                    </a>
                <?php endif; ?>

            </div>
        </div>
    </section>

</main>

<?php wp_footer(); ?>

</body>

</html>