function convertToMillis(minutes) {
    return minutes * 60000;
}

function toMinutes(millis) {
    return millis / 60000;
}

function toSeconds(millis) {
    return millis / 1000;
}

function secondsOrMinutes(millis) {
    if (millis > 60000) {
        return toMinutes(millis) + "m"; 
    }
    return toSeconds(millis)+ "s";
}

module.exports = {
    time: function(time, fns) {
        var millis = convertToMillis(time);

        setTimeout(function() {
            fns[0](secondsOrMinutes(millis/2));
        }, millis/2);

        setTimeout(function() {
            fns[1](secondsOrMinutes(millis/4));
        }, millis/4);
        
        setTimeout(function() {
            fns[2](secondsOrMinutes(millis));
        }, millis);


    }   
};
