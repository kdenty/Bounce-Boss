/*==================================================
 Bounce Boss Website v6.4
 Galaxy Edition
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    
/*==============================================
  SMART MOBILE NAVIGATION
==============================================*/

const nav = document.querySelector(".nav");
const active = document.querySelector(".nav .active");

if (nav && active) {

    const navRect = nav.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();

    const fullyVisible =
        activeRect.left >= navRect.left &&
        activeRect.right <= navRect.right;

    // If the active page is already visible,
    // don't move the navigation at all.
    if (!fullyVisible) {

        active.scrollIntoView({

            behavior: "auto",
            inline: "center",
            block: "nearest"

        });

    }

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

        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"

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

        const resetButton = () => {

            button.style.transform = "";

        };

        button.addEventListener("pointerup", resetButton);
        button.addEventListener("pointerleave", resetButton);
        button.addEventListener("pointercancel", resetButton);

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

        updateScroll();

        window.addEventListener("scroll", () => {

            if (!ticking) {

                window.requestAnimationFrame(updateScroll);
                ticking = true;

            }

        });

    }

});
