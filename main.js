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

function makeDeferredCall(time, fn) {
    setTimeout(function() {
        fn(secondsOrMinutes(time));
    },time);
}

function execFns(millis, fns) {
    makeDeferredCall(millis, fns.pop());
    if (fns.length > 0) {
        for (var i = 0; i < fns.length; i++) {
            makeDeferredCall(millis/(Math.pow(2,i+1)),fns[i]);
        }
    }
}

module.exports = {
    time: function(time, fns) {
        var millis = convertToMillis(time);
        execFns(millis, fns);

    }   
};
