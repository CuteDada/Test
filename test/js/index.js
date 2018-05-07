/**
 * Created by chennan on 2017/6/21.
 */
$(document).ready(function(){
        /*main页面*/
    var heightTol=$(window).height();
    $("#container").height(heightTol);
    $(".mainPic").height(heightTol);
    $(".writePic").height(heightTol);

    var height= 0.8*$(window).height();
    $("#code").height(height);
    $(".right").height(height);


    //help
    toggle = document.querySelectorAll(".toggle")[0];
    nav = document.querySelectorAll("nav")[0];
    toggle_open_text = 'Help';
    toggle_close_text = 'Close';

    toggle.addEventListener('click', function () {
        nav.classList.toggle('open');

        if (nav.classList.contains('open')) {
            toggle.innerHTML = toggle_close_text;
        } else {
            toggle.innerHTML = toggle_open_text;
        }
    }, false);

});