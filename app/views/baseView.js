define(['masseuse', 'velocity'], function (masseuse) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        render: render
    });

    function render() {
        _fade.call(this);
        masseuse.plugins.rivets.RivetsView.prototype.render.apply(this, arguments);
    }

    function _fade() {
        this.$el.velocity('fadeIn', { duration: 300 });
    }

});