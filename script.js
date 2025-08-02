


/* СКРОЛЛ ОТ HERO К FOOTER */

document.querySelector('.scroll-down-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('footer').scrollIntoView({
        behavior: 'smooth'
    });
});

/* карусель hero */

document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const titleWrappers = document.querySelectorAll('.hero-title-wrapper');

    let currentIndex = 0;
    titleWrappers[currentIndex].classList.add('active');

    leftArrow.addEventListener('click', function() {
        titleWrappers[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + titleWrappers.length) % titleWrappers.length;
        titleWrappers[currentIndex].classList.add('active');
    });

    rightArrow.addEventListener('click', function() {
        titleWrappers[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % titleWrappers.length;
        titleWrappers[currentIndex].classList.add('active');
    });
});



/* слайдер секция who we are */

document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.info-designer-slider-circle');
    const wrappers = document.querySelectorAll('.info-designer-wrapper');

    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const index = parseInt(circle.getAttribute('data-index'));

            // Убираем активный класс у всех кругов
            circles.forEach(c => {
                c.classList.remove('active');
            });

            // Добавляем активный класс только к выбранному кругу
            circle.classList.add('active');

            // Убираем активный класс у всех оберток
            wrappers.forEach(wrapper => {
                wrapper.classList.remove('active');
            });

            // Добавляем активный класс только к нужной обертке
            wrappers[index - 1].classList.add('active');
        });
    });
});




/* заглушка на ютуб видео */

function loadVideo() {
    const container = document.querySelector('.video-youtube');
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/u3ybWiEUaUU?autoplay=1";
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    /* iframe.style.height = '100%'; */
    iframe.style.height = '304px';

    container.innerHTML = '';
    container.appendChild(iframe);
}


/* АНИМАЦИЯ ПАДИНГА СЕКЦИИ ФУТЕР ПРИ ВЫПАДАНИИ КАРТЫ */

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('dropdown');
    const footerBgWrapper = document.querySelector('.footer-bg-wrapper');

    dropdown.addEventListener('change', function() {
        if (dropdown.checked) {
            footerBgWrapper.classList.add('expanded');
        } else {
            footerBgWrapper.classList.remove('expanded');
        }
    });
});



/* WORK SECTION CAROUSEL */

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}



/* NAVIGATION SECTION HAMBURGER */


document.getElementById("hamburger").addEventListener("click", function () {
    this.classList.toggle("change");
    let navigationHeader = document.querySelector(".navigation-header");
    navigationHeader.classList.toggle("active");
});





/* SCROLL UP BTN */

const scrollBtn = document.getElementById("scrollUp");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
});



/* Clean link without # */

document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.dataset.target;
      const section = document.getElementById(targetId);
  
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
  
        // Убираем # из URL
        history.pushState(null, '', window.location.pathname);
      }
    });
});