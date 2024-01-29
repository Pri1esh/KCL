const headerMain = document.getElementById("header-main");
const headerMainMobile = document.getElementById("header-main-mobile");
const logoColor = document.getElementById("logo-color");
const logoColorMobile = document.getElementById("logo-color-mobile");
const subNavigation = document.getElementById("sub-navigation");
const subNavigationMobile = document.getElementById("sub-navigation-mobile");
const mainElement = document.querySelector("main");
const mobileButtonClickOpen = document.getElementById(
  "mobile-click-sub-menu-open"
);
const mobileButtonClickClose = document.getElementById(
  "mobile-click-sub-menu-close"
);

//Append menu items
const header_menu = {
  AboutUs: {
    name: "About",
    desc: "Our mining operations in Liberia to create smarter steels for people and planet.",
    link: "/about/",
    items: [
      {
        item_name: "ArcelorMittal Liberia Leadership Team",
        item_link: "/leadershipteam/leadershipteam.html",
      },
      {
        item_name: "Phase II Expansion Projects",
        item_link: "/phase2/phase2.html",
      },
    ],
  },

  Mining: {
    name: "Mining",
    desc: "Our mining operations in Liberia to create smarter steels for people and planet.",
    link: "/mining/",
    items: [
      {
        item_name: " Rails & Ports",
        item_link: "/mining/our-purpose/",
      },
      {
        item_name: " Rail",
        item_link: "/mining/our-purpose/",
      },
      {
        item_name: " Mining",
        item_link: "/mining/our-purpose/",
      },
      {
        item_name: " Iron Ore",
        item_link: "/mining/our-purpose/",
      },
      {
        item_name: " Supply Chain",
        item_link: "/mining/our-purpose/",
      },
    ],
  },
  Phase2: {
    name: "Phase II Expansion Projects",
    desc: "Our mining operations in Liberia to create smarter steels for people and planet.",
    link: "/phase/",
    items: [
      {
        item_name: "Workplace",
        item_link: "/workplace/workplace.html",
      },
      {
        item_name: "Ethics & Governance",
        item_link: "/ethicsandgovernence/ethicsandgovernence.html",
      },
    ],
  },
  Sustainability: {
    name: "Sustainability",
    desc: "Our mining operations in Liberia to create smarter steels for people and planet.",
    link: "/sustainability/",
    items: [
      {
        item_name: "Communities",
        item_link: "/communities/communities.html",
      },
      {
        item_name: "Environments",
        item_link: "/environment/environment.html",
      },
      {
        item_name: "Sustainability",
        item_link: "/sustainability/sustainability.html",
      },
      
    ],
  },
  Career: {
    name: "Career",
    desc: "Our mining operations in Liberia to create smarter steels for people and planet.",
    link: "/career/",
    items: [
      {
        item_name: "Why Arcelor Mittal",
        item_link: "/career/careerpage.html",
      },
      {
        item_name: "Job Opportunity",
        item_link: "/about/our-purpose/",
      },
      {
        item_name: "Scholar Ship",
        item_link: "/about/our-purpose/",
      },
      {
        item_name: "Diversity and Inclusion",
        item_link: "/about/our-purpose/",
      },
      {
        item_name: "Local Content",
        item_link: "/about/our-purpose/",
      },
    ],
  },
  Media: {
    name: "Media",
    desc: "Our mining operations in Liberia to create smarter steels for people and planet.",
    link: "/media/",
    items: [
      {
        item_name: "Diversity and Inclusion",
        item_link: "/diversityandinclusion/diversityandinclusion.html"
      },
      {
        item_name: "Press Release",
        item_link: "/pressrelease/pressrelease.html",
      },
      {
        item_name: "News",
        item_link: "/medianews/medianews.html",
      },
    ],
  },
  ContactUs: {
    name: "Contact Us",
    desc: "Our mining operations in Liberia to create smarter steels for people and planet.",
    link: "/contact/",
    items: [
      {
        item_name: "Contact Us",
        item_link: "/about/our-purpose/",
      },
    ],
  },
};

