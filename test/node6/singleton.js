'use strict';

const Code = require('code');
const Lab = require('lab');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const BunnyBus = require('../../lib');

describe('singleton', () => {

    it('should generate an instance of BunnyBus', () => {

        const instance = new BunnyBus();

        expect(instance).to.be.an.instanceof(BunnyBus);
    });

    it('should generate the same instance when instantiated twice', () => {

        const instance1 = new BunnyBus();
        const instance2 = new BunnyBus();

        expect(instance1).to.shallow.equal(instance2);
    });
});
