/*==================================================
 Bounce Boss Website v6.5
 Performance Edition
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /*==============================================
      CENTER ACTIVE NAVIGATION
    ==============================================*/

    const nav = document.querySelector(".nav");
    const active = document.querySelector(".nav .active");

    if (nav && active) {

        requestAnimationFrame(() => {

            active.scrollIntoView({

                behavior: prefersReducedMotion ? "auto" : "auto",
                inline: "center",
                block: "nearest"

            });

        });

    }

    /*==============================================
      SCROLL REVEAL
    ==============================================*/

    const revealItems = document.querySelectorAll(
        ".container, .section, .cta"
    );

    if ("IntersectionObserver" in window && !prefersReducedMotion) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });

        revealItems.forEach((item) => {

            item.classList.add("reveal");
            observer.observe(item);

        });

    } else {

        revealItems.forEach((item) => {

            item.classList.add("visible");

        });

    }

    /*==============================================
      BUTTON PRESS EFFECT
    ==============================================*/

    if (!prefersReducedMotion) {

        document.querySelectorAll(".btn, .book-now").forEach((button) => {

            button.addEventListener("pointerdown", () => {

                button.style.transform = "scale(.97)";

            });

            const resetButton = () => {

                button.style.transform = "";

            };

            button.addEventListener("pointerup", resetButton);
            button.addEventListener("pointerleave", resetButton);
            button.addEventListener("pointercancel", resetButton);

        });

    }

    /*==============================================
      BACK TO TOP BUTTON
    ==============================================*/

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        let ticking = false;

        const updateScroll = () => {

            const showButton = window.scrollY > 300;

            backTop.style.opacity = showButton ? "1" : "0";
            backTop.style.pointerEvents = showButton ? "auto" : "none";
            backTop.style.transform = showButton
                ? "translateY(0)"
                : "translateY(15px)";

            ticking = false;

        };

        updateScroll();

        window.addEventListener("scroll", () => {

            if (!ticking) {

                window.requestAnimationFrame(updateScroll);
                ticking = true;

            }

        }, { passive: true });

    }

    /*==============================================
      CUPCAKE CAROUSEL
      Automatic 4 Second + Tap To Advance
    ==============================================*/

    document.querySelectorAll(".cupcake-carousel").forEach((carousel) => {

        const slides = carousel.querySelectorAll(".cupcake-slide");

        if (slides.length <= 1) return;

        let currentSlide = 0;
        let carouselTimer = null;

        function showNextSlide() {

            slides[currentSlide].classList.remove("active");

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("active");

        }

        function startCarousel() {

            if (prefersReducedMotion || carouselTimer !== null) return;

            carouselTimer = window.setInterval(showNextSlide, 4000);

        }

        function stopCarousel() {

            if (carouselTimer !== null) {

                window.clearInterval(carouselTimer);
                carouselTimer = null;

            }

        }

        /* Tap/click advances to next image */
        carousel.addEventListener("click", () => {

            showNextSlide();

            /* Restart the four-second timer after interaction */
            stopCarousel();
            startCarousel();

        });

        /* Pause automatic changes while the carousel is off-screen */
        if ("IntersectionObserver" in window) {

            const carouselObserver = new IntersectionObserver((entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        startCarousel();

                    } else {

                        stopCarousel();

                    }

                });

            });

            carouselObserver.observe(carousel);

        } else {

            startCarousel();

        }

    });

});
