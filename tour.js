//click effect for calendar arbaminch page
//arbaminch calendar
let insideIconArbaCal = document.querySelector("#inside-iconArbaCal");
insideIconArbaCal.onmouseenter = function() {
  insideIconArbaCal.innerHTML = "Jan.-Dec.";
};
insideIconArbaCal.onmouseleave = function() {
  insideIconArbaCal.innerHTML = "";
};
//time
let insideIconArbaTime = document.querySelector("#inside-iconArbaTime");
insideIconArbaTime.onmouseenter = function() {
  insideIconArbaTime.innerHTML = "15 days";
};
insideIconArbaTime.onmouseleave = function() {
  insideIconArbaTime.innerHTML = "";
};
//plane
let insideIconArbaPlane = document.querySelector("#inside-iconArbaPlane");
insideIconArbaPlane.onmouseenter = function() {
  insideIconArbaPlane.innerHTML = "from/to Addis";
};
insideIconArbaPlane.onmouseleave = function() {
  insideIconArbaPlane.innerHTML = "";
};
//Pin
let insideIconArbaPin = document.querySelector("#inside-iconArbaPin");
insideIconArbaPin.onmouseenter = function() {
  insideIconArbaPin.innerHTML = "Arbaminch";
};
insideIconArbaPin.onmouseleave = function() {
  insideIconArbaPin.innerHTML = "";
};

/* let insideIcon = document.querySelector("#inside-icon");
let carouselFrame = document.querySelector(".clickEffectCalendar");
let showUs = true;
insideIcon = addEventListener("click", function() {
  showUs = !showUs;
  if (!showUs) {
    carouselFrame.style.display = "block";
    carouselFrame.style.width = "50vw";
    carouselFrame.style.height = "40vh";
    carouselFrame.style.padding = "1% 3%";
    carouselFrame.style.position = "absolute";
    carouselFrame.style.marginLeft = "25%";
    carouselFrame.style.marginTop = "5%";
    carouselFrame.style.background = "rgba(23,53,63,.9)";
    carouselFrame.style.color = "white";
    carouselFrame.style.zIndex = "200";
  } else if (showUs) {
    carouselFrame.style.display = "none";
    /* document.location.reload();
  }
}); */

//click effect for time
let insideIconTime = document.querySelector("#inside-icon");
let carouselFrameTime = document.querySelector(".clickEffectTime");
let showUs1 = true;
insideIconTime = addEventListener("click", function() {
  showUs1 = !showUs1;
  if (!showUs1) {
    carouselFrameTime.style.display = "block";
    carouselFrameTime.style.width = "50vw";
    carouselFrameTime.style.height = "40vh";
    carouselFrameTime.style.padding = "1% 3%";
    carouselFrameTime.style.position = "absolute";
    carouselFrameTime.style.marginLeft = "25%";
    carouselFrameTime.style.marginTop = "5%";
    carouselFrameTime.style.background = "rgba(23,53,63,.9)";
    carouselFrameTime.style.color = "white";
    carouselFrameTime.style.zIndex = "200";
  } else if (showUs1) {
    carouselFrameTime.style.display = "none";
    /* document.location.reload(); */
  }
});
/* ertale page */
let insideIconErtale = document.querySelector("#inside-iconErtale");
insideIconErtale.onmouseenter = function() {
  insideIconErtale.innerHTML = "Jan - Dec";
};
insideIconErtale.onmouseleave = function() {
  insideIconErtale.innerHTML = "";
};
//time
let insideIconErTime = document.querySelector("#inside-iconErTime");
insideIconErTime.onmouseenter = function() {
  insideIconErTime.innerHTML = "12 days";
};
insideIconErTime.onmouseleave = function() {
  insideIconErTime.innerHTML = "";
};
//plane
let insideIconErPlane = document.querySelector("#inside-iconErPlane");
insideIconErPlane.onmouseenter = function() {
  insideIconErPlane.innerHTML = "from/to Addis";
};
insideIconErPlane.onmouseleave = function() {
  insideIconErPlane.innerHTML = "";
};
//map pin
let insideIconErPin = document.querySelector("#inside-iconErPin");
insideIconErPin.onmouseenter = function() {
  insideIconErPin.innerHTML = "Afar & Ertale";
};
insideIconErPin.onmouseleave = function() {
  insideIconErPin.innerHTML = "";
};
/* parcs page calendar*/
let insideIconParcCal = document.querySelector("#inside-iconParcCal");
insideIconParcCal.onmouseenter = function() {
  insideIconParcCal.innerHTML = "Nov-June";
};
insideIconParcCal.onmouseleave = function() {
  insideIconParcCal.innerHTML = "";
};
//time
let insideIconParcTime = document.querySelector("#inside-iconParcTime");
insideIconParcTime.onmouseenter = function() {
  insideIconParcTime.innerHTML = "18 days";
};
insideIconParcTime.onmouseleave = function() {
  insideIconParcTime.innerHTML = "";
};
//plane
let insideIconParcPlane = document.querySelector("#inside-iconParcPlane");
insideIconParcPlane.onmouseenter = function() {
  insideIconParcPlane.innerHTML = "from/to Addis";
};
insideIconParcPlane.onmouseleave = function() {
  insideIconParcPlane.innerHTML = "";
};

