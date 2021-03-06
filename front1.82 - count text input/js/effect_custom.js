(function($) {
    $.fn.charCounter = function(max, settings) {
        
        max = max || 100;
        settings = $.extend({
            container: "<span></span>",
            classname: "charcounter",
            format: "(Còn %1 ký tự)",
            pulse: true,
            delay: 0
        }, settings);

        var p, timeout;

        function count(el, container) {
            el = $(el);
            if (el.val().length > max) {
                el.val(el.val().substring(0, max));
                if (settings.pulse && !p) {
                    pulse(container, true);
                };
            };

            if (settings.delay > 0) {
                if (timeout) {
                    window.clearTimeout(timeout);
                }

                timeout = window.setTimeout(function() {
                    container.html(settings.format.replace(/%1/, (max - el.val().length)));
                }, settings.delay);
            } else {
                container.html(settings.format.replace(/%1/, (max - el.val().length)));
            }
        };

        function pulse(el, again) {
            if (p) {
                window.clearTimeout(p);
                p = null;
            };
            el.animate({ opacity: 0.1 }, 100, function() {
                $(this).animate({ opacity: 1.0 }, 100);
            });

            if (again) {
                p = window.setTimeout(function() {
                    pulse(el)
                }, 200);
            };
        };

        return this.each(function() {
            var container;
            // if (!settings.container.match(/^<.+>$/)) {
                // container = $(settings.container);
                container = settings.container;
            // } else {
            //     console.log(settings.classname)
            //     // $(this).next("." + settings.classname).remove();
            //     container = $(settings.container).insertAfter(this).addClass(settings.classname);
            // }

            $(this).unbind(".charCounter").bind("keydown.charCounter", function() {
                    count(this, container);
                })

                .bind("keypress.charCounter", function() {
                    count(this, container);
                })

                .bind("keyup.charCounter", function() {
                    count(this, container);
                })

                .bind("focus.charCounter", function() {
                    count(this, container);
                })

                .bind("mouseover.charCounter", function() {
                    count(this, container);
                })

                .bind("mouseout.charCounter", function() {
                    count(this, container);
                })

                .bind("paste.charCounter", function() {
                    var me = this;
                    setTimeout(function() {
                        count(me, container);
                    }, 10);

                });

            if (this.addEventListener) {
                this.addEventListener('input', function() {
                    count(this, container);
                }, false);
            };
            count(this, container);
        });
    };

})(jQuery);
$(function() {
    $(".counted").charCounter(100, { container: $(this).find(".pull-right") });
});