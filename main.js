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
   fns.forEach(function(fn, index) {
        makeDeferredCall(millis/(Math.pow(2,index+1)),fn);
   });
}

module.exports = {
    time: function(time, fns) {
        var millis = convertToMillis(time);
        execFns(millis, fns);

    }   
};
