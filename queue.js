const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");




menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
let songs = [];

function updateSongs() {
  var queue = document.getElementById("queue");
  queue.innerHTML = "";
    if (songs.length == 0) {
        var li = document.createElement("li");
        var h1 = document.createElement("h1");
        var p = document.createElement("p");
      
        li.classList.add("queue__item");
      
        h1.appendChild(document.createTextNode("No Songs Yet"));
        p.appendChild(document.createTextNode("Nacho Song"));
      
        li.appendChild(h1);
        li.appendChild(p); 

        queue.appendChild(li);
    }
  songs.forEach((song) => {
    queue.appendChild(song);
  });

}

function addToQueue(songName) {
    //   var inputElement = document.getElementById("inputElement");
    //   var songName = inputElement.value;
  
    var li = document.createElement("li");
    var h1 = document.createElement("h1");
    var p = document.createElement("p");
  
    li.classList.add("queue__item");
  
    h1.appendChild(document.createTextNode(songName));
    p.appendChild(document.createTextNode("Artist"));
  
    li.appendChild(h1);
    li.appendChild(p);
  
    songs.push(li);
  
    updateSongs();
  }
  

document.getElementById("addSongBtn").addEventListener("click", function () {
    let inputField = document.getElementById("songInput");
    let addSongBtn = document.getElementById("addSongBtn");

    addSongBtn.style.display = "none";
  
    let clonedInputField = inputField.cloneNode(true); // Clone the input field
    clonedInputField.style.display = "block";
    document.getElementById("queue__container").appendChild(clonedInputField); // Append the cloned input field
  
    clonedInputField.focus();
  
    clonedInputField.addEventListener("keypress", function (event) {
      if (event.key == "Enter") {
        if (clonedInputField.value.trim() !== "") {
          addToQueue(clonedInputField.value);
        }
        clonedInputField.remove();
        addSongBtn.style.display = "block"; 
      }
    });
});

document.addEventListener("DOMContentLoaded", updateSongs)