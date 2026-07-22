/*==================================================
 Bounce Boss Website v7.1
 Galaxy Edition
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
      SMART MOBILE NAVIGATION
    ==============================================*/

    const nav = document.querySelector(".nav");
    const links = [...document.querySelectorAll(".nav a")];
    const active = document.querySelector(".nav .active");

    if (nav && active) {

        const index = links.indexOf(active);

        // Home always starts at the far left
        if (index === 0) {

            nav.scrollTo({
                left: 0,
                behavior: "smooth"
            });

        }

        else {

            let target =
                active.offsetLeft -
                nav.clientWidth / 3;

            // Leave about 30% of the NEXT button visible
            const next = links[index + 1];

            if (next) {

                target =
                    next.offsetLeft +
                    (next.offsetWidth * .30) -
                    nav.clientWidth;

            }

            const maxScroll =
                nav.scrollWidth - nav.clientWidth;

            target = Math.max(
                0,
                Math.min(target, maxScroll)
            );

            nav.scrollTo({

                left: target,
                behavior: "smooth"

            });

        }

    }

    /*==============================================
      SCROLL REVEAL
    ==============================================*/

    const revealItems =
        document.querySelectorAll(
            ".container, .section, .cta"
        );

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: .12,
            rootMargin: "0px 0px -40px 0px"

        });

    revealItems.forEach((item) => {

        item.classList.add("reveal");
        observer.observe(item);

    });

    /*==============================================
      BUTTON PRESS EFFECT
    ==============================================*/

    document
        .querySelectorAll(".btn, .book-now")
        .forEach((button) => {

            const reset = () =>
                button.style.transform = "";

            button.addEventListener(
                "pointerdown",
                () => button.style.transform = "scale(.97)"
            );

            button.addEventListener(
                "pointerup",
                reset
            );

            button.addEventListener(
                "pointerleave",
                reset
            );

            button.addEventListener(
                "pointercancel",
                reset
            );

        });

    /*==============================================
      BACK TO TOP BUTTON
    ==============================================*/

    const backTop =
        document.querySelector(".back-top");

    if (backTop) {

        const update = () => {

            if (window.scrollY > 300) {

                backTop.style.opacity = "1";
                backTop.style.pointerEvents = "auto";
                backTop.style.transform =
                    "translateY(0)";

            } else {

                backTop.style.opacity = "0";
                backTop.style.pointerEvents = "none";
                backTop.style.transform =
                    "translateY(15px)";

            }

        };

        update();

        window.addEventListener("scroll", () => {

            requestAnimationFrame(update);

        });

    }

});
