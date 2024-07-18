
let passwordEl = document.getElementById("password-El")
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandom() {
let randomInt = Math.floor(Math.random() * 100)
    return randomInt 
}

console.log(getRandom())

function genPassword() {
    let passwordEl = getRandom() 
    characters = passwordEl

    renderPassword() 
}

function renderPassword() {
    passwordEl.textContent = characters 
    for (let i = o; i < characters.length; i++) {
        passwordEl.textContent += characters 
    }
}

