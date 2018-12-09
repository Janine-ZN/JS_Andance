// 获取 全选 的复选框
var chbAll = document.querySelector("table>thead>tr>th:first-child>input");
// 点击 全选 影响后面 td 中的复选框
chbAll.onclick = function () {
    var chbAll = this;
    var chbs = document.querySelectorAll("table>tbody>tr>td:first-child>input");
    for (var chb of chbs) {
        // 如果点 全选 ，全选复选框被选中，则让所有 tbody中的复选框 也被选中
        chb.checked = chbAll.checked;
    }
}
/** 存在一个问题 ： 如果添加再添加一行，添加的行中复选框没有？？？？？？？（怎么加的一行？？？） **/
// 获取 tbody 中的 每一行中第一个单元格
/*var chbs = document.querySelectorAll("table>tbody>tr>td:first-child>input");
for (var chb of chbs) {
    chb.onclick = function () {
        var chb = this;
        if (chb.checked == false)
            chbAll.checked = false;
        else {  // 尝试查找 tbody 下未选中的 chb
            var unchecked = document.querySelector("table>tbody>tr>td:first-child>input:not(:checked)");
            if (unchecked != null)// 如果找到
                chbAll.checked = false;
            else // 否则
                chbAll.checked = true;
        }
    }
}*/
/** 代码优化：事件冒泡 **/
var tbody = document.querySelector("table>tbody")
tbody.onclick = function (e) { // 事件冒泡
    if (e.target.type == "checkbox"){
        var chb = e.target;
        if (chb.checked == false)
            chbAll.checked = false;
        else {  // 尝试查找 tbody 下未选中的 chb
            var unchecked = document.querySelector("table>tbody>tr>td:first-child>input:not(:checked)");
            if (unchecked != null)// 如果找到
                chbAll.checked = false;
            else // 否则
                chbAll.checked = true;
        }
    }
}


