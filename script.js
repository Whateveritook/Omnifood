///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
console.log("hello world");
const currentYear = new Date().getFullYear();
document.querySelector(".year").textContent = currentYear;
const navbarEL = document.querySelector(".header");
const menuEL = document.querySelector(".icon-mobile-nav");
const closeEL = document.querySelector(".close");
menuEL.addEventListener("click", function () {
  navbarEL.classList.add("nav-open");
});
closeEL.addEventListener("click", function () {
  navbarEL.classList.remove("nav-open");
});
const allLinks = document.querySelectorAll("a");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    // preventing default behavior of event.
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      navbarEL.classList.toggle("nav-open");
  });
});

// sticky navigation
const sectionHeroEL = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // to see in viewport
    root: null,
    // trigger event when 0% of the hero section is inside the viewport
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEL);

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);
  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
//  https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