//place pin
let insideIconParcPin = document.querySelector("#inside-iconParcPin");
insideIconParcPin.onmouseenter = function() {
  insideIconParcPin.innerHTML = "awash, bale, nechsar parcs";
};
insideIconParcPin.onmouseleave = function() {
  insideIconParcPin.innerHTML = "";
};

/* simens page calendar*/
let insideIconMountCal = document.querySelector("#inside-iconMountCal");
insideIconMountCal.onmouseenter = function() {
  insideIconMountCal.innerHTML = "Dec-Mai";
};
insideIconMountCal.onmouseleave = function() {
  insideIconMountCal.innerHTML = "";
};
//time
let insideIconMountTime = document.querySelector("#inside-iconMountTime");
insideIconMountTime.onmouseenter = function() {
  insideIconMountTime.innerHTML = "10 days";
};
insideIconMountTime.onmouseleave = function() {
  insideIconMountTime.innerHTML = "";
};
//plane
let insideIconMountPlane = document.querySelector("#inside-iconMountPlane");
insideIconMountPlane.onmouseenter = function() {
  insideIconMountPlane.innerHTML = "from/to Addis";
};
insideIconMountPlane.onmouseleave = function() {
  insideIconMountPlane.innerHTML = "";
};

//place pin
let insideIconMountPin = document.querySelector("#inside-iconMountPin");
insideIconMountPin.onmouseenter = function() {
  insideIconMountPin.innerHTML = "Gondar, Simens";
};
insideIconMountPin.onmouseleave = function() {
  insideIconMountPin.innerHTML = "";
};

/* Tana page calendar*/
let insideIconTanaCal = document.querySelector("#inside-iconTanaCal");
insideIconTanaCal.onmouseenter = function() {
  insideIconTanaCal.innerHTML = "Jan.-Dec.";
};
insideIconTanaCal.onmouseleave = function() {
  insideIconTanaCal.innerHTML = "";
};
//time
let insideIconTanaTime = document.querySelector("#inside-iconTanaTime");
insideIconTanaTime.onmouseenter = function() {
  insideIconTanaTime.innerHTML = "7 days";
};
insideIconTanaTime.onmouseleave = function() {
  insideIconTanaTime.innerHTML = "";
};
//plane
let insideIconTanaPlane = document.querySelector("#inside-iconTanaPlane");
insideIconTanaPlane.onmouseenter = function() {
  insideIconTanaPlane.innerHTML = "from/to Addis";
};
insideIconTanaPlane.onmouseleave = function() {
  insideIconTanaPlane.innerHTML = "";
};

//place pin
let insideIconTanaPin = document.querySelector("#inside-iconTanaPin");
insideIconTanaPin.onmouseenter = function() {
  insideIconTanaPin.innerHTML = "Bahir-Dar, Tana";
};
insideIconTanaPin.onmouseleave = function() {
  insideIconTanaPin.innerHTML = "";
};
