let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray - 決定地圖中每個格子的元素
//ctx - HTML5 Canvas用
//currentImgMainX, currentImgMainY -決定主角所在座標
//imgMountain, imgMain, imgEnemy - 障礙物,主角,敵人圖片物件
const gridLength = 200;
//網頁載入完成後的初始化動作(第一階段: 畫面一載進來)
$(function(){
    mapArray = [
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ]; //0-可以走的  , 1-障礙物 ,2-終點 ,3-敵人
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "./RGBPractice/images/spriteSheet.png";
    currentImgMain = {
        /*
        "x":0,
        "y":0
        或是
        */
        x:0,
        y:0
        
    };
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x, currentImgMain.y, gridLength,gridLength);
       //上面那行的意思是: 從原本圖的(0,0)處,剪下寬80高130的區域,貼至目前的"指定位置",並且縮放成指定的寬度(200)與高度(200)
        //ctx.drawImage(imgMain,0,0);
       //ctx.drawImage(imgMain,0,0,300,300);//300,300 >>縮放成300*300(指定縮放的寬度高度)

    };



    imgMountain = new Image();
    imgMountain.src = "./RGBPractice/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "./RGBPractice/images/Enemy.png";

    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(var x in mapArray){
                for(var y in mapArray){
                    if(mapArray[x][y]==1){
                        ctx.drawImage(imgMountain,32,65,32,32,y*gridLength, x*gridLength, gridLength,gridLength); 
                    }else if(mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength, x*gridLength, gridLength,gridLength);
                    }
                }
            }
        };
    };

});
//回應key event
$(document).on("keydown",function(event){
//這個event具體到底是什麼? 請在event.preventDefault();下面那行放個console.log(event)來看
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {
        x:-1,
        y:-1
    };
    targetBlock = {
        x:-1,
        y:-1
    };

    event.preventDefault();
    //console.log(event);

    switch(event.key){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175; //改剪下臉朝左的圖片
            break;
        case "ArrowUp"://用shift+tab調整框架格式(整行case選到break)
            targetImg.x = currentImgMain.x ;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355; //改剪下臉朝左的圖片
            break;
        case "ArrowRight":
        targetImg.x = currentImgMain.x + gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionX = 540; //改剪下臉朝左的圖片
            break;
        case "ArrowDown":
        targetImg.x = currentImgMain.x ;
        targetImg.y = currentImgMain.y + gridLength;
        cutImagePositionX = 0; //改剪下臉朝左的圖片
            break;
        default: //其他一概不處理
            return;
    }
    //確認目標位置不會超過地圖
    if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 & targetImg.y>=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }
    //清空主角原本所在的位置 >>移動=擦掉原本的,再從新的地方重新畫上去
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

    //設計移動相關的規則跟發生的事件eg.對話/提醒
    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
                    $("#talkBox").text("有山");
                    
                break;
            case 2:
                    $("#talkBox").text("抵達終點");
                    currentImgMain.x = targetImg.x;
                    currentImgMain.y = targetImg.y;
                break;
            case 3:
                    $("#talkBox").text("哈囉");

                break;
        }

    }else{
        //找到畫面的talkBox ,值為輸入: 邊界
        $("#talkBox").text("邊界");
    }
        //這裡才可以動>>因為這裡把主角畫上去(重新繪製主角)
        ctx.drawImage(imgMain, cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y, gridLength, gridLength);


});
