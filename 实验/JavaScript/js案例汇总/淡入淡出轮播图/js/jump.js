//跳转下一张图片函数
function goNext() {
    index = (++index) % 5;
    // console.log("此时的index值为", index)
    items[index].className = "item imgActive"
    navitems[index].className = "nav_item navActive"
}

//跳转下一张图片函数
function goPre() {
    index = (--index + 5) % 5;
    // console.log("此时的index值为", index)
    items[index].className = "item imgActive";
    navitems[index].className = "nav_item navActive"
}


function jump(thisXX) {
    var navIndex = thisXX.getAttribute("data-index")
    console.log(navIndex);
    index = navIndex; //重新赋值index
    items[index].className = "item imgActive"; //图片激活
    thisXX.className = "nav_item navActive"
}

//清空所有的类
function clearClass() {
    for (var i = 0; i < items.length; i++) { //清除items的class
        items[i].className = "item";
    }
    for (var j = 0; j < navitems.length; j++) { //清除navitems的class
        navitems[j].className = "nav_item";
    }
}