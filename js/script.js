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
  let counter = 1;
  thumbImgArr[counter - 1].classList.add("__luminoso");
  // thumbImgArr[0].classList.add("__luminoso");
  // thumbImgArr.forEach(function (el, index) {
  //   let previusindex = index;
  //   el.addEventListener("click", function () {
  //     thumbImgArr[0].classList.remove("__luminoso");
  //     thumbImgArr[previusindex].classList.remove("__luminoso");

  //     console.log(index);
  //     console.log(previusindex);

  //     //thumbImgArr[index + 1].classList.remove("__luminoso");
  //     thumbImgArr[index].classList.add("__luminoso");
  //   });
  // });

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
  // seleziono il button per far partire l'autoplay
  let btnAutoplayEl = document.getElementById("start-autoplay");
  // seleziono il button dello stop-autoplay
  let btnStopAutoplayEl = document.getElementById("stop-autoplay");
  // seleziono il button per invertire l'autoplay
  let btnRevertAutoplayEl = document.getElementById("revert-autoplay");
  // setto la variabile interval Id per triggerare una funzione a intervalli regolari
  let intervalID;

  btnAutoplayEl.addEventListener("click", function () {
    intervalID = setInterval(function () {
      thumbImgArr[counter - 1].classList.remove("__luminoso");
      if (counter === arr.length) {
        counter = 1;
      } else {
        counter++;
      }
      carosImageEl.setAttribute("src", `img/0${counter}.webp`);
      thumbImgArr[counter - 1].classList.add("__luminoso");
      filmTitleEl.innerText = `${arr[counter - 1].title}`;
      filmDescrpEl.innerText = `${arr[counter - 1].text}`;
    }, 2000);
  });
  btnStopAutoplayEl.addEventListener("click", function () {
    clearInterval(intervalID);
  });
  btnRevertAutoplayEl.addEventListener("click", function () {
    clearInterval(intervalID);
    intervalID = setInterval(function () {
      thumbImgArr[counter - 1].classList.remove("__luminoso");
      if (counter === 1) {
        counter = arr.length;
      } else {
        counter--;
      }
      carosImageEl.setAttribute("src", `img/0${counter}.webp`);
      thumbImgArr[counter - 1].classList.add("__luminoso");
      filmTitleEl.innerText = `${arr[counter - 1].title}`;
      filmDescrpEl.innerText = `${arr[counter - 1].text}`;
    }, 2000);
  });
  //console.log(btnAutoplayEl);
}

// ora mi occupo dello slider

addBigImage(images, bigImageInnerContainerEl);
