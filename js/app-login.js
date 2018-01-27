var Login = {};

$(function () {
    $('#login').submit(function (ev) {
        console.log('submit');
        ev.preventDefault();
        var username = $('#email').val();
        var password = $('#pwd').val();
        Login.check(username, password);
    });
});


Login.check = function (username, password) {
    document.cookie = "username=" + username + ";expires=Thu, 01 Feb 2018 00:00:00 UTC; path=/;";
    document.cookie = "password=" + password + ";expires=Thu, 01 Feb 2018 00:00:00 UTC; path=/;";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://valianz.ml:8080/api/auth/user",
        "method": "GET",
        "headers": {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }
    };

    $.ajax(settings).done(function (response) {
        alert("Log in successful!");
        // window.location = "valianz2018/admin/add_score"
        window.location = "/add-score"
    });

    $.ajax(settings).fail(function (error) {
        alert("Wrong credentials!");
    })
};


Login.getUser = function () {
    var username = getCookie('username');
    var password = getCookie('password');
    return [username, password];
};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
