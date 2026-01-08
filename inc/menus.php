<?php
if (!defined('ABSPATH')) exit;

function orcronics_register_menus() {
    register_nav_menus([
        'main-menu' => __('Menú Principal', 'orcronics'),
    ]);
}

add_action('after_setup_theme', 'orcronics_register_menus');