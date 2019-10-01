//words-list.js

let result;
let colors = ["red", "green", "orange", "yellow", "magenta", "cyan", "lime", "blue"];
let containerElt = document.querySelector("#container");


async function getAPI(word) {
  //API Call
  result = await fetch(`https://api.datamuse.com/words?ml=${word}`)
          .then(res => res.json())
          .then((result) => {
                  return result;
              }
          );

  //Update Screen
  containerElt.innerHTML = "";
  for(r of result) {
    let newDiv = document.createElement("div");
    newDiv.style.background = colors[Math.floor(Math.random()*colors.length)];
    newDiv.innerHTML = r.word;
    containerElt.appendChild(newDiv);
  }
}


let key = "120cf60e930e396adc145a3e7d3d9ea688a3d501856112432d09981a40889a39";
let images;

//SEARCH QUERY STRING - WORKS!
async function searchImage(search) {
  images = await fetch(`https://api.unsplash.com/search/photos/?query=${search}&orientation=squarish&client_id=${key}`)
    .then(res =>  res.json())
        .then((result) => {
          console.log(result);
          return result.results;
        }
    );

    containerElt.innerHTML = "";
    for(img of images) {
      let newImg = document.createElement("img");
      newImg.style.height = "500px";
      newImg.style.width = "500px";
      newImg.src = img.urls.small;
      containerElt.appendChild(newImg);
    }

  }


//GETS RANDOM IMAGES!
async function randomImage(amt) {
  images = await fetch(`https://api.unsplash.com/photos/random/?count=${amt}&client_id=${key}`)
    .then(res =>  res.json())
        .then((result) => {
          console.log(result);
          return result;
        }
    );

    containerElt.innerHTML = "";
    for(img of images) {
      let newImg = document.createElement("img");
      newImg.style.height = "500px";
      newImg.style.width = "500px";
      newImg.src = img.urls.small;
      containerElt.appendChild(newImg);
    }

  }
