var img_array = ["url(/img/1.png)", "url(https://gitee.com/vegetablechicken-dev/pic/raw/master/img/img/2.png)", "url(/img/3.png)", "url(/img/5.png)", "url(https://gitee.com/vegetablechicken-dev/pic/raw/master/img/img/6.png)", "url(/img/7.png)", "url(https://gitee.com/vegetablechicken-dev/pic/raw/master/img/img/8.png)"];
var index = new Date().getDay();
var current_background = img_array[index];
document.getElementById("web_bg").style.backgroundImage = current_background;
