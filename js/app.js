// This Will Be The Section Number
let sectionNumber = 0;
// A function That Create New Section
const createSection = () => {
  // Section Number Will Increment By One After Creating The New Section
  sectionNumber++;
  // This Will Be The New Section Html Structure
  const sectionHtmlContent = `
  <section id="section${sectionNumber}" data-nav="Section ${sectionNumber}">
    <div class="landing__container">
      <h2>Section ${sectionNumber}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        fermentum metus faucibus lectus pharetra dapibus. Suspendisse
        potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
        lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
        convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
        eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
        nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
        lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
        tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
        vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.
      </p>
      <a href="#" class="read-more">Read More</a>
    </div>
  </section>
  `;
  // Getting The Main Element By His Is Id
  // Then Adding The New Section Before Main End Tag
  document
    .getElementById("main")
    .insertAdjacentHTML("beforeend", sectionHtmlContent);
};
// Get The Nav Tag By His Id
const navgationBar = document.getElementById("navbar__list");
// A Function That Create List Of Nav Items === To The Section Number
const createNavItems = () => {
  // Removing All The Items To Avoid The Duplicating
  navgationBar.innerHTML = "";
  // Adding A List Item With Every //// Single Section By For Each Loop
  document.querySelectorAll("section").forEach((landingsection) => {
    const navgationItem = `
    <li>
      <a href="#${landingsection.id}" data-nav="${landingsection.id}" class="menu__link">
        ${landingsection.dataset.nav}
      </a>
    </li>
    `;
    // Adding The New List Item Before UL End Tag
    navgationBar.insertAdjacentHTML("beforeend", navgationItem);
  });
};
// A function That Specify Which Section On The Viewport And Its Link
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (landingsection) {
    let activeLink = navgationBar.querySelector(
      `[data-nav=${landingsection.id}]`
    );
    const activeLinkClass = "active-link";
    const activeSectionClass = "active-section";
    if (
      landingsection.getBoundingClientRect().top >= -400 &&
      landingsection.getBoundingClientRect().top <= 150
    ) {
      landingsection.classList.add(activeSectionClass);
      activeLink.classList.add(activeLinkClass);
    } else {
      landingsection.classList.remove(activeSectionClass);
      activeLink.classList.remove(activeLinkClass);
    }
  });
};
// A function That Move To The On Screen Section
navgationBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    // Move To The Secion Smoothly
    // I Can Make It With Css But I'd Like Use What I Have Lreaned
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 250);
  }
});
// Making A Button To Use Create Sections And List Items
// Getting The Button By His Id
document.getElementById("add-section").addEventListener("click", () => {
  createSection();
  createNavItems();
});
// Getting The To Top Button By His Id
const toTop = document.getElementById("to-top");
// Getting The Header By His Id
const header = document.getElementById("header");
// Clicking on the icon the document will scroll to the top smoothly
toTop.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});
// Appearing The To Top Button
let isScrolling;
document.onscroll = () => {
  if (window.scrollY > 750) {
    toTop.style.opacity = 1;
  } else {
    toTop.style.opacity = 0;
  }
};
// Starting With Four Sections And There List Items [Links]
for (let i = 1; i < 5; i++) {
  createSection();
  createNavItems();
}
