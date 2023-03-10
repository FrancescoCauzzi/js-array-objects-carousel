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
let thumbNailsContainerEl = document.querySelector(".__thumbnails-container");

// ora devo creare la function che genera le thumbnails

function generateThumbnails(arr, elementReceivingAppend) {
  arr.forEach(function (el, index) {
    let thumbImgDivEl = document.createElement("div");
    thumbImgDivEl.style.height = `calc(100% / ${arr.length}`;
    thumbImgDivEl.style.cursor = "pointer";
    thumbImgDivEl.classList.add("__thumb-div");
    elementReceivingAppend.append(thumbImgDivEl);

    let carosImage = document.createElement("img");
    carosImage.classList.add("__thumb-img");
    carosImage.style.objectFit = "cover";
    carosImage.style.height = "100%";
    carosImage.style.width = "100%";
    thumbImgDivEl.append(carosImage);
    carosImage.setAttribute("src", `img/0${index + 1}.webp`);
    //carosImage.classList.add("__luminoso");
  });
}

//  rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
function addBigImage(arr, elementReceivingAppend) {
  let carosImageEl = document.createElement("img");
  carosImageEl.style.objectFit = "";
  carosImageEl.style.height = "100%";
  carosImageEl.style.width = "100%";
  carosImageEl.style.objectFit = "cover";
  carosImageEl.classList.add("__img-big-carosel");
  carosImageEl.setAttribute("src", `${arr[0].image}`);
  elementReceivingAppend.append(carosImageEl);

  let filmTitleEl = document.createElement("h2");
  filmTitleEl.style.color = "white";
  filmTitleEl.style.textShadow = "2px 2px 2px blue";
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
  filmDescrpEl.style.textShadow = "2px 2px 2px blue";
  filmDescrpEl.style.paddingLeft = "40px";
  filmDescrpEl.classList.add("fw-medium");

  generateThumbnails(images, thumbNailsContainerEl);

  let thumbDivArr = document.querySelectorAll(".__thumb-div");
  console.log(thumbDivArr);
  let thumbImgArr = document.querySelectorAll(".__thumb-img");
  console.log(thumbImgArr);
  let counter = 0;
  thumbImgArr[counter].classList.add("__luminoso");
  //thumbImgArr[0].classList.add("__luminoso");
  let previousIndex = counter;
  thumbImgArr.forEach(function (el, index) {
    el.addEventListener("click", function () {
      counter = index;
      thumbImgArr[previousIndex].classList.remove("__luminoso");
      thumbImgArr[counter].classList.add("__luminoso");
      carosImageEl.setAttribute("src", `img/0${counter + 1}.webp`);
      filmTitleEl.innerText = `${arr[counter].title}`;
      filmDescrpEl.innerText = `${arr[counter].text}`;

      previousIndex = index;

      console.log(index);
      console.log(counter);

      //thumbImgArr[index + 1].classList.remove("__luminoso");
    });
  });

  arrowUpEl.addEventListener("click", function () {
    console.log(counter);
    thumbImgArr[counter].classList.remove("__luminoso");

    if (counter === 0) {
      counter = arr.length - 1;
    } else {
      counter--;
    }
    previousIndex = counter;
    carosImageEl.setAttribute("src", `img/0${counter + 1}.webp`);
    filmTitleEl.innerText = `${arr[counter].title}`;
    filmDescrpEl.innerText = `${arr[counter].text}`;

    thumbImgArr[counter].classList.add("__luminoso");
  });
  arrowDownEl.addEventListener("click", function () {
    thumbImgArr[counter].classList.remove("__luminoso");

    if (counter === arr.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    previousIndex = counter;

    carosImageEl.setAttribute("src", `img/0${counter + 1}.webp`);
    filmTitleEl.innerText = `${arr[counter].title}`;
    filmDescrpEl.innerText = `${arr[counter].text}`;

    thumbImgArr[counter].classList.add("__luminoso");
  });
  // seleziono il button per far partire l'autoplay
  let btnAutoplayEl = document.getElementById("start-autoplay");
  // seleziono il button dello stop-autoplay
  let btnStopAutoplayEl = document.getElementById("stop-autoplay");
  // seleziono il button per invertire l'autoplay
  let btnRevertAutoplayEl = document.getElementById("revert-autoplay");
  // setto la variabile interval Id per triggerare una funzione a intervalli regolari
  let intervalID;

  btnAutoplayEl.addEventListener("click", function () {
    btnAutoplayEl.style.pointerEvents = "none";
    intervalID = setInterval(function () {
      thumbImgArr[counter].classList.remove("__luminoso");
      if (counter === arr.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
      previousIndex = counter;
      carosImageEl.setAttribute("src", `img/0${counter + 1}.webp`);
      thumbImgArr[counter].classList.add("__luminoso");
      filmTitleEl.innerText = `${arr[counter].title}`;
      filmDescrpEl.innerText = `${arr[counter].text}`;
    }, 2000);
  });
  btnStopAutoplayEl.addEventListener("click", function () {
    btnAutoplayEl.style.pointerEvents = "auto";

    clearInterval(intervalID);
  });
  btnRevertAutoplayEl.addEventListener("click", function () {
    //btnRevertAutoplayEl.style.pointerEvents = "none";
    clearInterval(intervalID);
    intervalID = setInterval(function () {
      thumbImgArr[counter].classList.remove("__luminoso");
      if (counter === 0) {
        counter = arr.length - 1;
      } else {
        counter--;
      }
      previousIndex = counter;

      carosImageEl.setAttribute("src", `img/0${counter + 1}.webp`);
      thumbImgArr[counter].classList.add("__luminoso");
      filmTitleEl.innerText = `${arr[counter].title}`;
      filmDescrpEl.innerText = `${arr[counter].text}`;
    }, 2000);
  });
  //console.log(btnAutoplayEl);
}

// ora mi occupo dello slider

addBigImage(images, bigImageInnerContainerEl);
