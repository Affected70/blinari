(function(){
    "use strict";

    $(function ($) {
        $("body").vegas({
            slides: [
                {src: "img/background/bg_1.jpg"},
                {src: "img/background/bg_3.jpg"},
                {src: "img/background/123.jpg"},
                {src: "img/background/321.jpg"}
            ],
            transition: [ 'fade'],
            transitionDuration: 3000,
            /*  animation: 'kenburnsUp',*/
            delay: 6000
        });
    });
// $(function ($)  : ends

})();