// headerMain.classList.add(
//   "site-header-desktop--visible",
//   "site-header-desktop--animations"
// );

logoColor.classList.add("logo--white");
logoColorMobile.classList.add("logo--white");

subNavigation.style.display = "none";
subNavigationMobile.style.display = "none";
mobileButtonClickClose.style.display = "none";

// headerMain.addEventListener("mouseover", () => {
//   headerMain.classList.remove(
//     "site-header-desktop--visible",
//     "site-header-desktop--animations"
//   );

//   logoColor.classList.remove("logo--white");

//   headerMain.classList.add(
//     "site-header-desktop--light",
//     "site-header-desktop--visible",
//     "site-header-desktop--animations"
//   );

//   logoColor.classList.add("logo--color");

//   subNavigation.style.display = "block";
// });

const nav_bar = document.querySelector(".navigation-desktop");

var nav_items = nav_bar.querySelectorAll(".navigation-desktop__list-item");
nav_items.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    headerMain.classList.remove(
      "site-header-desktop--visible",
      "site-header-desktop--animations"
    );
    logoColor.classList.remove("logo--white");
    headerMain.classList.add(
      "site-header-desktop--light",
      "site-header-desktop--visible",
      "site-header-desktop--animations"
    );

    logoColor.classList.add("logo--color");
    nav_bar
      .querySelectorAll(".navigation-desktop__list-item-anchor")
      .forEach(function (element) {
        element.style.color = "black";
      });
    element.querySelector(".navigation-desktop__list-item-anchor").style.color =
      "#ff3700";
    subNavigation.style.display = "block";

    var item_id = this.getAttribute("id");

    document.getElementById("menu_name").innerHTML = header_menu[item_id].name;
    document.getElementById("menu_desc").innerHTML = header_menu[item_id].desc;
    document.getElementById("menu_goto").innerHTML =
      "Go to " + header_menu[item_id].name + " page";
    document
      .getElementById("menu_goto")
      .setAttribute("href", header_menu[item_id].link);
    var submenus = "";

    header_menu[item_id].items.forEach((list_item) => {
      console.log(list_item);
      submenus =
        submenus +
        `<li class="animate-in mega-panel__list-item" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0.1px); opacity: 1">
        <a href="${list_item.item_link}" class="mega-panel__list-item-anchor">
          ${list_item.item_name}
        </a>
      </li>`;
    });
    document.getElementById("menu_items").innerHTML = submenus;
  });
});

// ON MOUSE OUT
subNavigation.addEventListener("mouseleave", () => {
  headerMain.classList.remove(
    "site-header-desktop--light",
    "site-header-desktop--visible",
    "site-header-desktop--animations"
  );
  logoColor.classList.remove("logo--color");
  nav_bar
    .querySelectorAll(".navigation-desktop__list-item-anchor")
    .forEach(function (element) {
      element.style.color = "white";
    });
  headerMain.classList.add(
    "site-header-desktop--visible",
    "site-header-desktop--animations"
  );
  logoColor.classList.add("logo--white");
  subNavigation.style.display = "none";

  console.log($("#header-main").css.backgroundColor);
});

//mobile

mobileButtonClickOpen.addEventListener("click", () => {
  mobileButtonClickOpen.style.display = "none";
  mobileButtonClickClose.style.display = "block";
  logoColorMobile.classList.remove("logo--white");
  logoColorMobile.classList.add("logo--color");

  subNavigationMobile.style.display = "block";

  subNavigationMobile.classList.add("navigation-container--active");
  headerMainMobile.classList.add("site-header-mobile--light");
});

