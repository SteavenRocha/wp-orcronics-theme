<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <title>Document</title> -->
    <?php wp_head(); ?>
</head>

<body>

    <header class="header">
        <div class="container nav-bar">
            <a href="" class="logo">LOGO</a>

            <div class="menu-container">

                <nav class="main-nav">
                    <?php
                    wp_nav_menu([
                        'theme_location' => 'main-menu',
                        'container'      => false,
                        'menu_class'     => 'menu',
                        'fallback_cb'    => false,
                    ]);
                    ?>
                </nav>

            </div>

            <div class="cta-button">
                <button>
                    Contantacnos
                </button>
            </div>
        </div>
    </header>