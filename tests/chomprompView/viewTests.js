define([
        'chai',
        'mocha',
        'sinon',
        'sinonChai',
        'chomprompView/view',
        'sinonSpy'
    ],
    function (chai, mocha, sinon, sinonChai, ChomprompView) {

        'use strict';

        var should = chai.should();

        chai.use(sinonChai);
        mocha.setup('bdd');

        describe('chomprompView', function() {
            it('should exist', function() {
                should.exist(new ChomprompView());
            });
        });
    });