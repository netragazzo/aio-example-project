const chai = require('chai');
const assert = chai.assert;

const math = require('../src/math');

describe('math', function(done) {
    it('should add 2+2 and get 4', function(done) {
        assert.equal(math.add({a: 2,b: 2}), 4);
        done();
    });

    it('should subtract 5-2 and get 3', function(done) {
        assert.equal(math.subtract({a: 5, b: 2}), -3);
        done();
    });

    it('should find interval between 2018-01-01 and 2018-01-02 as 1 day', function(done) {
        math.interval({a: '2018-01-01', b: '2018-01-02'})
            .then(result => {
                assert(result, 'a day ago');
                done();
            })
    });
});