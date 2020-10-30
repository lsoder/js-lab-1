
let text = document.getElementById("text");
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');

//skriv ditt namn
let yourName;
//efter man har skrivit in sitt namn och tryckt på enter...
//namnet läggs till variabeln och tar bort input och man går vidare till första scenarot...

input.onkeypress = function (event) {

  if (event.key == "Enter" || event.keyCode == 13) {
    yourName = input.value;
    console.log(yourName);
    input.parentNode.removeChild(input) // tar bort inputfältet
    advanceTo(currentScene.basement)
  }
};


//här ändras texten och lägger in nickname i stället...
function changeText(words) {
  console.log({words})
  console.log({yourName})
  
  if (yourName) {
    words = words.replace("YourName", yourName);
  }
  text.innerHTML = words;
};

//den här lägger till rätt antal knappar
function changeButtons(buttonList) {
  buttonBox.innerHTML = "";
  for (let i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
  }
};

//denna för spelet vidare...
function advanceTo(s) {
  changeText(s.text)
  changeButtons(s.buttons)
};


let currentScene = {
  start: {
    text: "Vill du spela ett spel? Skriv in ditt namn och tryck på enter...",
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
    text: "Ett monster åt upp dig! GAME OVER! Vill du spela igen?",
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
    buttons: [["Ja!", "advanceTo(currentScene.sword)"], ["Nej, tack detta var tråkigt!", "advanceTo(currentScene.start)"]]
  },
  sword: {
    text: "Ett fruktansvärt monster attakerar dig, vill du använda svärdet?",
    buttons: [["Ja!", "advanceTo(currentScene.finish)"], ["Nej", "advanceTo(currentScene.gameover)"]]
  },
  gameover: {
    text: "Monstret åt upp dig, YourName. GAME OVER!!",
    buttons: []
  },
  finish: {
    text: "Bra jobbat YourName! Du har besegrat monstret och vunnit! Vill du spela igen?",
    buttons: [["Ja!", "advanceTo(currentScene.start)"]]
  },

};

//denna startar funktionen
advanceTo(currentScene.start);