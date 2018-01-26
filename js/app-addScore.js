var AddScore = {};

$(function () {
    $('#add_score').submit(function(ev) {
        console.log('submit');
        ev.preventDefault();
        var team = $('#team').val();
        var game = $('#game').val();
        var score = $('#score').val();
        var response = AddScore.addScore(getCookie('username'),getCookie('password'),team,game,score);
        // this.submit();
    });
});


AddScore.addScore = function (username,password,team,game,score) {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://valianz.ml:8080/api/updateData",
        "method": "POST",

        "headers": {
            "Authorization": "Basic "+btoa(username + ":" + password),
            "content-type":"application/json"
        },
        "data": "{\"requestType\":2,\"teamID\":"+team+",\"gameID\":"+game+",\"score\":"+score+"}"

    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    $.ajax(settings).fail(function (error) {
        console.log(error);
    });
};


AddScore.getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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
