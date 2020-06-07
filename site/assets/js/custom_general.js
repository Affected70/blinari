// To setup the template, change the variables below
// Follow instructions in code comments or see documentation for more detail


//  1. Configurations or Settings
//  2. Navigation on click/ on load / on hasch chage scroll to 
// 	3. Menu / Internal / Exteranl links  
//	4. General Sections
//	5. Reservation Form Start
//	6. Contact Form Start
//	7. Home page Promotions Sections
//	8. Portfolio on mouseover opactiy
//	9. Custom  Functions Section

/*****************************************************************************
 1. Configurations or Settings
 *******************************************************************************/
document.addEventListener("touchmove", preventBehavior, {passive: false});

function preventBehavior(e) {
    e.preventDefault();
}

window.mobileAndTabletCheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

$(window).resize(function(){
    var width = window.width;

    $(".specials-content>h4").forEach(function(index) {
        console.log(index + ": " + $(this).text());
    })

    $(".specials-content").css("padding-top", "10px");
});

var isMobile = window.mobileAndTabletCheck();

$(function () {
    $('#sub-nav').slicknav({
        label: '',
        duration: 1000,
        easingOpen: "easeOutQuint", //available with jQuery UI
        closeOnClick: true,
        allowParentLinks: true,
    });
});

$('#submit').click(function () {
    var ratingValue = rating_var.getRating();
    var returnError = false;

    if (ratingValue == 0 || ratingValue == null)
    {
        alert("Пожалуйста, поставьте рейтинг (1-5 звезд).");
        returnError = true;
    }

    var mail;

    if (ratingValue < 3)
    {
    /*    mail = 'affected70@yandex.ru';*/
         mail = 'svetlan-chirkova@yandex.ru';
    }
    else
    {
    /*    mail = 'affected7000@mail.ru';*/
        mail = 'blinari@mail.ru';
    }

    //Get the data from all the fields
    var name = $('input[name=name]');
    var email = $('input[name=email]');
    var phone_number = $('input[name=phone_number]');
    var comment = $('textarea[name=comment]');


    //Simple validation to make sure user entered something
    //Add your own error checking here with JS, but also do some error checking with PHP.
    //If error found, add hightlight class to the text field
    if (name.val() == '') {
        name.addClass('error');
        returnError = true;
    } else name.removeClass('error');

    if (email.val() != '' && !validateEmail(email.val())) {
        email.addClass('error');
        returnError = true;
    }
    else email.removeClass('error');

    if (comment.val() == '') {
        console.log("empty comment");
        comment.addClass('error');
        returnError = true;
    } else comment.removeClass('error');

    // Highlight all error fields, then quit.
    if (returnError == true) {
        return false;
    }

    //organize the data
    var data = 'name=' + name.val() + '&email=' + email.val() + '&phone_number=' +
        phone_number.val() + '&comment=' + encodeURIComponent(comment.val()) + '&mail=' + mail + '&rating=' + ratingValue;

    //disabled all the text fields
    $('.text').attr('disabled', 'true');

    //show the loading sign
    $('.loading').show();

    //start the ajax
    $.ajax({
        //this is the php file that processes the data and sends email
        url: "process.php",

        //GET method is used
        type: "GET",

        //pass the data
        data: data,

        //Do not cache the page
        cache: false,

        //success
        success: function (html) {
            //if process.php returned 1/true (send mail success)
            /*  if (html == 1) {*/
            //hide the form
            $('.cont_form').fadeOut('slow');

            //show the success message
            $('.done').fadeIn('slow');

            //if process.php returned 0/false (send mail failed)
            /* } else alert('Sorry, unexpected error. Please try again later.');*/
            /*} else alert(html);*/
        }
    });

    //cancel the submit button default behaviours
    return false;

});
//Scroll speed and page animation Scrollto.js parameter

var horizontal_scroll_speed = 1500 // speed Horizontal Scrollto parameter default #1200.

//animation sliding speed configure
var menu_header_speed = 300 // on sub page topbar sliding down animation default #350
var menu_main_header_speed = 600   // home page middle bar sliding down animation default #800

//Scroll speed and page animation end

