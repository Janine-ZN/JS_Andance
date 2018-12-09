var spans = document.querySelectorAll("ul.tree>li>span.open");
for (var span of spans) {
    span.onclick = function () {
        var span = this;
        if (span.className == "open")
            span.className = ""   // 将自己关上
        else {
            var openSpan = document.querySelector("ul.tree>li>span.open");
            if (openSpan != null)// 如果找到
                openSpan.className = "";// 就关闭其他
            span.className = "open"; // 再打开自己
        }

    }

}
