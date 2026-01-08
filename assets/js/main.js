/* =========================
 *  SWIPER - HERO SLIDER
 * ========================= */
document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.hero-slider');
    if (!slider) return;

    const delay = 6000;
    let isPaused = false;
    let isDragging = false;
    let remainingTime = 0;
    const pauseBtn = document.querySelector('.pause--btn');
    const pagination = document.querySelector('.swiper-pagination');

    const heroSlider = new Swiper(slider, {
        loop: true,
        speed: 600,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        /* navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, */

        autoplay: {
            delay: delay,
            disableOnInteraction: false,
        },

        on: {
            autoplayTimeLeft(swiper, time) {
                if (!isPaused) {
                    remainingTime = time;
                    console.log(remainingTime)
                }
            },

            touchStart() {
                isDragging = true;
                heroSlider.autoplay.stop();
                pagination.classList.add('is-paused');
            },

            touchEnd() {
                isDragging = false;
                heroSlider.params.autoplay.delay = remainingTime || delay;
                heroSlider.autoplay.start();
                pagination.classList.remove('is-paused');
            },

            slideChangeTransitionStart() {
                if (isPaused) {
                    resumeSlider();
                } else {
                    heroSlider.params.autoplay.delay = delay;
                }
            }
        }
    });

    function resumeSlider() {
        isPaused = false;

        heroSlider.params.autoplay.delay = delay;
        heroSlider.autoplay.start();

        pauseBtn.classList.remove('is-paused');
        pagination.classList.remove('is-paused');
        pauseBtn.setAttribute('aria-label', 'Pausar animación');
    }

    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;

        if (isPaused) {
            heroSlider.autoplay.stop();

            pauseBtn.classList.add('is-paused');
            pagination.classList.add('is-paused');
            pauseBtn.setAttribute('aria-label', 'Reanudar animación');
        } else {
            heroSlider.params.autoplay.delay = remainingTime || delay;
            heroSlider.autoplay.start();

            pauseBtn.classList.remove('is-paused');
            pagination.classList.remove('is-paused');
            pauseBtn.setAttribute('aria-label', 'Pausar animación');
        }
    });
});
