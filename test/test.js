var expect = require("chai").expect,
    timer = require("../main");

function createAssert(equals, done) {
    return function(arg) {
        expect(arg).to.be.equal(equals);
        done();
    };
}

describe("Main test set", function() {
    
    it("Executes first callback on 30s when minute given", function(done) {
        this.timeout(31000);
        var assert = createAssert("30s", done);

        timer.time(1, [
            assert,
            function() {},
            function() {}
        ]);
    });

    it("Executes second call back on 15s when minute is given", function(done) {
        this.timeout(46000);
        var assert = createAssert("15s", done);
        timer.time(1, [
            function() {},
            assert,
            function() {},
        ]);
    });
    
    it("Executes third callback on 1m when minute is given, return original value in minutes", function(done) {
        this.timeout(61000);
        var assert = createAssert("60s", done);
        timer.time(1, [
            function() {},
            function() {},
            assert
        ]);
    });
    
    
});
