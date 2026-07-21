/*==================================================
 Bounce Boss Website v5.0
 Performance Edition
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
      CENTER ACTIVE NAVIGATION
    ==============================================*/

    const nav = document.querySelector(".nav");
    const active = document.querySelector(".nav .active");

    if (nav && active) {

        const scrollPosition =
            active.offsetLeft -
            (nav.offsetWidth / 2) +
            (active.offsetWidth / 2);

        nav.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });

    }

    /*==============================================
      SCROLL REVEAL
    ==============================================*/

    const revealItems = document.querySelectorAll(
        ".container, .section, .cta"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold:0.12,
        rootMargin:"0px 0px -40px 0px"

    });

    revealItems.forEach((item) => {

        item.classList.add("reveal");
        observer.observe(item);

    });

    /*==============================================
      BUTTON PRESS EFFECT
    ==============================================*/

    document.querySelectorAll(".btn, .book-now").forEach((button) => {

        button.addEventListener("pointerdown", () => {

            button.style.transform = "scale(.97)";

        });

        button.addEventListener("pointerup", () => {

            button.style.transform = "";

        });

        button.addEventListener("pointerleave", () => {

            button.style.transform = "";

        });

    });

    /*==============================================
      BACK TO TOP BUTTON
    ==============================================*/

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        backTop.style.opacity = "0";
        backTop.style.pointerEvents = "none";
        backTop.style.transform = "translateY(15px)";

        let ticking = false;

        const updateScroll = () => {

            if (window.scrollY > 300) {

                backTop.style.opacity = "1";
                backTop.style.pointerEvents = "auto";
                backTop.style.transform = "translateY(0)";

            } else {

                backTop.style.opacity = "0";
                backTop.style.pointerEvents = "none";
                backTop.style.transform = "translateY(15px)";

            }

            ticking = false;

        };

        window.addEventListener("scroll", () => {

            if (!ticking) {

                window.requestAnimationFrame(updateScroll);
                ticking = true;

            }

        });

    }

});
