(function() {
    window.myajax = function(method, url, data, callback) {

        var xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(data);

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 & this.status == 200) {
                var resdata = this.responseText;
                var dataObj = JSON.parse(resdata);
                callback(dataObj)
            }
        }

    }
})()