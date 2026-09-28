/* =====================================
   CURSOR
===================================== */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");


document.addEventListener("mousemove", (e) => {

    if (cursor) {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    }

    if (cursorDot) {

        cursorDot.style.left = e.clientX + "px";

        cursorDot.style.top = e.clientY + "px";

    }

});


/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.querySelector(".loader");

        if (loader) {

            loader.style.display = "none";

        }

    }, 1800);

});


/* =====================================
   NAVBAR
===================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================
   MOBILE MENU
===================================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


document.querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =====================================
   COUNTERS
===================================== */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting)
                    return;


                const counter =
                    entry.target;


                const target =
                    Number(
                        counter.dataset.target
                    );


                let current = 0;


                const speed =
                    target / 60;


                function updateCounter() {

                    current += speed;


                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }


                updateCounter();


                counterObserver.unobserve(
                    counter
                );

            });

        },

        {
            threshold: .7
        }

    );


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* =====================================
   HERO PARALLAX
===================================== */

const heroVisual =
    document.querySelector(".hero-visual");


document.addEventListener("mousemove", (e) => {

    if (!heroVisual)
        return;


    const x =
        (window.innerWidth / 2 - e.clientX) / 60;


    const y =
        (window.innerHeight / 2 - e.clientY) / 60;


    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =====================================
   STRATEGY CARD 3D TILT
===================================== */

const cards =
    document.querySelectorAll(".strategy-card");


cards.forEach((card) => {


    card.addEventListener("mousemove", (e) => {


        const rect =
            card.getBoundingClientRect();


        const x =
            e.clientX - rect.left;


        const y =
            e.clientY - rect.top;


        const centerX =
            rect.width / 2;


        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -5;


        const rotateY =
            ((x - centerX) / centerX) * 5;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================
   NEWSLETTER
===================================== */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


if (newsletterForm) {


    newsletterForm.addEventListener(
        "submit",
        (e) => {


            e.preventDefault();


            const email =
                newsletterForm.querySelector(
                    "input"
                ).value;


            alert(
                "Thank you! " +
                email +
                " has been added to FreshBite newsletter. 🌱"
            );


            newsletterForm.reset();

        }

    );

}


/* =====================================
   CONTACT
===================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {


    contactForm.addEventListener(
        "submit",
        (e) => {


            e.preventDefault();


            alert(
                "Thank you! Your message has been received. 🚀"
            );


            contactForm.reset();

        }

    );

}


/* =====================================
   SMOOTH CARD GLOW
===================================== */

document
    .querySelectorAll(
        ".social-box, .metric"
    )
    .forEach((element) => {


        element.addEventListener(
            "mousemove",
            (e) => {


                const rect =
                    element.getBoundingClientRect();


                const x =
                    e.clientX - rect.left;


                const y =
                    e.clientY - rect.top;


                element.style.background =
                    `radial-gradient(
                        300px circle at
                        ${x}px ${y}px,
                        rgba(183,243,106,.09),
                        rgba(255,255,255,.025)
                    )`;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.background = "";

            }
        );

    });