//content scrollbar (niceScroll) colour
var niceScrollcursorcolor = "#f32a2a"// Set your content niceScroll color here!
var niceScrollscrollspeed = 100  // Set niceScroll speed, default value is 60
var niceScrollmousescrollstep = 80  // Set niceScroll speed with mouse wheel, default value is 40
var niceScrollsmoothscroll = true  // Set true/ false  default true
var niceScrollcursorwidth = "12px"	// Set cursor width in pixel, default is 5
var niceScrollcursorborder = 0   // Set niceScroll border color here! for example 2px solid #000000
var niceScrollcursordragontouch = true  // Enable cursor drag scrolling
var niceScrollcursorborderradius = "20px"  // Set niceScroll border radius for cursor, default is "4px"
var niceScrollautohidemode = true   // Set the niceScroll visible or hidden
var niceScrollbackground = "#e9e9e9"  // Set your niceScroll rails background color
var niceScrollhidecursordelay = 2500 // Set your niceScroll rails background color
var niceScrollhorizrailenabled = false  // Set nicescroll horizontal scroll
var rating_var;


/********************** 1. Configuration / Settings END**********************/


/******************************************************************************
 2. Navigation on click/ on load / on hasch chage scroll to
 ******************************************************************************/


// On Document Ready initialise the options 
jQuery(document).ready(function ($) {
    "use strict";


    $("#header").click(function (e) {
        e.preventDefault();
    });
    $("#mainheader").click(function (e) {
        e.preventDefault();
    });
    $(".nav-link, .out_of_menu_navigation").click(function (e) {
        e.preventDefault();
    });
//on page load show from hash index.html#about
    /*********************************************************************************/
    var url = window.location.href;
    var type = url.split('#');
    var hash = '';
    if (type.length > 1) {
        hash = type[1];
    }

    /*    if (hash != "") {
     var hash_fullname = "#" + hash;
     $("a[href='" + hash_fullname + "']").addClass('selected');
     if (hash_fullname == "#home") {
     // hiding subpage header
     $('#header').hide('fade', {direction: 'left', easing: 'easeInQuad'}, 1000);
     Animation("#header", "fadeOutUp", "200");
     }
     else {
     // hiding Home page header
     $('#mainheader').hide('fade', {direction: 'left', easing: 'easeInQuad'}, 600);
     Animation("#mainheader", "fadinUp", "200");
     }

     $('#wrapper').scrollTo(hash_fullname, 2000, {
     easing: 'easeInOutExpo', axis: 'x', onAfter: function () { // scrollto callback  function
     if (hash_fullname == "#home") { // for home page animation
     //	Homepage_Animation();
     }
     else { // sub page animation
     if ($('#header').is(':hidden')) { // if header is hidden then do animation
     Subpage_animation();
     }
     }
     } // scrollto callback function close

     });//	scrollto close
     window.location.hash = ''; // for older browsers, leaves a # behind
     history.pushState('', document.title, window.location.pathname); // nice and clean
     }// hash!="" close*/


// on click navigation 
    /*********************************************************************************/
    $('.main-nav a.nav-link,a.nav-link, .out_of_menu_navigation, .slicknav-item, .slicknav-parent').click(function () {
        var width = window.width;
        var name = $(this).attr('href');
        console.log("name: " + name);
        if (name == "#memorial")
        {
            console.log("Memorial");
            window.open("Memorial_menu.pdf");
        }
        else {

            if (name != "#")
            { // if navigation not equalt to "#"
                if (name == "#home") {
                    $('.selected').removeClass('selected');
                    $("a[href='" + name + "']").addClass('selected');
                    $('#header').hide('fade', {direction: 'left', easing: 'easeInQuad'}, 1000);
                    Animation("#header", "fadeOutUp", "200");
                }
                else {
                    if (name != "") {
                        if ("#new_events" == name) {
                            $('.selected').removeClass('selected');
                            name = '#events';
                            $("a[href='" + name + "']").addClass('selected');
                        }
                        else {
                            $('.selected').removeClass('selected');
                            $("a[href='" + name + "']").addClass('selected');
                        }

                        $('#mainheader').hide('fade', {direction: 'left', easing: 'easeInQuad'}, 600);
                        Animation("#mainheader", "fadinUp", "200");
                    }
                }

//	scrollto start
                $('#wrapper').scrollTo($(this).attr('href'), horizontal_scroll_speed, {
                    easing: 'easeInOutExpo', axis: 'x', onAfter: function () { // scrollto callback  function

                        if (name == "#home" && width > 991) { // for home page animation
                            Homepage_Animation();
                            $("a[href='#home']").addClass('selected');
                        }
                        else { // sub page animation
                            if ($('#header').is(':hidden')) {
                                Subpage_animation();
                            }
                        } // else close

                    } // scrollto callback function close

                });//	scrollto close
                window.location.hash = ''; // for older browsers, leaves a # behind
                history.pushState('', document.title, window.location.pathname); // nice and clean
            }
        }
        // if navigation not equalt to "#" end
    }); // navigation click end


    /******************    2. Navigation on click/ on load / on hasch chage scroll to END******************/


    /***************************************************
     3. Menu / Internal / Exteranl links
     ***************************************************/

// Slick navigation for mobile / tablet purpose


// on hash change 
    /*  window.onhashchange = function () {
     $('.selected').removeClass('selected');
     var hash = window.location.hash;
     if (hash != "") {
     $("a[href='" + hash + "']").addClass('selected');
     }
     }*/

// on click navigation add class selected
    $("#header ul.nav li a").click(function () {
        $('ul.nav li a').removeAttr('class');
        $(this).attr('class', 'nav-link selected');
    });


// on external and internal page link 
    /*    $('.link').click(function () {
     var name = $(this).attr('href');
     window.location.href = name;
     });*/

    $('a.external-link').click(function () {
        return !window.open(this);
    });

    $('a.internal-link').click(function () {
        var name = $(this).attr('href');
        window.location.href = name;
    });

    /******************    3. Menu / Internal / Exteranl links END******************/


    /*************************************************************
     4. General Sections
     **************************************************************/

//Preloader
    $("body").jpreLoader(
        {
            splashID: "#jSplash",
            showPercentage: 0,
            autoClose: !0
            /*showSplash: true,*/
            /*splashFunction: function () {
             /!* $("#circle").delay(1250).animate({opacity: 1}, 700, "linear");*!/
             }*/
        });
//Preloader end


// niceScroll Bar options

    // niceScroll Bar options for Desktop version
    $(".contentscroll").niceScroll({
        cursorcolor: niceScrollcursorcolor,
        scrollspeed: niceScrollscrollspeed,
        mousescrollstep: niceScrollmousescrollstep,
        smoothscroll: niceScrollsmoothscroll,
        cursorwidth: niceScrollcursorwidth,
        cursorborder: niceScrollcursorborder,
        cursordragontouch: niceScrollcursordragontouch,
        cursorborderradius: niceScrollcursorborderradius,
        autohidemode: niceScrollautohidemode,
        background: niceScrollbackground,
        hidecursordelay: niceScrollhidecursordelay,
        horizrailenabled: niceScrollhorizrailenabled
    });
/*    $(".contentscroll").mouseover(function () {
        $(".contentscroll").getNiceScroll().resize();
    });*/
// niceScroll Bar options end


//  FIT VID Video for Responsive purpose */
    $(".video_containers").fitVids();
//  FIT VID Video END */

    /*  Carousel Slider Used In Project Modal page  */
    $('.carousel').carousel({
        interval: 3000
    });
    /* Carousel Slider end */


//  Toggle Menu */


    $('.toggle-content').hide();  //hides the toggled content

    $('.toggle-link').click(function () {
        if ($(this).is('.toggle-close')) {
            $(this).removeClass('toggle-close').addClass('toggle-open').parent().next('.toggle-content')
                .slideToggle(300, function() {
                $(".contentscroll").getNiceScroll().resize();
                $(".menuscroll").getNiceScroll().resize();
                $('#scrolldynamic').getNiceScroll().resize();
            });
            return false;
        }

        else {
           /* if (!isMobile) {*/
                $(this).removeClass('toggle-open')
                    .addClass('toggle-close')
                    .parent()
                    .next('.toggle-content')
                    .slideToggle(300, function() {
                        $(".contentscroll").getNiceScroll().resize();
                        $(".menuscroll").getNiceScroll().resize();
                        $('#scrolldynamic').getNiceScroll().resize();
                    });
           /* } else {
                $(this).removeClass('toggle-open')
                    .addClass('toggle-close')
                    .parent()
                    .next('.toggle-content')
                    .slideToggle(function() {
                        $(".contentscroll").getNiceScroll().resize();
                        $(".menuscroll").getNiceScroll().resize();
                        $('#scrolldynamic').getNiceScroll().resize();
                    });
            }*/

           /* $(this).removeClass('toggle-open').addClass('toggle-close').parent().next('.toggle-content').slideToggle(300);*/

            var scroll = $('.contentscroll');

            scroll.animate({
                scrollTop: this.offsetTop
            }, 2000, function () {
                scroll.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            });

            // Stop the animation if the user scrolls. Defaults on .stop() should be fine
            scroll.bind("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function (e) {
                if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "touchstart") {
                    scroll.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
                }
            });

            return false;
        }
    });


