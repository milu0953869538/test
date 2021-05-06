let timer = document.getElementById("timer");
let userInput = document.getElementById("userInput");
let hint = document.getElementById("hint");
let botton = document.getElementsByTagName("button")[0]; //botton沒有用id所以用getName
let count = 10;

timer.innerHTML = count ;
botton.addEventListener("click",checkPassword);
let myVar = setInterval(myTimer,1000);

function myTimer(){
    count--;
    timer.innerHTML = count ;
    if(count==0){
        hint.innerHTML="Game Over !";
        clearInterval(myVar);
    }
}

function checkPassword(){
    hint.innerHTML="";
    if(parseInt(userInput.value)==1234){
        hint.innerHTML="Good Game , Press F5 to Restart";
        alert("You Win !"); 
        clearInterval(myVar);
    }else{
        hint.innerHTML="Try Again !";
    }
    userInput.value = null ;
}
