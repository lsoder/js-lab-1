
let text = document.getElementById("text"); 
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');

//skriv ditt namn
let yourName;

//efter man har skrivit in sitt namn och tryckt på enter...
//namnet läggs till variabeln och tar bort input och man går vidare till första scenarot...
input.onkeypress = function(event) {
    console.log(input.value);
    if (event.key == "Enter" || event.keyCode == 13) {
      yourName =  input.value;
      input.parentNode.removeChild(input)
      advanceTo(currentScene.basement)
    }
  };

  //här ändras texten och lägger in nickname i stället...
    let changeText = function(words) {
        text.innerHTML = words.replace("your name", yourName);
  };
  
  //den här lägger till rätt antal knappar
    let changeButtons = function(buttonList) {
        buttonBox.innerHTML = "";
        for (var i = 0; i < buttonList.length; i++) {
        buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
    };
  };

  //denna för spelet vidare...
    let advanceTo = function(s) {
        changeText(s.text)
        changeButtons(s.buttons)
    };
  

let currentScene = {
      start: {
      text: "Vill du spela mitt spel? Skriv in ditt namn och tryck på enter...",
    },
      basement: {
      text: "Skalman, du befinner dig i källaren, du ser en dörr. Vill du tända lampan?",
      buttons: [["Ja", "advanceTo(currentScene.box)"],["Nej", "advanceTo(currentScene.monster)"]]
    },
      box: { 
      text: "Smart drag så att du kan se vad du gör... Du ser en låda vill du öppna lådan?",
      buttons: [["Ja", "advanceTo(currentScene.keybox)"],["Nej, gå vidare", "advanceTo(currentScene.monster)"]]
    },
      monster: {
      text: "Ett fruktansvärt monster attakerar dig och spelet är tyvärr slut, GAME OVER! Spela igen?",
      buttons: [["Ja!", "advanceTo(currentScene.start)"],["Nej, tack detta var tråkigt!", "advanceTo(currentScene.monster)"]]
    },
      keybox: {
      text: "Du behöver en nyckel för att öppna lådan...",
      buttons: [["Leta efter nyckel", "advanceTo(currentScene.key)"],["Gå vidare", "advanceTo(currentScene.monster)"]]
    },
      key: {
      text: "Av enhändelse ser du en nyckel ligga på golvet!! Vill du plocka upp den?",
      buttons: [["Ja, självklart!", "advanceTo(currentScene.last)"],["Nej", "advanceTo(currentScene.monster)"]]
    },
      last: {
      text: "Så..nu kan du öppna lådan! I lådan finns ett brev med ledtrådar till nästa mysterium fortsättning följer...",
      buttons: [["Spela igen?", "advanceTo(currentScene.start)"],["Nej, tack detta var tråkigt!", "advanceTo(currentScene.start)"]]
    },
    
  };
  
  //denna startar funktionen
  advanceTo(currentScene.start);