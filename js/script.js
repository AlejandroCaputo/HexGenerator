const button = document.querySelector("button")
const background = document.querySelector("body")
var hexGenerator = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
var hexValue = document.querySelector(".hexValue")

button.onclick = ()=> changeRandomColor()

function changeRandomColor(){
    
    let hex ="#"
    for (let i = 0; i<6; i++){
        let randomValue = Math.floor(Math.random()*15)
        hex = hex+ hexGenerator[randomValue] 
        
    }
    console.log(hex)
    background.style.backgroundColor = hex
    hexValue.innerHTML = hex
}