//  Toggle Menu */

// Place Holder for IE9
    $('input[type=text], textarea').placeholder();
// Place Holder for IE9


    /****************** 4. General Sections END******************/


    /*************************************************************
     8. Portfolio on mouseover opactiy
     *************************************************************/

    jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();
    jQuery("#portfolio-grid:first a[data-rel^='prettyPhoto'], .portfolio-grid:first a[data-rel^='prettyPhoto'], .events_photo:first a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'pp_default',
        slideshow: 3000,
        autoplay_slideshow: false,
        deeplinking: false
    });
    jQuery(".portfolio-grid:gt(0) a[data-rel^='prettyPhoto'], .events_photo:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        slideshow: 3000,
        deeplinking: false
    });
    jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
        custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
        changepicturecallback: function () {
            initialize();
        }
    });
    jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
        custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
        changepicturecallback: function () {
            _bsap.exec();
        }
    });

//prettyPhoto END


    //mixitup Portfolio filters
    $('#portfolio-grid, .portfolio-grid, .events_photo').mixitup({
        effects: ['fade', 'scale'],
        easing: 'snap'
    });
    $('#portfolio-grid-modal').mixitup({
        effects: ['fade', 'scale'],
        easing: 'snap'
    });
//mixitup Portfolio END


    /****************** 8. Portfolio on mouseover opactiy END******************/


    var rating_element = document.querySelector('.c-rating');
    rating_var = rating(rating_element, null, 5, null);

});
// On Document Ready initialise the options 


