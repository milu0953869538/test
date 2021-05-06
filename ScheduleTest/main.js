// $(function () {
//     $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")

//     var topicCount = topic.length; //算陣列有幾筆資料

//     var millisecsPerDay = 24*60*60*1000;
//     //一秒鐘有1000毫秒,每分鐘60秒,每小時60分鐘,每天24小時

//     for (var x = 0; x < topicCount; x++) {
//         $("#courseTable").append("<tr>");
//         //$("#courseTable").append("<td>"+(x+1)+"</td>"); //這是原本要寫的呈現感覺
//         $("#courseTable").append(`<td>${x + 1}</td>`);
//         $("#courseTable").append(`<td>${new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString().slice(5)}</td>`); //你用typeof()包住整個全部 會發現他是字串String 接下來就是找字串物件底下的屬性跟方法去處理
//         $("#courseTable").append(`<td>${topic[x]}</td>`);
//         $("#courseTable").append("</tr>");
//     }

// });


$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>內容</th><th>主題</th></tr>");
    // append 新增內容
    // coursetable 前面要加# 代表抓這個ID
    var topicCount = topic.length;
    // 計算 陣列有幾筆資料 拿到陣列的長度(個數)
    var milisecsperday = 24 * 60 * 60 * 1000;
    for(var x=0; x<topicCount; x++){
        $("#courseTable").append("<tr>");
        // $("#courseTable").append("<td>" + (x+1) + "</td>");
        // 因為x從0開始 加1才會呈現正常表格 比較正常
        $("#courseTable").append(`<td>${x+1}</td>`);
        // $("#courseTable").append(`<td>${startDate+(7*x)}</td>`);
        // 直接+7格式會跑掉 要進行格式的轉換
        $("#courseTable").append(`<td>${new Date(startDate.getTime() + 7 *x *milisecsperday).toLocaleDateString()}</td>`);
        // 可以使用slice( 5 )去切掉後面的數字
        // 可以使用slice(5, 9)去切頭切尾
        // 可以使用slice(-4)去切尾巴
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        //  號碼動態產生(x) 不會壞掉 直接填入
        $("#courseTable").append(`<tr>`);
        // $
    }
});

