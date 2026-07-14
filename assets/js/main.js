AOS.init();

new Typed("#typing", {

    strings: [
        "System & Database Operations Engineer",
        "Automation Engineer",
        "Database Specialist",
        "Network Operations"
    ],

    typeSpeed: 60,
    backSpeed: 40,
    loop: true

});

const counters = document.querySelectorAll('.counter');

const speed = 200;

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const inc = target / speed;

            const update = () => {

                count += inc;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            }

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));