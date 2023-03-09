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

//  rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
function addBigImage(arr, elementReceivingAppend) {
  let carosImage = document.createElement("img");
  carosImage.style.objectFit = "";
  carosImage.style.height = "100%";
  carosImage.style.width = "100%";
  elementReceivingAppend.append(carosImage);
  carosImage.setAttribute("src", `img/01.webp`);

  let filmTitleEl = document.createElement("h3");
  filmTitleEl.style.color = "white";
  filmTitleEl.style.textAlign = "end";
  filmTitleEl.innerHTML = `${arr[0].title}`;
  filmTitleEl.style.position = "absolute";
  filmTitleEl.style.top = "80%";
  filmTitleEl.style.right = "8px";
  elementReceivingAppend.append(filmTitleEl);

  let filmDescrpEl = document.createElement("p");
  filmDescrpEl.style.color = "white";
  filmDescrpEl.innerHTML = `${arr[0].text}`;
  elementReceivingAppend.append(filmDescrpEl);
  filmDescrpEl.style.position = "absolute";
  filmDescrpEl.style.top = "87%";
  filmDescrpEl.style.right = "8px";
  filmDescrpEl.style.textAlign = "end";
  filmDescrpEl.classList.add("fw-medium");

  let counter = 1;
  arrowDownEl.addEventListener("click", function () {
    if (counter === arr.length) {
      counter = 1;
    } else {
      counter++;
    }
    carosImage.setAttribute("src", `img/0${counter}.webp`);
    filmTitleEl.innerText = `${arr[counter - 1].title}`;
    filmDescrpEl.innerText = `${arr[counter - 1].text}`;
  });

  arrowUpEl.addEventListener("click", function () {
    if (counter === 1) {
      counter = arr.length;
    } else {
      counter--;
    }
    carosImage.setAttribute("src", `img/0${counter}.webp`);
  });
  // arr.forEach((el) => {
  //   console.log(el.image);
  // });
}

addBigImage(images, bigImageInnerContainerEl);
