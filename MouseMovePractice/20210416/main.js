let thisH1 = document.getElementsById("h1");
let thisP = document.getElementsById("p");
let thisDiv = document.getElementsById("div");
console.log("in js");


function mouseIn(){
    thisH1.innerHTML = "你進來了";
}
function mouseOut(){
    thisH1.innerHTML = "你出去了";
    thisP.innerHTML = "";
}
function mouseMove(e){ //需要有參數
    thisP.innerHTML = "你在裡面走來走去 , 位置:" + e.clientX + e.clientY
}

thisDiv.addEventListener("mouseover",mouseIn);
thisDiv.addEventListener("mouseout",mouseOut);
thisDiv.addEventListener("mousemove",mouseMove);

