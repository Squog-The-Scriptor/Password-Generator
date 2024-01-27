const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBoxOne = document.getElementById("pw-box-one")
let passwordBoxTwo = document.getElementById("pw-box-two") 
let passwordOne = document.getElementById("new-pw-one")
let passwordTwo = document.getElementById("new-pw-two")



function cleanUp() {
    passwordOne.value = ""
    passwordTwo.value = ""
}


function genPasswordOne() {
    let password = ""
    let passwordLength = 15 
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        password += characters[randomNumber]
    }
    document.getElementById("new-pw-one").value = password;
    
    
 }
 
 
 
function genPasswordTwo() {
    let password = ""
    let passwordLength = 15 
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        password += characters[randomNumber]
    }
    document.getElementById("new-pw-two").value = password;
    
    
 }
 
 
 function copyPasswordOne() {
    let copyTextOne = document.getElementById("new-pw-one")
    copyTextOne.select()
    document.execCommand("copy")
    alert("Password copied to clipboard!")
    window.getSelection().removeAllRanges();
 }
 
  function copyPasswordTwo() {
    let copyTextTwo = document.getElementById("new-pw-two")
    copyTextTwo.select()
    document.execCommand("copy")
    alert("Password copied to clipboard!")
    window.getSelection().removeAllRanges(); 
 }

function darkMode() {
  let passwordEl = document.body
  passwordEl.classList.toggle("dark-mode");
}


// function generatePasswordOne() {
//     for (let i = 0; i < 15; i++) {
//         let randomCharIndex = Math.floor(Math.random()*characters.length)
//         passwordBoxOne.textContent += characters[randomCharIndex]
        
//     }
    
// }


// function generatePasswordTwo() {
//     for (let i = 0; i < 15; i++) {
//         let randomCharIndex = Math.floor(Math.random()*characters.length)
//         passwordBoxTwo.textContent += characters[randomCharIndex]
//     }
    
// }

// function copyPasswordOne() {
//     let p = document.getElementById("pw-box-one")
//     p.select()
    
//     /* Copy the text inside the text field */
//     document.execCommand("copy")
        
//     // let passwordOne = passwordBoxOne.textContent
// 	// navigator.clipboard.writeText(passwordOne);
// 	alert(`Password copied to clipboard!`)
// }

// function copyPasswordTwo() {
//     // let passwordTwo = passwordBoxTwo.textContent
// 	// navigator.clipboard.writeText(passwordTwo);
// 	alert(`Password copied to clipboard!`)
// }


// function generatePasswordOne() {
//     const passswordLength = 15
//     for (let i = 0; i < passswordLength; i++) {
//         let randomCharIndex = Math.floor(Math.random()*characters.length)
//         passwordBoxOne += characters[randomCharIndex]
        
//     }
    
// }

// function cleanUp() {
//     passwordBoxOne.innerHTML = ""
//     passwordBoxTwo.innerHTML = ""
// }

// function generatePasswordTwo() {
//     const passswordLength = 15
//     for (let i = 0; i < passswordLength; i++) {
//         let randomCharIndex = Math.floor(Math.random()*characters.length)
//         passwordBoxTwo += characters[randomCharIndex]
//     }
    
// }
