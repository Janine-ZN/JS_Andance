function ajax(url, type, callback) {
    return new Promise(function (open) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
            open();
        }
    };
    xhr.open(type, url, true);
    xhr.send(null);
    })
}