var DataInterface = {};

$(function () {
    DataInterface.binder()
    DataInterface.test()
});


DataInterface.binder = function () {

};


DataInterface.test = function () {
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