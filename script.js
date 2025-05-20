

/* **************************** NAVBAR *************************************** */

const indicator = document.querySelector(".indicator");
const navUl = document.querySelector(".nav ul");
const list = document.querySelectorAll(".nav ul li");

const navHeight = navUl.offsetHeight;
const indicatorHeight = indicator.offsetHeight;
const maxTop = navHeight - indicatorHeight;

let lastScrollY = window.scrollY;
let ticking = false;

function updateIndicator() {
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const scrollRatio = lastScrollY / pageHeight;
  const indicatorTop = scrollRatio * maxTop;
  indicator.style.top = `${indicatorTop}px`;

  // En yakın li öğesini bul ve ona "active" class'ı ver
  let closestLi = list[0];
  let minDistance = Math.abs(indicatorTop - closestLi.getBoundingClientRect().top + navUl.getBoundingClientRect().top);

  list.forEach(li => {
    const liTop = li.getBoundingClientRect().top - navUl.getBoundingClientRect().top;
    const distance = Math.abs(indicatorTop - liTop);
    if (distance < minDistance) {
      minDistance = distance;
      closestLi = li;
    }
  });

  list.forEach(li => li.classList.remove("active"));
  closestLi.classList.add("active");

  ticking = false;
}

window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(updateIndicator);
    ticking = true;
  }
});

updateIndicator();


/* **************************** NAVBAR *************************************** */


/* ****************************** ANA SAYFA ************************************ */
 particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: { enable: false },
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.6,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });



  document.addEventListener("DOMContentLoaded", () => {
  if (typeof Typed !== "undefined") {
    new Typed(".typed-text", {
      strings: ["Web Geliştiriciyim.", "UI Tasarımcıyım.", "Frontend Uzmanıyım."],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }
});




/* ****************************** ANA SAYFA SON ******************************** */


/* ****************************** HAKKIMDA SON ******************************** */


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.5 });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach(el => observer.observe(el));
});




/* ****************************** HAKKIMDA SON ******************************** */



/* ****************************** YETENEKLER ******************************** */

document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.style.getPropertyValue("--level");
        entry.target.style.width = level;
      }
    });
  }, { threshold: 0.5 });

  skillCards.forEach(el => observer.observe(el));
});




/* ****************************** YETENEKLER SON ******************************** */


/* ****************************** PROJELER ******************************** */


document.addEventListener("DOMContentLoaded", () => {
  const projectBoxes = document.querySelectorAll(".project-box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.5 });

  projectBoxes.forEach(el => observer.observe(el));
});




/* ****************************** PROJELER SON ******************************** */

/* ****************************** İLETİŞİM ******************************** */

// İletişim kutusu görünce animasyon
document.addEventListener("DOMContentLoaded", () => {
  const contactBox = document.querySelector(".contact-container");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactBox.classList.add("show");
      }
    });
  }, { threshold: 0.4 });

  observer.observe(contactBox);
});




/* ****************************** İLETİŞİM SON ******************************** */





