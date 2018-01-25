var Login = {};

$(function () {

});


Login.check = function (username,password) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://valianz.ml/valianz2018/login/addUser.php",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache"
        },
       "data": {"username":username,"password":password}
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
};


Login.test = function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://valianz.ml:9393/api/auth/user",
        "method": "GET",
        "headers": {
            "Authorization": "Basic dXNlcjpwYXNzd29yZA==",
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400"
        }
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
};
