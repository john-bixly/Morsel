define(['jquery'], function ($) {
    return {
        clickargs: {
            bind: function (el) {
                view = this.view.models.view;
                keypath = this.keypath;

                if (view && keypath) {
                    var args = keypath.split(' ');
                    var modelFunction = args.shift();
                    args.splice(0, 0, view);

                    var fn = view[modelFunction.split('.')[1]];
                    if (typeof(fn) == "function") {
                        this.callback = function (e) {
                            var params = args.slice();
                            params.splice(0, 0, e);
                            params.splice(1, 1);
                            fn.apply(view,params);
                        }

                        $(el).on('click', this.callback);
                    }
                }
            },


            unbind: function (el) {
                $(el).off('click', this.callback);
            },

            routine: function (el, value) {

            }
        }
    };


});
