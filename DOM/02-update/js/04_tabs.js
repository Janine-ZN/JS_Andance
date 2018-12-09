document.getElementById("content1").style.zIndex=10;
var tabs = document.querySelectorAll("[data-toggle=tab]");
for (var tab of tabs) {
    tab.onclick = function () {
        var tab = this;
        // 查找 id 为container 下所有 div
        var divs = document.getElementById("container").children;
        // 遍历并清除所有 div 的 zIndex 属性
        for (var div of divs) {
            div.style.zIndex = "";
        }
        var id = tab.getAttribute("data-target");// #xxxx
        // tab.dataset.target   // #xxxx
        var div = document.querySelector(id);
        div.style.zIndex = 10;
    }
}