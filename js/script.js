const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//costruisco il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

let bigImageInnerContainerEl = document.querySelector(".__big-image-container");
//console.log(containerInnerEl);
let arrowUpEl = document.querySelector(".__arrow-up");
console.log(arrowUpEl);
let arrowDownEl = document.querySelector(".__arrow-down");
console.log(arrowDownEl);

// ora devo creare la function che genera le thumbnails

function generateThumbnails(arr, elementReceivingAppend) {
  arr.forEach(function (el, index) {
    let thumbImgDivEl = document.createElement("div");
    thumbImgDivEl.style.height = `calc(100% / ${arr.length}`;
    thumbImgDivEl.classList.add("__thumb-div");
    elementReceivingAppend.append(thumbImgDivEl);

    let carosImage = document.createElement("img");
    carosImage.classList.add("__thumb-img");
    carosImage.style.objectFit = "";
    carosImage.style.height = "100%";
    carosImage.style.width = "100%";

    thumbImgDivEl.append(carosImage);
    carosImage.setAttribute("src", `img/0${index + 1}.webp`);
  });
}

//  rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
function addBigImage(arr, elementReceivingAppend) {
  let carosImageEl = document.createElement("img");
  carosImageEl.style.objectFit = "";
  carosImageEl.style.height = "100%";
  carosImageEl.style.width = "100%";
  carosImageEl.classList.add("__img-big-carosel");

  carosImageEl.setAttribute("src", `img/01.webp`);
  elementReceivingAppend.append(carosImageEl);

  let filmTitleEl = document.createElement("h3");
  filmTitleEl.style.color = "white";
  filmTitleEl.style.textShadow = "-1px 1px 1px blue";
  filmTitleEl.style.textAlign = "end";
  filmTitleEl.innerHTML = `${arr[0].title}`;
  filmTitleEl.style.position = "absolute";
  filmTitleEl.style.top = "82%";
  filmTitleEl.style.right = "8px";
  elementReceivingAppend.append(filmTitleEl);

  let filmDescrpEl = document.createElement("p");
  filmDescrpEl.style.color = "white";
  filmDescrpEl.innerHTML = `${arr[0].text}`;
  elementReceivingAppend.append(filmDescrpEl);
  filmDescrpEl.style.position = "absolute";
  filmDescrpEl.style.top = "88%";
  filmDescrpEl.style.right = "8px";
  filmDescrpEl.style.textAlign = "end";
  filmDescrpEl.style.textShadow = "-1px 1px 1px blue";
  filmDescrpEl.style.paddingLeft = "40px";
  filmDescrpEl.classList.add("fw-medium");

  generateThumbnails(images, sliderContainerEl);

  let counter = 1;
  let thumbDivArr = document.querySelectorAll(".__thumb-div");
  console.log(thumbDivArr);
  let thumbImgArr = document.querySelectorAll(".__thumb-img");
  console.log(thumbImgArr);
  // thumbImgArr.forEach(function (el) {
  //   el.classList.add("__scuro");
  // });

  thumbImgArr[counter - 1].classList.add("__luminoso");

  arrowDownEl.addEventListener("click", function () {
    thumbImgArr[counter - 1].classList.remove("__luminoso");

    if (counter === arr.length) {
      counter = 1;
    } else {
      counter++;
    }
    carosImageEl.setAttribute("src", `img/0${counter}.webp`);
    filmTitleEl.innerText = `${arr[counter - 1].title}`;
    filmDescrpEl.innerText = `${arr[counter - 1].text}`;

    thumbImgArr[counter - 1].classList.add("__luminoso");
  });
  arrowUpEl.addEventListener("click", function () {
    thumbImgArr[counter - 1].classList.remove("__luminoso");

    if (counter === 1) {
      counter = arr.length;
    } else {
      counter--;
    }
    carosImageEl.setAttribute("src", `img/0${counter}.webp`);
    filmTitleEl.innerText = `${arr[counter - 1].title}`;
    filmDescrpEl.innerText = `${arr[counter - 1].text}`;

    thumbImgArr[counter - 1].classList.add("__luminoso");
  });
  let imgsBigCaroslArr = document.querySelectorAll(".__img-big-carosel");

  let btnAutoplayEl = document.getElementById("start-autoplay");
  let btnStopAutoplayEl = document.getElementById("stop-autoplay");
  let intervalID;
  let counter2 = 1;
  btnAutoplayEl.addEventListener("click", function () {
    intervalID = setInterval(function () {
      if (counter2 === 5) {
        counter2 = 1;
      } else {
        counter2++;
      }
      carosImageEl.setAttribute("src", `img/0${counter2}.webp`);
    }, 2000);
  });
  btnStopAutoplayEl.addEventListener("click", function () {
    clearInterval(intervalID);
  });
  console.log(btnAutoplayEl);
}

// ora mi occupo dello slider
let sliderContainerEl = document.querySelector(".__slider-container");

addBigImage(images, bigImageInnerContainerEl);

// seleziono il button per far partire l'autoplay
