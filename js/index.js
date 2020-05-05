const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// ## Task 1: Create selectors to point your data into elements

// *  Create selectors by using any of the DOM element's methods

// *  Note that IDs have been used on all images.  Use the IDs to update src path content

// document.getElementById("logo-img").src = "img/logo.png";
document.getElementById("cta-img").src = siteContent.cta["img-src"];
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];


// Selectors 
const headers = document.querySelectorAll("h4");
const text = document.querySelectorAll("p");
const anchor = document.querySelectorAll("nav a");

// ## Task 2: Update the HTML with the JSON data

// * Remember, NO direct updating of the HTML source is allowed.
// * Using your selectors, update the content to match the example file.
// * Remember to update the src attributes on images

// Nav
anchor[0].textContent = siteContent.nav["nav-item-1"];
anchor[1].textContent = siteContent.nav["nav-item-2"];
anchor[2].textContent = siteContent.nav["nav-item-3"];
anchor[3].textContent = siteContent.nav["nav-item-4"];
anchor[4].textContent = siteContent.nav["nav-item-5"];
anchor[5].textContent = siteContent.nav["nav-item-6"];

// CTA Section

document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector("button").textContent = siteContent.cta.button;

// Main Content Section

// Top
headers[0].textContent = siteContent["main-content"]["features-h4"];
text[0].textContent = siteContent["main-content"]["features-content"];
headers[1].textContent = siteContent["main-content"]["about-h4"];
text[1].textContent = siteContent["main-content"]["about-content"];
// Bottom
headers[2].textContent = siteContent["main-content"]["services-h4"];
text[2].textContent = siteContent["main-content"]["services-content"];
headers[3].textContent = siteContent["main-content"]["product-h4"];
text[3].textContent = siteContent["main-content"]["product-content"];
headers[4].textContent = siteContent["main-content"]["vision-h4"];
text[4].textContent = siteContent["main-content"]["vision-content"];

// Contact

headers[5].textContent = siteContent.contact["contact-h4"];
text[5].textContent = siteContent.contact.address;
text[6].textContent = siteContent.contact.phone;
text[7].textContent = siteContent.contact.email;

// Footer

text[8].textContent = siteContent.footer.copyright;

// ## Task 3: Add new content

// * Change the color of the navigation text to be green.
// * Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * Check your work by looking at the [original html](original.html) in the browser

// Color
anchor.forEach((links => {
  links.style.color = "green";
}));

// New Links
const link1 = {
  href: "#",
  textContent: "Light Side",
};

const link2 = {
  href: "#",
  textContent: "Dark Side",
}

const linkRebel = document.createElement('a');
const linkEmpire = document.createElement('a');

linkRebel.href = link1.href;
linkEmpire.href = link2.href;
linkRebel.textContent = link1.textContent;
linkEmpire.textContent = link2.textContent;
linkRebel.classList.add = "lightMode";
linkEmpire.classList.add = "darkMode"

document.querySelector("nav").prepend(linkRebel);
document.querySelector("nav").appendChild(linkEmpire);

// ********** //

// ## Stretch Goals

// * Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
// * Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// Two Stretch Goals in one :D

const toggle = document.querySelectorAll('button')[1];
toggle.textContent = "Dark Mode";

toggle.addEventListener("click", () => {
  if (document.querySelector('body').style.backgroundColor === "white"){  
    document.querySelector("body").style.backgroundColor = "#454a55";
    document.querySelector("body").style.color = "white";
    toggle.textContent = "Light Mode";
  } else {
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.color = "black";
      toggle.textContent = "Dark Mode";
  }
})

// const darkLink = document.getElementsByClassName("darkMode");
// const lightLink = document.getElementsByClassName("lightMode");
