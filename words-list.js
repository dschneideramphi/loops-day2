//words-list.js

let result;
let colors = ["red", "green", "orange", "yellow", "magenta", "cyan", "lime", "blue"];
let containerElt = document.querySelector("#container");


async function getAPI(word) {
  //API Call
  result = await fetch(`https://api.datamuse.com/words?ml=${word}`)
          .then(res => res.json())
          .then(
              (result) => {
                  return result;
              },
              (error) => {
                  return error;
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
