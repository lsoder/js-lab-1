let text = document.getElementById("text");
let buttons = document.getElementById("buttons");
let input = document.getElementById("input");

let yourName;
/**
 * 
Write in your name and press enter, the name is added to the variable and 
deletes input when you move on to the first scenes.
 */
input.onkeypress = function (event) {

  if (event.key == "Enter" || event.keyCode == 13 ) {
    yourName = input.value;
    console.log(yourName);
    input.style.display = "none" // hides input field
    advanceTo(scenes.basement)
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
function advanceTo(scene) {
  changeText(scene.text)
  changeButtons(scene.buttons)
};

let scenes = {
  start: {
    text: "Vågar du spela detta spel?"+"<br><br>"+"Skriv in ditt namn och tryck på enter/retur...",
    buttons: []
  },
  basement: {
    text: "YourName, du befinner dig i källaren och det är ganska mörkt. Vill du tända lampan?",
    buttons: [["Ja", "advanceTo(scenes.lamp)"], ["Nej", "advanceTo(scenes.monster)"]]
  },
  lamp: {
    text: "Smart drag så att du kan se vad du gör... Du ser en låda vill du öppna lådan?",
    buttons: [["Ja", "advanceTo(scenes.keybox)"], ["Nej, gå vidare", "advanceTo(scenes.monster)"]]
  },
  monster: {
    text: "GAME OVER!"+"<br><br>"+"Ett monster åt upp dig! Ladda om sidan om du vill spela igen.",
    buttons: []
  },
  keybox: {
    text: "Du behöver en nyckel för att öppna lådan...",
    buttons: [["Leta efter nyckel", "advanceTo(scenes.key)"], ["Gå vidare", "advanceTo(scenes.monster)"]]
  },
  key: {
    text: "Av en händelse ser du en nyckel ligga på golvet!! Vill du plocka upp den?",
    buttons: [["Ja, självklart!", "advanceTo(scenes.box)"], ["Nej", "advanceTo(scenes.monster)"]]
  },
  box: {
    text: "Så..nu kan du öppna lådan! I lådan finns även ett svärd, vill du plocka upp svärdet?",
    buttons: [["Ja!", "advanceTo(scenes.sword)"], ["Nej", "advanceTo(scenes.gameover)"]]
  },
  sword: {
    text: "Ett fruktansvärt monster attakerar dig, vill du använda svärdet?",
    buttons: [["Ja!", "advanceTo(scenes.finish)"], ["Nej", "advanceTo(scenes.gameover2)"]]
  },
  gameover: {
    text: "GAME OVER!"+"<br><br>"+"Monstret åt upp dig, YourName. Ladda om sidan om du vill spela igen.",
    buttons: []
  },
  gameover2: {
    text: "GAME OVER!"+"<br><br>"+"Utan svärd var du chanslös mot monstret som åt upp dig, YourName. Ladda om sidan om du vill spela igen.",
    buttons: []
  },
  finish: {
    text: "Bra jobbat YourName!"+"<br><br>"+"Du har besegrat monstret och vunnit! Ladda om sidan om du vill spela igen.",
    buttons: []
  },

};
 
/** Starts the game. */
advanceTo(scenes.start);
