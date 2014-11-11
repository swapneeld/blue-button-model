"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/procedure');

var expect = chai.expect;

describe('procedure unit tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validateComponent(samples.valid_0, 'procedure');
        expect(valid).to.be.true;
    });

    it('sample valid_1', function () {
        var valid = bbm.validator.validateComponent(samples.valid_1, 'procedure');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validateComponent(samples.invalid_0, 'procedure');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        expect(result.errors).to.have.length(4);
        var c2p = util.errorsToCodePathMap(result.errors);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(2);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.deep.equal(["#/", "#/specimen"]);
        expect(c2p.OBJECT_REQUIRED).to.have.length(2);
        expect(c2p.OBJECT_REQUIRED).to.deep.equal(["#/", "#/date_time/point"]);
    });
});
