/*==================================================
 Bounce Boss Website v4.0
 Aurora Edition
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

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    document
        .querySelectorAll(".container, .section, .cta")
        .forEach((element) => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    /*==============================================
      BACK TO TOP BUTTON
    ==============================================*/

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        backTop.style.opacity = "0";
        backTop.style.pointerEvents = "none";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                backTop.style.opacity = "1";
                backTop.style.pointerEvents = "auto";
                backTop.style.transform = "translateY(0)";

            } else {

                backTop.style.opacity = "0";
                backTop.style.pointerEvents = "none";
                backTop.style.transform = "translateY(15px)";

            }

        });

    }

    /*==============================================
      BUTTON CLICK EFFECT
    ==============================================*/

    document.querySelectorAll(".btn, .book-now").forEach((button) => {

        button.addEventListener("mousedown", () => {

            button.style.transform = "scale(.97)";

        });

        button.addEventListener("mouseup", () => {

            button.style.transform = "";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    /*==============================================
      PARALLAX AURORA
    ==============================================*/

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        document.body.style.backgroundPosition =
            `center ${scroll * 0.08}px`;

    });

});
