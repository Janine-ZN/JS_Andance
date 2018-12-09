function ajax(url, type, callback) {
    return new Promise(function (open,err) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (Math.random()<0.7){// 模拟出错
                callback(xhr.responseText);// ajax 的最后一步
                open("承接上一个请求获取的data");// 打开开关
            }else{
                err("有人跌倒了！");
            }
        }
    };
    xhr.open(type, url, true);
    xhr.send(null);
    })
}