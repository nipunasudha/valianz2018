var scoreboard = {states: {}, timeouts: {}};
$(function () {
    scoreboard.binder();
});

scoreboard.binder = function () {
    $('#scoreboard').on('click', '.score-item', function () {
        var detailPanel = $(this).next('.team-detail');
        var itemId = $(this).attr('id');
        if (!scoreboard.states[itemId]) {
            detailPanel.slideDown();
            scoreboard.states[itemId] = true;
            scoreboard.timeouts[itemId] = setTimeout(function () {
                detailPanel.slideUp();
                scoreboard.states[itemId] = false;
            }, 4000)
        } else {
            detailPanel.slideUp();
            scoreboard.states[itemId] = false;
            clearTimeout(scoreboard.timeouts[itemId]);
        }

    })
};