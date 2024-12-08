// Select the header
const header = document.getElementById('mainHeader');

// Function to add/remove class based on scroll position
window.onscroll = function () {
    if (window.scrollY > 50) { // Adjust the value (50) based on when you want to trigger the class change
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Get the ball cursor element
const ball = document.getElementById('ballCursor');

// Track mouse movement and update ball position
document.addEventListener('mousemove', (e) => {
    ball.style.left = `${e.pageX}px`;
    ball.style.top = `${e.pageY}px`;
});

// Preloader Area
window.onload = function () {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('preloader-deactivate');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 900);
};

// responsve toggle
function myFunction() {
    var x = document.getElementById("responsive_toggle_button");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// ======================
//      brand_logo
// ======================

$(document).ready(function () {
    $("#brand_logo").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
});


// ======================
//      count
// ======================
function animateCountUp(element) {
    const target = +element.getAttribute('data-target');
    const speed = 200;
    const updateCount = () => {
        const current = +element.innerText;
        const increment = target / speed;
        if (current < target) {
            element.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 10);
        } else {
            element.innerText = target;
        }
    };
    updateCount();
}

const statsSection = document.querySelector('#stats-section');
const counters = document.querySelectorAll('.stat-number');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => animateCountUp(counter));
            observer.disconnect();
        }
    });
}, {
    threshold: 0.5
});

observer.observe(statsSection);


window.onload = function () {
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    });
    modal.show();

    setTimeout(function () {
        modal.hide();
    }, 10000);
}

// ======================
//      scroll To
// ======================
// Show or hide the button based on scroll position
window.onscroll = function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Smooth scroll to the top with a slow effect
function scrollToTop() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 10);
    }
}
