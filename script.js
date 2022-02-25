let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");


let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
let newPassword = "";


sizePassword.innerHTML = sliderElement.value;

//faz com que o 
slider.oninput = function(){ //oninput = This event occurs when the value of an <input> or <textarea> element is changed.
    sizePassword.innerHTML = this.value;
}


function generatorPassword(){
    
    let pass = "";

    //ira pegar como base o tamanho da senha que o user desejar e passara pelo charSet de acordo com esse valor
    for(let i=0, n = charSet.length; i < sliderElement.value; i++){
        pass += charSet.charAt(Math.floor(Math.random()*n));
        //charAt = pega o caractere da posição indicada
        //Nese caso, é gerado um numero aleatorio com base em "n", que é o tamanho do nosso charSet
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;


}


function copyPassword(){

    alert("Senha copiada!");
    navigator.clipboard.writeText(newPassword);
}