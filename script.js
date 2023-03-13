const display = document.querySelector("#pantalla")
const botones = document.querySelectorAll("button")
const botonOscuro = document.querySelector("#boton-oscuro")
const calculadoraOsc = document.querySelector("#calculadoraOscura")
const fondo = document.querySelector(".contenedor")
let string



botones.forEach((item)=>{
    item.onclick=()=>{
        
        if(item.id=="borrar"){
            display.innerText=""
        }
        else if(item.id=="borrar-car"){
            let string = display.innerText.toString()
            display.innerText=string.substr(0,string.length-1)
        }
        else if(display.innerText != "" && item.id == "igual"){
            display.innerText = eval(display.innerText)
        }
        else if(display.innerText == "" && item.id == "igual" ){
            display.innerText = "error"
            setTimeout(()=>(display.innerText = ""), 1500)
        }
        else{
            display.innerText+= item.id
        }
    }
})


window.addEventListener("keydown",teclado)
function teclado(){
    
    console.log(event.keyCode)
    if(event.keyCode == 96){
        display.innerText += event.key
    }
    else if(event.keyCode == 97){
        display.innerText += event.key
    }
    else if(event.keyCode == 98){
        display.innerText += event.key
    }
    else if(event.keyCode == 99){
        display.innerText += event.key
    }
    else if(event.keyCode == 100){
        display.innerText += event.key
    }
    else if(event.keyCode == 101){
        display.innerText += event.key
    }
    else if(event.keyCode == 102){
        display.innerText += event.key
    }
    else if(event.keyCode == 103){
        display.innerText += event.key
    }
    else if(event.keyCode == 104){
        display.innerText += event.key
    }
    else if(event.keyCode == 105){
        display.innerText += event.key
    }
    else if(event.keyCode == 106){
        display.innerText += event.key
    }
    else if(event.keyCode == 107){
        display.innerText += event.key
    }
    else if(event.keyCode == 109){
        display.innerText += event.key
    }
    else if(event.keyCode == 110){
        display.innerText += event.key
    }
    else if(event.keyCode == 111){
        display.innerText += event.key
    }
    else if(event.keyCode == 13){
        display.innerText = eval(display.innerText)
    }
    else if(event.keyCode == 27){
        display.innerText = ""
    }
    else if(event.keyCode == 8){
        let string = display.innerText.toString()
        display.innerText=string.substr(0,string.length-1)
    }
}

botonOscuro.addEventListener("click", cambio)

function cambio(){
    fondo.classList.toggle("active")
    calculadoraOsc.classList.toggle("active")
}

