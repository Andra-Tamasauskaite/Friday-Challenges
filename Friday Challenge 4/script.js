/////////Shorts
const message = document.getElementById("text-show");
const messageStyle = document.querySelector("p").style;
let blackScreen = document.getElementById("background");
let tvProgram = document.querySelector("iframe");
let infoIframe = document.getElementById("google-site");
let gameStore = document.getElementById("game-table");

////////TURN ON BUTTON
document.getElementById("text-show").innerHTML = "";
const text = ["Welcome!", "Goodbye!"];

function showMessage() {
  if (message.innerHTML === "") {
    message.innerHTML = text[0];
    messageStyle.color = "green";
    tvProgram.style.display = "none";
    infoIframe.style.display = "none";
    gameStore.style.display = "none";
    document.querySelector("tbody").innerHTML = "";
    blackScreen.style.display = "none";
  } else if (message.innerHTML === text[0]) {
    message.innerHTML = text[1];
    messageStyle.color = "red";
    tvProgram.style.display = "none";
    infoIframe.style.display = "none";
    gameStore.style.display = "none";
    document.querySelector("tbody").innerHTML = "";
    blackScreen.style.display = "none";
  } else {
    message.innerHTML = "";
    messageStyle.backgroundColor = "";
    blackScreen.style.display = "block";
  }
}

//////////Y BUTTON
function showProgram() {
  while (
    message.innerHTML === text[0] ||
    infoIframe.style.display === "block" ||
    gameStore.style.display === "block"
  ) {
    if (message.innerHTML === text[0] || message.innerHTML === text[1]) {
      message.innerHTML = "";
    }
    if (tvProgram.style.display === "none") {
      tvProgram.style.display = "block";
      infoIframe.style.display = "none";
      gameStore.style.display = "none";
      document.querySelector("tbody").innerHTML = "";
    }
  }
}

/////////A Button
function googleSite() {
  while (
    message.innerHTML === text[0] ||
    tvProgram.style.display === "block" ||
    gameStore.style.display === "block"
  ) {
    if (message.innerHTML === text[0] || message.innerHTML === text[1]) {
      message.innerHTML = "";
    }
    if (infoIframe.style.display === "none") {
      infoIframe.style.display = "block";
      tvProgram.style.display = "none";
      gameStore.style.display = "none";
      document.querySelector("tbody").innerHTML = "";
    }
  }
}

////////X Button
const games = [
  { image: "images/sam-xbox-360.jpg", title: "Serious Sam", price: "$14.99" },
  {
    image: "images/prototype-xbox-360.jpg",
    title: "Prototype 2",
    price: "$29.99",
  },
  { image: "images/l4d-xbox-360.jpg", title: "Left 4 Dead", price: "$10.99" },
];

function showGames() {
  while (
    message.innerHTML === text[0] ||
    tvProgram.style.display === "block" ||
    infoIframe.style.display === "block"
  ) {
    if (message.innerHTML === text[0] || message.innerHTML === text[1]) {
      message.innerHTML = "";
    }
    if (gameStore.style.display === "none") {
      gameStore.style.display = "block";
      tvProgram.style.display = "none";
      infoIframe.style.display = "none";
    }

    games.forEach((games) => {
      document.querySelector("tbody").innerHTML += `
          <tr>
            <td><img src='${games.image}' style='width:40px; height: auto'></td>
            <td style="font-size: 10px; vertical-align: middle">${games.title}</td>
            <td style="font-size: 10px; vertical-align: middle">${games.price}</td>
          </tr>
            `;
    });
  }
}

///////////B Button
function backWelcome() {
  while (
    message.innerHTML === text[0] ||
    tvProgram.style.display === "block" ||
    infoIframe.style.display === "block" ||
    gameStore.style.display === "block"
  ) {
    if (tvProgram.style.display === "block") {
      tvProgram.style.display = "none";
    }
    if (infoIframe.style.display === "block") {
      infoIframe.style.display = "none";
    }
    if (gameStore.style.display === "block") {
      gameStore.style.display = "none";
      document.querySelector("tbody").innerHTML = "";
    }
    return (message.innerHTML = text[0]) + (messageStyle.color = "green");
  }
}
