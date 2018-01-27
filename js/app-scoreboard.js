var scoreboard = {states: {}, timeouts: {}};
$(function () {
    scoreboard.binder();
});

scoreboard.binder = function () {
    $('#scoreboard, #scorelist').on('click', '.score-item', function () {
        var detailPanel = $(this).next('.team-detail');
        var itemId = $(this).attr('id');
        if (!scoreboard.states[itemId]) {
            detailPanel.stop().slideDown();
            scoreboard.states[itemId] = true;
            scoreboard.timeouts[itemId] = setTimeout(function () {
                detailPanel.stop().slideUp();
                scoreboard.states[itemId] = false;
            }, 4000)
        } else {
            detailPanel.stop().slideUp();
            scoreboard.states[itemId] = false;
            clearTimeout(scoreboard.timeouts[itemId]);
        }

    })
};

scoreboard.getScores = function (username,password,callback) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://valianz.ml:8080/api/requestDatax",
        "method": "POST",

        "headers": {
            "Authorization": "Basic dXNlcjpwYXNzd29yZA==",
            "content-type":"application/json"
        },
        "data": "{\"requestType\":1}"

    };

    $.ajax(settings).done(function (response) {
        console.log(JSON.parse(response));
        var scores = JSON.parse(response).teamInformation;
        scores.sort(compare);
        callback(scores);

    });

    $.ajax(settings).fail(function (error) {
        console.log(error);
    });

};

function compare(a,b) {
    if (a.teamScore > b.teamScore)
        return -1;
    if (a.teamScore < b.teamScore)
        return 1;
    return 0;
}