mobileButtonClickClose.addEventListener("click", () => {
  mobileButtonClickOpen.style.display = "block";
  mobileButtonClickClose.style.display = "none";

  subNavigationMobile.style.display = "none";

  logoColorMobile.classList.remove("logo--color");
  logoColorMobile.classList.add("logo--white");

  subNavigationMobile.classList.remove("navigation-container--active");
  headerMainMobile.classList.remove("site-header-mobile--light");
});

var mobile_menus = "";
for (const key in header_menu) {
  console.warn(header_menu[key].name);
  mobile_sub_menus = "";
  header_menu[key].items.forEach((element) => {
    mobile_sub_menus =
      mobile_sub_menus +
      `<li class="navigation__list-item">
      <a href="${element.item_link}" title="${element.item_name}" class="navigation__anchor">
      ${element.item_name}
      </a>
    </li>`;
  });

  mobile_menus =
    mobile_menus +
    `<li class="navigation__list-item mobile_list_item">
  <a href="#" title="${header_menu[key].name}" class="navigation__anchor"> ${header_menu[key].name} </a>
    <ul data-page="1" class="navigation__list">
      <li class="navigation__list-item--back">
        <a href="#" class="navigation__anchor"><span>Back</span></a>
      </li>
      <li class="navigation__list-item-title">
        <p class="navigation__title">About</p>
        <a href="${header_menu[key].link}" class="navigation__anchor">Go to ${header_menu[key].name} page</a>
      </li>
      ${mobile_sub_menus}
    </ul>
  </li>`;
}

document.getElementById("mobile_menu_list").innerHTML = mobile_menus;

//Mobile Menu
var mobile_menu_list = document.getElementById("mobile_menu_list");
var mobile_menu_items = document.querySelectorAll(".mobile_list_item");
mobile_menu_items.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(8888);
    element
      .querySelector(".navigation__list")
      .classList.add("navigation__list--active");
    document.getElementById("mobile_nav").setAttribute("data-menu-page", "1");
  });

  element
    .querySelector(".navigation__list-item--back")
    .addEventListener("click", () => {
      document.getElementById("mobile_nav").setAttribute("data-menu-page", "0");
      element
        .querySelector(".navigation__list")
        .classList.remove("navigation__list--active");
      event.stopPropagation();
    });
});

//
var lastScrollTop = 0;
$(window).on("scroll", function () {
  let scrollAmount = window.scrollY;
  if (scrollAmount == 0) {
    headerMain.classList.remove(
      "site-header-desktop--light",
      "site-header-desktop--visible",
      "site-header-desktop--animations"
    );
    logoColor.classList.remove("logo--color");
    headerMain.classList.add(
      "site-header-desktop--visible",
      "site-header-desktop--animations"
    );
    logoColor.classList.add("logo--white");

    logoColorMobile.classList.remove("logo--color");
    logoColorMobile.classList.add("logo--white");

    headerMainMobile.classList.remove("site-header-mobile--light");
    $(".navigation-desktop__list-item-anchor").css("color", "white");
    $(".site-header-desktop").css("border-bottom", "none");
    $(".site-header-mobile").css("border-bottom", "none");


  } else {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $(".site-header-desktop").css("border-bottom", "solid 2px #ff3700");
      $(".site-header-mobile").css("border-bottom", "solid 2px #ff3700");
      headerMain.classList.remove(
        "site-header-desktop--visible",
        "site-header-desktop--animations"
      );
      logoColor.classList.remove("logo--white");
      headerMain.classList.add(
        "site-header-desktop--light",
        "site-header-desktop--visible",
        "site-header-desktop--animations"
      );
  
      logoColor.classList.add("logo--color");
  
      logoColorMobile.classList.remove("logo--white");
      logoColorMobile.classList.add("logo--color");
      headerMainMobile.classList.add("site-header-mobile--light");
      $(".navigation-desktop__list-item-anchor").css("color", "black");
  
      $("#header-main").addClass("goup");
  
      setTimeout(() => {
        $("#header-main").removeClass("goup");
      }, 1500);
    }
    lastScrollTop = st;
    
  }
});
