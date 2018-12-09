/* 4步：
 * 1. 查找触发事件的元素
 * 2. 绑定事件处理函数
 * 3. 查找要修改的元素
 * 4. 修改元素
 * */
var table = document.getElementById("data");
var btns = table.getElementsByTagName("button");
console.log(btns);
for (var btn of btns) {
    /************************ 以下为点击按钮进行数量加减 **************************/
    // 当 单击 一个按钮时  自动调用function
    btn.onclick = function () {
        // this ->  当前 btn
        var btn = this;
        var span = btn.parentNode.children[1];
        console.log(span);
        var n = parseInt(span.innerHTML);
        if (btn.innerHTML === "+")
            n++;
        else if (n > 1)
            n--;
        span.innerHTML = n;
        /************************ 以上为数量加减 **************************/

        /************************ 以下为小计变化 **************************/
        var price = parseFloat(
            btn.parentNode  // 当前 td
                .previousElementSibling // 前一个 td
                .innerHTML  // ￥¥xxxx.xx
                .slice(1)   // xxxx.xx
        );

        var subtotal = price * n;
        btn.parentNode.nextElementSibling.innerHTML
            = "￥" + subtotal.toFixed(2);
        /************************ 以下为小计总价 **************************/
        var tds = document.querySelectorAll("table>tbody>tr>td:last-child");
        var total = 0;
        for (var td of tds) {
            total += parseFloat(td.innerHTML.slice(1));
        }
        document.querySelector(
            "table>tfoot>tr>td:last-child"
        ).innerHTML = "￥" + total.toFixed(2);
        /************************ 以上为小计总价 **************************/
        /************************ 以上为小计变化 **************************/
    }


}


