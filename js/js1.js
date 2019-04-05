window.onload=fn;
function fn() {
    var A = document.getElementById("TagA");
    var lis = document.getElementsByClassName("lis");
    A.onmouseover = show;

    function show() {
        A.style.background = "lightblue";
        for (var i = 0; i <lis.length; i++) {
            lis[i].style.display = "block";
        }
    }

    A.onmouseout = hide;

    function hide() {
        A.style.background = "white";
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.display = "none";
        }
    }
}