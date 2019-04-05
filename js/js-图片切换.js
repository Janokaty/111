var oleft=document.getElementById("left");
var oright=document.getElementById("right");
var otop=document.getElementById("top");
var obottom=document.getElementById("bottom");
var oimg=document.getElementById("img1");
var textArr=["这是第一张图","这是第二张图","这是第三张图","这是第四张图"];
var srcArr=["../images/1.png","../images/2.png","../images/3.png","../images/4.png"];

var num=-1;

function change() {
    obottom.innerHTML = textArr[num];
    oimg.src = srcArr[num];

}
oright.onclick=function(){
    if(num<3) {
        num++;

       change();
        otop.innerHTML = num+1  + "/" + textArr.length;
    }else if(num==srcArr.length-1){
        num=0;
        change();
        otop.innerHTML = num + 1+"/" + textArr.length;
    }
};
oleft.onclick=function(){
    if(num>0) {
        num--;
       change();
        otop.innerHTML = num  +1+ "/" + textArr.length;
    }else if(num==0){
        num=3;
        change();
        otop.innerHTML = num+1 + "/" + textArr.length;
    }
};

