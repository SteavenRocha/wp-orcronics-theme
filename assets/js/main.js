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
    const pagination = slider.querySelector('.swiper-pagination');

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
                    /*  console.log(remainingTime) */
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

/* =========================
 *  SWIPER - SERVICES SLIDER
 * ========================= */
document.addEventListener('DOMContentLoaded', () => {

    const servicesSlider = document.querySelector('.services-slider');
    if (!servicesSlider) return;

    const swiperServices = new Swiper(servicesSlider, {
        loop: false,
        speed: 600,
        spaceBetween: 24,

        slidesPerView: 1,

        pagination: {
            el: servicesSlider.querySelector('.swiper-pagination'),
            clickable: true,
        },

        navigation: {
            nextEl: servicesSlider.querySelector('.swiper-button-next'),
            prevEl: servicesSlider.querySelector('.swiper-button-prev'),
        },

        breakpoints: {
            560: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });

});

/* =========================
 *  CONTADOR - ESTADISTICAS
 * ========================= */
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".cifra");
    let hasAnimated = false;

    const animateCounter = (counter) => {
        const target = +counter.dataset.target;
        const duration = 1000;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            counter.textContent = Math.floor(progress * target);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };

        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    counters.forEach(counter => animateCounter(counter));
                    hasAnimated = true;
                }
            });
        },
        { threshold: 0.4 }
    );

    counters.forEach(counter => observer.observe(counter));
});