/*************************************************************
 9. Custom  Functions Section
 *************************************************************/

// used to show the modals
function modalshow(modalid) {
    $(modalid).modal('show');
}

// this is used add animation Class  
function Animation(element, effect, timedelay) {
    $(element).delay(timedelay).removeClass().addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
};

// home page animation functions
function Homepage_Animation() {
    $('#mainheader').show('fade', {easing: 'easeInQuad'}, menu_main_header_speed); //on homepage topbar sliding up animation
    Animation("#mainheader", "fadeInUp", "200");
    Animation("#spmenu1", "fadeInRight", "300");
    Animation("#spmenu2", "fadeInRight", "800");
    Animation("#spmenu3", "fadeInRight", "5000");
    Animation("#1", "fadeInLeft", "800");
    Animation("#2", "fadeInUp", "1800");
    Animation("#3", "fadeInDown", "800");
    Animation("#4", "fadeInLeft", "1800");
    Animation("#5", "fadeInRight", "800");
}

// sub page animation functions
function Subpage_animation() {
    Animation("#header", "fadeInDown", "200");
    $('#header').show('fade', {direction: 'top', easing: 'easeInQuad'}, menu_header_speed); //on sub page topbar sliding down animation
}


/* // Progress bar animation start  */
// scroll to view element and used for bar and skills 
function isScrolledIntoView(elem) {
    var docViewTop = jQuery(window).scrollTop();
    var docViewBottom = docViewTop + jQuery(window).height();

    var elemTop = jQuery(elem).offset().top;
    var elemBottom = elemTop + jQuery(elem).height();

    return ((elemBottom <= (docViewBottom + jQuery(elem).height())) && (elemTop >= (docViewTop - jQuery(elem).height())));
}
// skills bar
function skillbarActive() {
    setTimeout(function () {

        jQuery('.progress-bar').each(function () {
            jQuery(this)
                .data("origWidth", jQuery(this)[0].style.width)
                .css('width', '1%').show();
            jQuery(this)
                .animate({
                    width: jQuery(this).data("origWidth")
                }, 50);
        });

        jQuery('.progress-bar .dot').each(function () {
            var me = jQuery(this);
            var perc = me.attr("data-percentage");

            var current_perc = 0;

            var progress = setInterval(function () {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.text((current_perc) + '%');
                }
            }, 10);
        });
    }, 10);
}

/* // Progress bar animation end  */

