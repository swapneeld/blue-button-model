"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/section/procedures');

var expect = chai.expect;

describe('procedures section tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validateSection(samples.valid_0, 'procedures');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validateSection(samples.invalid_0, 'procedures');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        var al = util.errorsToArrayIndices(result.errors);
        expect(al).to.deep.equal([1]);
    });
});
