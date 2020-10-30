let text = document.getElementById("text");
let buttons = document.getElementById("buttons");
let input = document.getElementById("input");

let yourName;
/**
 * 
Write in your name and press enter, the name is added to the variable and 
deletes input when you move on to the first scene.
 */
input.onkeypress = function (event) {

  if (event.key == "Enter" || event.keyCode == 13) {
    yourName = input.value;
    console.log(yourName);
    input.parentNode.removeChild(input) // removes input field
    advanceTo(currentScene.basement)
  }

};

/** Text changes and adds a name, yourName. */
function changeText(words) {
  console.log({words})
  console.log({yourName})
  
  if (yourName) {
    words = words.replace("YourName", yourName);
  }
  text.innerHTML = words;
};

/** Adds the right number of buttons. */
function changeButtons(buttonList) {
  buttons.innerHTML = "";
  for (let i = 0; i < buttonList.length; i++) {
    buttons.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
  }
};

/** Moves game further. */
function advanceTo(s) {
  changeText(s.text)
  changeButtons(s.buttons)
};



let currentScene = {
  start: {
    text: "Vågar du spela detta spel? Skriv in ditt namn och tryck på enter...",
    buttons: []
  },
  basement: {
    text: "YourName, du befinner dig i källaren och det är ganska mörkt. Vill du tända lampan?",
    buttons: [["Ja", "advanceTo(currentScene.lamp)"], ["Nej", "advanceTo(currentScene.monster)"]]
  },
  lamp: {
    text: "Smart drag så att du kan se vad du gör... Du ser en låda vill du öppna lådan?",
    buttons: [["Ja", "advanceTo(currentScene.keybox)"], ["Nej, gå vidare", "advanceTo(currentScene.monster)"]]
  },
  monster: {
    text: "GAME OVER! Ett monster åt upp dig! Vill du spela igen?",
    buttons: [["Ja!", "advanceTo(currentScene.start)"]]
  },
  keybox: {
    text: "Du behöver en nyckel för att öppna lådan...",
    buttons: [["Leta efter nyckel", "advanceTo(currentScene.key)"], ["Gå vidare", "advanceTo(currentScene.monster)"]]
  },
  key: {
    text: "Av en händelse ser du en nyckel ligga på golvet!! Vill du plocka upp den?",
    buttons: [["Ja, självklart!", "advanceTo(currentScene.box)"], ["Nej", "advanceTo(currentScene.monster)"]]
  },
  box: {
    text: "Så..nu kan du öppna lådan! I lådan finns även ett svärd, vill du plocka upp svärdet?",
    buttons: [["Ja!", "advanceTo(currentScene.sword)"], ["Nej", "advanceTo(currentScene.gameover)"]]
  },
  sword: {
    text: "Ett fruktansvärt monster attakerar dig, vill du använda svärdet?",
    buttons: [["Ja!", "advanceTo(currentScene.finish)"], ["Nej", "advanceTo(currentScene.gameover2)"]]
  },
  gameover: {
    text: "GAME OVER! Monstret åt upp dig, YourName.",
    buttons: []
  },
  gameover2: {
    text: "GAME OVER! Utan svärd var du chanslös mot monstret som åt upp dig, YourName.",
    buttons: []
  },
  finish: {
    text: "Bra jobbat YourName! Du har besegrat monstret och vunnit! Vill du spela igen?",
    buttons: [["Ja!", "advanceTo(currentScene.start)"]]
  },

};
 

/** Starts the program. */
advanceTo(currentScene.start);
