
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/firefox-icon2.png');
    }else{
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
} 

var myButton = document.querySelector('button');
var myTitle = document.querySelector('h1');

if(!localStorage.getItem('nombre')){
    setNameUser();
}else{
    var storeName = localStorage.getItem('nombre');
    myTitle.textContent = 'Mozilla es fresco, ' + storeName;
}

function setNameUser(){
    var myName = prompt('Por favor, ingrese tu nombre.');
    localStorage.setItem('nombre', myName);
    myTitle.textContent = 'Mozilla es fresco, ' + myName;

}

myButton.onclick = function(){
    setNameUser();
}