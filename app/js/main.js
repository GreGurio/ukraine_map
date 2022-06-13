$(function() {

    $('.source__item').on('click', function() {
        if ($(this).hasClass('source__item--active')) {
            $('.source__item').removeClass('source__item--active');
        } else {
            $('.source__item').removeClass('source__item--active');
            $(this).addClass('source__item--active');
        }
    });

    $('.source__accordion-header').on('click', function() {
        if ($(this).parent().hasClass('source__accordion--active')) {
            $('.source__accordion').removeClass('source__accordion--active');
        } else {
            $('.source__accordion').removeClass('source__accordion--active');
            $(this).parent().addClass('source__accordion--active');
        }
    });

    //////////////////////////////////////////////////////////////////////////////////
    /////////////////DISTRICT SOURCES SLIDER/////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    $('.slider').slick({
        slidesToShow: 10,
        prevArrow: '<button type="button" class="slick-prev"><svg width="23" height="61" viewBox="0 0 23 61" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="2.40366" y1="30.2352" x2="20.2352" y2="2.59634" stroke="black" stroke-width="4" stroke-linecap="round" /><line x1="2" y1="-2" x2="34.8917" y2="-2"transform="matrix(0.542127 0.840297 0.840297 -0.542127 3 28)" stroke="black" stroke-width="4"stroke-linecap="round" /></svg ></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="23" height="61" viewBox="0 0 23 61" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="-2" x2="34.8917" y2="-2" transform="matrix(-0.542127 -0.840297 -0.840297 0.542127 20 33)" stroke="black" stroke-width="4" stroke-linecap="round" /><line x1="20.5963" y1="30.7648" x2="2.76485" y2="58.4037" stroke="black" stroke-width="4"stroke-linecap="round" /></svg ></button>',
    
    });

    ///////////////////////////////////////////////////////////////////////////////
    ////////////////////////////SLIDER FILTER/////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    function sliderFilter($filter_name) {
        $('.slider').slick('slickUnfilter');
        $('.slider').slick('slickFilter', function () { return $($filter_name, this).length === 1; });
    }

    $('.zakarpatska').on('click', function() {
        sliderFilter('.zakarpatska');
    });
    $('.lvivska').on('click', function () {
        sliderFilter('.lvivska');
    });
    $('.volynska').on('click', function () {
        sliderFilter('.volynska');
    });
    $('.ivano-frankivska').on('click', function() {
        sliderFilter('.ivano-frankivska');
    });
    $('.ternopilska').on('click', function() {
        sliderFilter('.ternopilska');
    });
    $('.chernivetska').on('click', function() {
        sliderFilter('.chernivetska');
    });
    $('.rivnenska').on('click', function() {
        sliderFilter('.rivnenska');
    });
    $('.khmelnytska').on('click', function() {
        sliderFilter('.khmelnytska');
    });
    $('.zhytomyrska').on('click', function() {
        sliderFilter('.zhytomyrska');
    });
    $('.vinnytska').on('click', function() {
        sliderFilter('.vinnytska');
    });
    $('.kyivska').on('click', function() {
        sliderFilter('.kyivska');
    });
    $('.odeska').on('click', function() {
        sliderFilter('.odeska');
    });
    $('.cherkaska').on('click', function() {
        sliderFilter('.cherkaska');
    });
    $('.kirovogradska').on('click', function() {
        sliderFilter('.kirovogradska');
    });
    $('.mykolayivska').on('click', function() {
        sliderFilter('.mykolayivska');
    });
    $('.chernigivska').on('click', function() {
        sliderFilter('.chernigivska');
    });
    $('.sumska').on('click', function() {
        sliderFilter('.sumska');
    });
    $('.poltavska').on('click', function() {
        sliderFilter('.poltavska');
    });
    $('.dniprovska').on('click', function() {
        sliderFilter('.dniprovska');
    });
    $('.khersonska').on('click', function() {
        sliderFilter('.khersonska');
    });
    $('.krym').on('click', function() {
        sliderFilter('.krym');
    });
    $('.kharkivska').on('click', function() {
        sliderFilter('.kharkivska');
    });
    $('.zaporizka').on('click', function() {
        sliderFilter('.zaporizka');
    });
    $('.donetska').on('click', function() {
        sliderFilter('.donetska');
    });
    $('.lughanska').on('click', function() {
        sliderFilter('.lughanska');
    });




    ///////////////////////MIXER FOR NEWS///////////////
    var mixer = mixitup('.news__items', {
        selectors: {
            target: '.news__item',
            control: '.main__district'
        },
        animation: {
           enable: false
        }
    });
    ///////////////////////////MIXER FOR OFFICIAL SOURCES//////////
    var mixer_official_sources = mixitup('.sources-official-list', {
        selectors: {
            target: '.source__item',
            control: '.menu__item-button'
        },
        animation: {
            enable: false
        }
    });
    ///////////////////////////MIXER FOR TELEGRAM CHANNELS//////////
    var mixer_official_sources = mixitup('.telegram-channels-list__items', {
        selectors: {
            target: '.telegram-channels-list__item',
            control: '.telegram-list__item'
        },
        animation: {
            enable: false
        }
    });

    ///////////////////SOURCES BY DISTRICTS////////////////////////
    $('.district-sources__close').on('click', function() {
        $('.district-sources').addClass('district-sources--hidden');
    });
    $('.district-sources__unclose').on('click', function() {
        $('.district-sources').removeClass('district-sources--hidden');
    });
   

    //////////////////MAIN MENU/////////////////////////////////////
    $('.main__menu-icon').on('click', function () {
        $('.main__menu-icon').toggleClass('main__menu-icon--active');
        $('.main__menu').toggleClass('menu--active');
    });

    //////////////////////////MESSAGE////////////////////////////////
    $('.message__close').on('click', function() {
        $(this).parent().removeClass('message--active');
        document.cookie = "if_message_seen=" + true;
    });

    /////////////////////////////////////////////////////////////////////////
    ////////////////////////////////MAIN MENU////////////////////////////////
    /////////////////////////////////////////////////////////////////////////



    ///////////////////////////CONTROL HOURS/////////////////////////
    $('.control-hours-button').on('click', function() {
        $('.control-hours').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.control-hours__close').on('click', function () {
        $('.control-hours').removeClass('menu--active');
        $('.main__menu').addClass('menu--active');
    });

    ///////////////////////////INFO/////////////////////////
    $('.info-button').on('click', function () {
        $('.info').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.info__close').on('click', function () {
        $('.info').removeClass('menu--active');
        $('.main__menu').addClass('menu--active');
    });
    //-------------------INFO ITEM-------------------------
    $('.info__item').on('click', function () {
        $(this).toggleClass('info__item--active');
    });

    ///////////////////////////SOURCES/////////////////////////
    $('.sources-button').on('click', function () {
        $('.sources').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.sources__close').on('click', function () {
        $('.sources').removeClass('menu--active');
        $('.main__menu').addClass('menu--active');
    });

    ///////////////////////////HOW CAN I HELP/////////////////////////
    $('.how-can-i-help-button').on('click', function () {
        $('.how-can-i-help').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.how-can-i-help__close').on('click', function () {
        $('.how-can-i-help').removeClass('menu--active');
        $('.main__menu').addClass('menu--active');
    });

    ///////////////////////////NEWS/////////////////////////
    
    $('.news-button').on('click', function () {
        $('.news').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.news__close').on('click', function () {
        $('.news').removeClass('menu--active');
        if (!$('.main__district').hasClass('main__district--active')) {
            $('.main__menu').addClass('menu--active');
        }
        $('.main__district').removeClass('news--active');
        $('.map-filters').removeClass('news--active');
        $('.district-sources').removeClass('news--active');
    });

    ///////////////////////////MAPS/////////////////////////
    $('.maps-button').on('click', function () {
        $('.useful-maps').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.useful-maps__close').on('click', function () {
        $('.useful-maps').removeClass('menu--active');
        $('.main__menu').addClass('menu--active');
    });

    ///////////////////////////APPS/////////////////////////
    $('.apps-button').on('click', function () {
        $('.useful-apps').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.useful-apps__close').on('click', function () {
        $('.useful-apps').removeClass('menu--active');
        $('.main__menu').addClass('menu--active');
    });

    ///////////////////////////UNUSUAL SITUATIONS////////////////
    $('.unusual-situation-button').on('click', function () {
        $('.unusual-situations').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.unusual-situations__close').on('click', function () {
        $('.unusual-situations').removeClass('menu--active');
        $('.main__menu').addClass('menu--active');
    });
    //////////////////////////TRANSPORT////////////////
    $('.transport-button').on('click', function () {
        $('.transport').addClass('menu--active');
        $('.main__menu').removeClass('menu--active');
    });
    $('.transport__close').on('click', function () {
        $('.transport').removeClass('menu--active');
        $('.main__menu').addClass('menu--active');
    });

    
    


    /////////////////////////////////////////////////////////////////////////
    //////////////////////HOW CAN I HELP MENU////////////////////////////////
    /////////////////////////////////////////////////////////////////////////


    ////////////////////////////CYBER ATTACKS////////////////////////////////
    $('.cyber-attacks-button').on('click', function () {
        $('.cyber-attacks').addClass('menu--active');
        $('.how-can-i-help').removeClass('menu--active');
    });
    $('.cyber-attacks__close').on('click', function () {
        $('.cyber-attacks').removeClass('menu--active');
        $('.how-can-i-help').addClass('menu--active');
    });

    ///////////////////////////DONT DO//////////////////////////////////////
    $('.dont-do-button').on('click', function () {
        $('.dont-do').addClass('menu--active');
        $('.how-can-i-help').removeClass('menu--active');
    });
    $('.dont-do__close').on('click', function () {
        $('.dont-do').removeClass('menu--active');
        $('.how-can-i-help').addClass('menu--active');
    });

    ////////////////////////INFORMING///////////////////////////////////////
    $('.informing-button').on('click', function () {
        $('.informing').addClass('menu--active');
        $('.how-can-i-help').removeClass('menu--active');
    });
    $('.informing__close').on('click', function () {
        $('.informing').removeClass('menu--active');
        $('.how-can-i-help').addClass('menu--active');
    });

    ////////////////////////VOLUNTEERING////////////////////////////////////
    $('.volunteering-button').on('click', function () {
        $('.volunteering').addClass('menu--active');
        $('.how-can-i-help').removeClass('menu--active');
    });
    $('.volunteering__close').on('click', function () {
        $('.volunteering').removeClass('menu--active');
        $('.how-can-i-help').addClass('menu--active');
    });

    ///////////////////////DONATION/////////////////////////////////////////
    $('.donation-button').on('click', function () {
        $('.donation').addClass('menu--active');
        $('.how-can-i-help').removeClass('menu--active');
    });
    $('.donation__close').on('click', function () {
        $('.donation').removeClass('menu--active');
        $('.how-can-i-help').addClass('menu--active');
    });

    /////////////////////////////TEROBORONA////////////////////////////////
    $('.teroborona-button').on('click', function () {
        $('.teroborona').addClass('menu--active');
        $('.how-can-i-help').removeClass('menu--active');
    });
    $('.teroborona__close').on('click', function () {
        $('.teroborona').removeClass('menu--active');
        $('.how-can-i-help').addClass('menu--active');
    });

    /////////////////////////////ZOO HELP////////////////////////////////
    $('.zoo-help-button').on('click', function () {
        $('.zoo').addClass('menu--active');
        $('.how-can-i-help').removeClass('menu--active');
    });
    $('.zoo__close').on('click', function () {
        $('.zoo').removeClass('menu--active');
        $('.how-can-i-help').addClass('menu--active');
    });




    /////////////////////////////////////////////////////////////////////////
    //////////////////////SOURCES////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////



    ///////////////////////////OFFICIAL/////////////////////////////////////
    $('.official-button').on('click', function () {
        $('.sources-official').addClass('menu--active');
        $('.sources').removeClass('menu--active');
    });
    $('.sources-official__close').on('click', function () {
        $('.sources-official').removeClass('menu--active');
        $('.sources').addClass('menu--active');
    });

    ////////////////////////TELEGRAM CHANNELS///////////////////////////////////
    $('.telegram-channels-button').on('click', function () {
        $('.telegram-list').addClass('menu--active');
        $('.sources').removeClass('menu--active');
    });
    $('.telegram-list__close').on('click', function () {
        $('.telegram-list').removeClass('menu--active');
        $('.sources').addClass('menu--active');
    });

    $('.telegram-list__item').on('click', function () {
        $('.telegram-channels-list').addClass('menu--active');
        $('.telegram-list').removeClass('menu--active');
    });
    $('.telegram-channels-list__close').on('click', function () {
        $('.telegram-channels-list').removeClass('menu--active');
        $('.telegram-list').addClass('menu--active');
    });

    ///////////////////////////GOVERNMENT/////////////////////////////////////
    $('.government-button').on('click', function () {
        $('.government').addClass('menu--active');
        $('.sources-official').removeClass('menu--active');
    });
    $('.government__close').on('click', function () {
        $('.government').removeClass('menu--active');
        $('.sources-official').addClass('menu--active');
    });


    //////////////////////////MASS MEDIA/////////////////////////////////////


    ///////////////////////////OFFICAIL SOURCES LIST/////////////////////////////////////
    $('.sources-official-list-button').on('click', function () {
        $('.menu').removeClass('menu--active');
        $('.sources-official-list').addClass('menu--active');
    });
    $('.sources-official-list__close').on('click', function () {
        if ($(this).hasClass('mass-media__close')) {
            $(this).removeClass('mass-media__close');
            $('.sources-official-list').removeClass('menu--active');
            $('.sources').addClass('menu--active');
        } else {
            $('.sources-official-list').removeClass('menu--active');
            $('.sources-official').addClass('menu--active');
        }
    });
    //////////////////////////MASS MEDIA/////////////////////////////
    $('.mass-media-button').on('click', function() {
        $('.menu').removeClass('menu--active');
        $('.sources-official-list').addClass('menu--active');
        $('.sources-official-list__close').addClass('mass-media__close');
    });







    
    




    /////////////////////////////////////////////////////////////////////////
    //////////////////////TRANSPORT//////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////

    ////////////////////////UKRZALIZNYTSYA///////////////////////////////////
    $('.ukrzaliznytsya-button').on('click', function () {
        $('.ukrzaliznytsya').addClass('menu--active');
        $('.transport').removeClass('menu--active');
    });
    $('.ukrzaliznytsya__close').on('click', function () {
        $('.ukrzaliznytsya').removeClass('menu--active');
        $('.transport').addClass('menu--active');
    });
    ////////////////////////UKRZALIZNYTSYA///////////////////////////////////
    $('.hum-ways-button').on('click', function () {
        $('.hum-ways').addClass('menu--active');
        $('.transport').removeClass('menu--active');
    });
    $('.hum-ways__close').on('click', function () {
        $('.hum-ways').removeClass('menu--active');
        $('.transport').addClass('menu--active');
    });

    /////////////////////////////////////////////////////////////////////////
    //////////////////////APPS////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////


    //////////////////////KYIV CYFROVIY///////////////////////////////////////
    $('.kyiv-cyfroviy-button').on('click', function () {
        $('.kyiv-cyfroviy').addClass('menu--active');
        $('.useful-apps').removeClass('menu--active');
    });
    $('.kyiv-cyfroviy__close').on('click', function () {
        $('.kyiv-cyfroviy').removeClass('menu--active');
        $('.useful-apps').addClass('menu--active');
    });

    //////////////////////DIIA///////////////////////////////////////
    $('.diia-button').on('click', function () {
        $('.diia').addClass('menu--active');
        $('.useful-apps').removeClass('menu--active');
    });
    $('.diia__close').on('click', function () {
        $('.diia').removeClass('menu--active');
        $('.useful-apps').addClass('menu--active');
    });


    /////////////////////////////////////////////////////////////////////////
    //////////////////////MAP FILTERS////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////



    ///////////////////MAP FILTERS MENU/////////////////////////////
    $('.map-filters__header').on('click', function() {
        $('.map-filters').toggleClass('map-filters--active');
    });
    $('.map-filters__item').on('click', function() {
        $(this).toggleClass('map-filters__item--active');
    });
    
    //////////////////////MAP FILTERS ACTIVE/////////////////////////////
    $('.big-cities-btn').on('click', function() {
        $('.main__map').toggleClass('big-cities--active');
    });
    $('.small-cities-btn').on('click', function() {
        $('.main__map').toggleClass('small-cities--active');
    });
    $('.attack-zones-btn').on('click', function() {
        $('.main__map').toggleClass('attack-zones--active');
    });
    $('.defend-zones-btn').on('click', function() {
        $('.main__map').toggleClass('defend-zones--active');
    });
    $('.districts-btn').on('click', function() {
        $('.main__map').toggleClass('districts--active');
    });
    $('.fired-cities-btn').on('click', function () {
        $('.main__map').toggleClass('fired-cities--active');
    });
    $('.borders-btn').on('click', function () {
        $('.main__map').toggleClass('borders--active');
    });
    $('.occupied-cities-btn').on('click', function () {
        $('.main__map').toggleClass('occupied--active');
    });
    $('.safe-zones-btn').on('click', function () {
        $('.main__map').toggleClass('safe-zones--active');
    });



    /////////////////////////////////////////////////////////////////////////
    ////////////////////////////////VIGETS///////////////////////////////////
    /////////////////////////////////////////////////////////////////////////



    //////////////////////////////KILLS COUNTER////////////////////////////
    $('.kills__num').counterUp({
        delay: 10,
        time: 1500
    });

    /////////////////KILLS////////////////////////////////
    $('.kills__link').on('click', function () {
        $('.kills-window').toggleClass('kills-window--active');
    });
    $('.kills-window__close').on('click', function () {
        $('.kills-window').removeClass('kills-window--active');
    });

    //////////////////KILLS WINDOW HELP/////////////////
    $('.kills-window__item').on('click', function () {
        if ($(this).hasClass('kills-window__item--active')) {
            $(this).removeClass('kills-window__item--active');
        } else {
            $('.kills-window__item').removeClass('kills-window__item--active');
            $(this).toggleClass('kills-window__item--active');
        }
    })

    //////////////////////////ZOOM////////////////////////////////////
    $('.zoom-in').on('click', function () {
        if ($('.map__wrapper').hasClass('zoom-1')) {
            $('.map__wrapper').addClass('zoom-2');
            $('.map__wrapper').removeClass('zoom-1');
        } else {
            $('.map__wrapper').addClass('zoom-1');
        }
    });
    $('.zoom-out').on('click', function () {
        if ($('.map__wrapper').hasClass('zoom-2')) {
            $('.map__wrapper').addClass('zoom-1');
            $('.map__wrapper').removeClass('zoom-2');
        } else {
            $('.map__wrapper').removeClass('zoom-1');
        }
    });

    ////////////////////THEME CHECK/////////////////////////

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    
    $('.theme-check').on('click', function() {

        if (prefersDarkScheme.matches) {
            if ($('body').hasClass('light-theme')) {
                $('.theme-check').addClass('dark--active');
                $('body').addClass('dark-theme');
                $('.theme-check').removeClass('light--active');
                $('body').removeClass('light-theme');
                var theme = 'dark';
            } else {
                $('.theme-check').removeClass('dark--active');
                $('body').removeClass('dark-theme');
                $('body').addClass('light-theme');
                $('.theme-check').addClass('light--active');
                var theme = 'light';
            }
        } else {
            if ($('body').hasClass('dark-theme')) {
                $('.theme-check').removeClass('dark--active');
                $('body').removeClass('dark-theme');
                $('body').addClass('light-theme');
                $('.theme-check').addClass('light--active');
                var theme = 'light';
            } else {
                $('.theme-check').addClass('dark--active');
                $('body').addClass('dark-theme');
                $('.theme-check').removeClass('light--active');
                $('body').removeClass('light-theme');
                var theme = 'dark';
            }
        }

        document.cookie = "theme=" + theme;
    });



    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////MAP/////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////


    ///////////////////////////////MAP CLICK//////////////////////////////////////
    $('.main__map, .dimmer').on('click', function () {
        //////////////////////VIGETS//////////////////////////////////////////
        $('.main__menu-icon').removeClass('main__menu-icon--active');
        $('.map-filters').removeClass('map-filters--active');
        $('.kills-window').removeClass('kills-window--active');
        $('.kills-window__item').removeClass('kills-window__item--active');
        //////////////////////MAIN MENU///////////////////////////////////
        $('.main__menu').removeClass('menu--active');
        //$('.news').removeClass('menu--active');
        $('.control-hours').removeClass('menu--active');
        $('.how-can-i-help').removeClass('menu--active');
        $('.sources').removeClass('menu--active');
        $('.info').removeClass('menu--active');
        $('.transport').removeClass('menu--active');
        $('.unusual-situations').removeClass('menu--active');
        $('.useful-apps').removeClass('menu--active');
        $('.useful-maps').removeClass('menu--active');
        //////////////////////////SOURCES///////////////////////////////////
        $('.telegram-channels-list').removeClass('menu--active');
        $('.sources-list').removeClass('menu--active');
        $('.sources-official').removeClass('menu--active');
        $('.sources-official-list').removeClass('menu--active');
        $('.telegram-list').removeClass('menu--active');
        $('.government').removeClass('menu--active');

        //////////////////////////HOW CAN I HELP/////////////////////////
        $('.donation').removeClass('menu--active');
        $('.cyber-attacks').removeClass('menu--active');
        $('.teroborona').removeClass('menu--active');
        $('.informing').removeClass('menu--active');
        $('.volunteering').removeClass('menu--active');
        $('.dont-do').removeClass('menu--active');
        $('.zoo').removeClass('menu--active');
        /////////////////////////TRANSPORT/////////////////////////////////////
        $('.ukrzaliznytsya').removeClass('menu--active');
        $('.hum-ways').removeClass('menu--active');
        /////////////////////////USEFUL APPS//////////////////////////////
        $('.diia').removeClass('menu--active');
        $('.kyiv-cyfroviy').removeClass('menu--active');


    });
    //////////////////////////////DIMMER CLICK//////////////////////////////////////////////
    $('.dimmer').on('click', function () {
        $('.main__district').removeClass('main__district--active');
        $('.dimmer').removeClass('dimmer--active');
        $('.map-filters').removeClass('map-filters--white');
        $('.main__heading').removeClass('main__heading--white');
        $('.main__menu-icon').removeClass('not-shown');
        $('.main__map').removeClass('main__map-district--active');
        $('.news').removeClass('menu--active');
        $('.main__distict').removeClass('news--active');
        $('.map-filters').removeClass('news--active');
        $('.news__heading').text('НОВИНИ');
        $('.district-news').addClass('not-shown');
        $('.district-sources').removeClass('news--active');
        $('.district-sources').removeClass('district-sources--active');
    });
    $('.news-button').on('click', function() {
        mixer.filter('all');
    });
    $('.district-news-button').on('click', function() {
        $('.news').addClass('menu--active');
        $('.main__district--active').addClass('news--active');
        $('.map-filters').addClass('news--active');
        $('.district-sources').addClass('news--active');
    }); 
    ////////////////////////////////DISTRICT///////////////////////////////////////
    $('.main__district').on('click', function () {
        if (!($('.map__wrapper').hasClass('zoom-1') || $('.map__wrapper').hasClass('zoom-2'))) {
            $(this).toggleClass('main__district--active');
            $('.dimmer').toggleClass('dimmer--active');
            $('.main__map').toggleClass('main__map-district--active');
            $('.map-filters').toggleClass('map-filters--white');
            $('.main__heading').toggleClass('main__heading--white');
            $('.main__menu-icon').toggleClass('not-shown');
            $('.district-news').toggleClass('not-shown');
            $('.news').toggleClass('menu--active');
            
            if ($('.news').hasClass('menu--active') && $(this).hasClass('main__district--active')) {
                $('.news__heading').text('НОВИНИ ПО ОБЛАСТІ');
                $(this).addClass('news--active');
                $('.map-filters').addClass('news--active');
                $('.district-sources').addClass('news--active');
                $('.district-sources').addClass('district-sources--active');
            } else {
                $('.news__heading').text('НОВИНИ');
                $('.news').removeClass('menu--active');
                $(this).removeClass('news--active');
                $('.district-sources').removeClass('news--active');
                $('.district-sources').removeClass('district-sources--active');

            }
            
        } else {
            $('.map__wrapper').removeClass('zoom-1');
            $('.map__wrapper').removeClass('zoom-2');
            $(this).toggleClass('main__district--active');
            $('.dimmer').toggleClass('dimmer--active');
            $('.main__map').toggleClass('main__map-district--active');
            $('.map-filters').toggleClass('map-filters--white');
            $('.district-news').toggleClass('not-shown');
            $('.main__heading').toggleClass('main__heading--white');
            if ($('.news').hasClass('menu--acitve') && $(this).hasClass('main__district--active')) {
                $('.news__heading').text('НОВИНИ ПО ОБЛАСТІ');
                $(this).addClass('news--active');
                $('.map-filters').addClass('news--active');
                $('.district-sources').addClass('news--active');
                $('.district-sources').addClass('district-sources--active');

            } else {
                $('.news__heading').text('НОВИНИ');
                $('.news').removeClass('menu--active');
                $(this).removeClass('news--active');
                $('.district-sources').removeClass('news--active');
                $('.district-sources').removeClass('district-sources--active');

            }
        }
    });


    //////////////////////////////KYIV-CITY DISABLE//////////////////////////////////
    $('.kyivska').on('click', function () {
        $('.kyiv').toggleClass('main__district--active');
    });
    $('.kyiv').on('click', function () {
        $('.main__district').removeClass('main__district--active');
        $('.dimmer').removeClass('dimmer--active');
    });



    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////BUTTON PRESS////////////////////////////////
    /////////////////////////////////////////////////////////////////////////


    /////////////////////////////ESC////////////////////////////////////////
    $(document).on('keydown', function (event) {
        if (event.key == "Escape") {
            
            /////////MAP//////////////////////
            if ($('.main__district').hasClass('main__district--active')) {
                $('.main__district').removeClass('main__district--active');
                $('.dimmer').removeClass('dimmer--active');
                $('.main__map').removeClass('main__map-district--active');
                $('.map-filters').removeClass('map-filters--white');
                $('.main__heading').removeClass('main__heading--white');
                $('.main__menu-icon').removeClass('main__menu-icon--white');
            }

            //////////////VIGETS/////////////////////////////
            if ($('.kills-window').hasClass('kills-window--active')) {
                $('.kills-window').removeClass('kills-window--active');
            }
            if ($('.map-filters').hasClass('map-filters--active')) {
                $('.map-filters').removeClass('map-filters--active');
            }

            /////////////MAIN MENU///////////////////////////
            if ($('.main__menu').hasClass('menu--active')) {
                $('.main__menu').removeClass('menu--active');
                $('.main__menu-icon').removeClass('main__menu-icon--active');
            }

            //////////MAIN MENU INNER///////////////
            if ($('.control-hours').hasClass('menu--active')) {
                $('.control-hours').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }
            if ($('.sources').hasClass('menu--active')) {
                $('.sources').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }
            if ($('.how-can-i-help').hasClass('menu--active')) {
                $('.how-can-i-help').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }
            if ($('.news').hasClass('menu--active')) {
                $('.news').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }
            if ($('.info').hasClass('menu--active')) {
                $('.info').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }
            if ($('.useful-apps').hasClass('menu--active')) {
                $('.useful-apps').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }
            if ($('.useful-maps').hasClass('menu--active')) {
                $('.useful-maps').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }
            if ($('.unusual-situations').hasClass('menu--active')) {
                $('.unusual-situations').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }
            if ($('.transport').hasClass('menu--active')) {
                $('.transport').removeClass('menu--active');
                $('.main__menu').addClass('menu--active');
            }

            ///////////SOURCES////////////////
            if ($('.sources-list').hasClass('menu--active')) {
                $('.sources-list').removeClass('menu--active');
                $('.sources').addClass('menu--active');
            }
            if ($('.telegram-channels-list').hasClass('menu--active')) {
                $('.telegram-channels-list').removeClass('menu--active');
                $('.sources').addClass('menu--active');
            }

            //////////////TRANSPORT INNER////////////////////////////

            //////////////UKRZALIZNYTSYA///////////////////////
            if ($('.ukrzaliznytsya').hasClass('menu--active')) {
                $('.ukrzaliznytsya').removeClass('menu--active');
                $('.transport').addClass('menu--active');
            }
            //////////////HUM WAYS///////////////////////
            if ($('.hum-ways').hasClass('menu--active')) {
                $('.hum-ways').removeClass('menu--active');
                $('.transport').addClass('menu--active');
            }

            /////////HOW CAN I HELP///////////////////
            if ($('.cyber-attacks').hasClass('menu--active')) {
                $('.cyber-attacks').removeClass('menu--active');
                $('.how-can-i-help').addClass('menu--active');
            }
            if ($('.dont-do').hasClass('menu--active')) {
                $('.dont-do').removeClass('menu--active');
                $('.how-can-i-help').addClass('menu--active');
            }
            if ($('.informing').hasClass('menu--active')) {
                $('.informing').removeClass('menu--active');
                $('.how-can-i-help').addClass('menu--active');
            }
            if ($('.volunteering').hasClass('menu--active')) {
                $('.volunteering').removeClass('menu--active');
                $('.how-can-i-help').addClass('menu--active');
            }
            if ($('.teroborona').hasClass('menu--active')) {
                $('.teroborona').removeClass('menu--active');
                $('.how-can-i-help').addClass('menu--active');
            }
            if ($('.donation').hasClass('menu--active')) {
                $('.donation').removeClass('menu--active');
                $('.how-can-i-help').addClass('menu--active');
            }
            if ($('.zoo').hasClass('menu--active')) {
                $('.zoo').removeClass('menu--active');
                $('.how-can-i-help').addClass('menu--active');
            }

            ///////////APPS////////////////
            if ($('.diia').hasClass('menu--active')) {
                $('.diia').removeClass('menu--active');
                $('.useful-apps').addClass('menu--active');
            }
            if ($('.kyiv-cyfroviy').hasClass('menu--active')) {
                $('.kyiv-cyfroviy').removeClass('menu--active');
                $('.useful-apps').addClass('menu--active');
            }

        }


        //////////////////+-/////////////////////////////////////
        ///////////////////////////ZOOM///////////////////////
        if (event.key == "-") {
            if ($('.map__wrapper').hasClass('zoom-1')) {
                $('.map__wrapper').removeClass('zoom-1');
            }
            if ($('.map__wrapper').hasClass('zoom-2')) {
                $('.map__wrapper').removeClass('zoom-2');
                $('.map__wrapper').addClass('zoom-1');
            }
        }
        if (event.key == "+") {
            if ($('.map__wrapper').hasClass('zoom-1')) {
                $('.map__wrapper').addClass('zoom-2');
                $('.map__wrapper').removeClass('zoom-1');
            }
            if (!$('.map__wrapper').hasClass('zoom-1') && !$('.map__wrapper').hasClass('zoom-2')) {
                $('.map__wrapper').addClass('zoom-1');
            }
        }
    });




    
})