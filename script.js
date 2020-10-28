let currentScene = 0;
const scenes = [
    {
        description: "Du befinner dig i källaren,  du ser en dörr. Vill du öppna dörren eller tända lampan",
        choices: ["tända lampan", "öppna dörren"],
        nextScene: [2, 1]
    },
    {
        description: "Du behöver en nyckel för att öppna dörren, vill du leta efter en nyckel?",
        choices: ["Ja", "Nej"],
        nextScene: [2, 1]
    },
    {
        description: "Du ser en låda på golvet, vill du öppna lådan?",
        choices: ["Ja", "Nej"],
        nextScene: [2, 1]
    },
    {
        description: "I lådan finns en nyckel, vill du plocka upp den?",
        choices: ["Ja", "Nej"],
        nextScene: [2, 1]
    },
    {
        description: "Bravo, nu kan du öppna dörren! Vill du gå till dörren och öppna den med nyckeln?",
        choices: ["Ja", "Nej"],
        nextScene: [2, 1]
    }
];

window.onload = presentScene;

function presentScene() {
    const paragraph = document.getElementById("text")
    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    const answer = prompt(scenes[currentScene].description);
    handleUserChoice(answer)
    console.log(btn1, btn2);
    paragraph.innerHTML = scenes[currentScene].description;
}

function handleUserChoice(answer) {
    console.log(answer);
}