// resize panel function
$(window).resize(function () {
    resizePanel();
});

function resizePanel() {
    width = $(window).width();
    height = $(window).height();

    mask_width = width * $('.item').length;

    $('#debug').html(width + ' ' + height + ' ' + mask_width);

    $('#wrapper, .item').css({width: width, height: height});
    $('#mask').css({width: mask_width, height: height});
    $('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}
$(window).load(function () {
    var theWindow = $(window),
        $bg = $(".bg"),
        aspectRatio = $bg.width() / $bg.height();

    /* function resizeBg() {

     if ((theWindow.width() / theWindow.height()) < aspectRatio) {
     /!* $bg
     .removeClass()
     .addClass('bgheight');*!/
     } else {
     /!*$bg
     .removeClass()
     .addClass('bgwidth');*!/
     }
     } */

    theWindow.resize(function () {
        /*  resizeBg();*/
    }).trigger("resize");

    var width = window.width;

    if (width <= 800) {
        document.getElementById("map_canvas").remove();
    }


    var appCache = window.applicationCache;
    appCache.update();

});

/*   Spmenu video Stop On Click Close Button  */

$('button.close').click(function () {
    video_containers = $('.video_containers');
    video_containers.html(video_containers.html());
});

$('.modal').click(function () {
    video_containers = $('.video_containers');
    video_containers.html(video_containers.html());
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isPhoneLengthEnough(phoneNumber) {
    return phoneNumber.length == 11;
}

function validateOnlyNumbers(phoneNumber) {
    var theEvent = phoneNumber || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var phone_number = $('input[name=phone_number]').val();
    var regex = /[0-9]|\./;
    if (!regex.test(key) || isPhoneLengthEnough(phone_number)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


/*$('#submit33').click(function () {
    console.log('WTF?');
    var ratingValue = rating_var.getRating();
    var returnError = false;

    if (ratingValue == 0 || ratingValue == null)
    {
        alert("Пожалуйста, поставьте рейтинг (1-5 звезд).");
        returnError = true;
    }

    var mail;

    if (ratingValue < 3)
    {
        mail = 'affected70@yandex.ru';
       /!* mail = 'svetlan-chirkova@yandex.ru';*!/
    }
    else
    {
        /!*mail = 'affected7000@mail.ru';*!/
        mail = 'blinari@mail.ru';
    }

    //Get the data from all the fields
    var name = $('input[name=name]');
    var email = $('input[name=email]');
    var phone_number = $('input[name=phone_number]');
    var comment = $('textarea[name=comment]');


    //Simple validation to make sure user entered something
    //Add your own error checking here with JS, but also do some error checking with PHP.
    //If error found, add hightlight class to the text field
    if (name.val() == '') {
        name.addClass('error');
        returnError = true;
    } else name.removeClass('error');

    if (email.val() != '' && !validateEmail(email.val())) {
        email.addClass('error');
        returnError = true;
    }
    else email.removeClass('error');

    if (comment.val() == '') {
        console.log("empty comment");
        comment.addClass('error');
        returnError = true;
    } else comment.removeClass('error');

    // Highlight all error fields, then quit.
    if (returnError == true) {
        return false;
    }

    //organize the data
    var data = 'name=' + name.val() + '&email=' + email.val() + '&phone_number=' +
        phone_number.val() + '&comment=' + encodeURIComponent(comment.val()) + '&mail=' + mail + '&rating=' + ratingValue;

    //disabled all the text fields
    $('.text').attr('disabled', 'true');

    //show the loading sign
    $('.loading').show();

    //start the ajax
    $.ajax({
        //this is the php file that processes the data and sends email
        url: "process.php",

        //GET method is used
        type: "GET",

        //pass the data
        data: data,

        //Do not cache the page
        cache: false,

        //success
        success: function (html) {
            //if process.php returned 1/true (send mail success)
            /!*  if (html == 1) {*!/
            //hide the form
            $('.cont_form').fadeOut('slow');

            //show the success message
            $('.done').fadeIn('slow');

            //if process.php returned 0/false (send mail failed)
            /!* } else alert('Sorry, unexpected error. Please try again later.');*!/
            /!*} else alert(html);*!/
        }
    });

    //cancel the submit button default behaviours
    return false;

});*/


//map click

/*   Spmenu video Stop On Click Close Button  */

/******************  9. Custom  Functions Section END******************/
