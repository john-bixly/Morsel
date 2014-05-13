define([
        'chai',
        'mocha',
        'sinon',
        'sinonChai',
        'views/main/view',
        'sinonSpy'
    ],
    function (chai, mocha, sinon, sinonChai, MainView) {

        'use strict';

        var should = chai.should();

        chai.use(sinonChai);
        mocha.setup('bdd');

        describe('MainView', function() {
            it('should exist', function() {
                should.exist(new MainView());
            });
        });
    });