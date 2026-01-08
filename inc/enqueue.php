<?php
if (!defined('ABSPATH')) exit;

function orcronics_enqueue_assets()
{

    /* =========================
     *  SWIPER v12.0.3
     * ========================= */
    wp_enqueue_style(
        'swiper-css',
        get_template_directory_uri() . '/assets/vendor/swiper/swiper-bundle.min.css',
        [],
        '12.0.3'
    );

    wp_enqueue_script(
        'swiper-js',
        get_template_directory_uri() . '/assets/vendor/swiper/swiper-bundle.min.js',
        [],
        '12.0.3',
        true
    );

    /* =========================
     *  MIS ARCHIVOS
     * ========================= */
    wp_enqueue_style(
        'style',
        get_template_directory_uri() . '/assets/css/style.css',
        ['swiper-css'],
        '1.0.0'
    );

    wp_enqueue_script(
        'js',
        get_template_directory_uri() . '/assets/js/main.js',
        ['swiper-js'],
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'orcronics_enqueue_assets');
