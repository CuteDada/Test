/**
 * Created by chennan on 2017/6/24.
 */

$(document).ready(function () {
    var heightTol = $(window).height();
    var widthTol = $(window).width();
    var height = 0.7 * heightTol;
    var height2 = 0.6 * heightTol;
    $(".main").height(heightTol);

    $(".container").height(height);
    $(".ul1").height(height);
    $(".ul2").height(height);
    $("#containerHome").height(height);
    $("#content").height(height2);

});


$(document).ready(function () {

    $("#submit").click(function () {
        var totol=100;
        var i=0;
        var li1='C';
        var li2='A';
        var li3='C';
        var li4='A';
        var li5='D';
        var li6='A';
        var li7='C';
        var li8='C';
        var li9='D';
        var li10='D';


        var choice1=$('input:radio:checked').eq(0).val();
        var choice2=$('input:radio:checked').eq(1).val();
        var choice3=$('input:radio:checked').eq(2).val();
        var choice4=$('input:radio:checked').eq(3).val();
        var choice5=$('input:radio:checked').eq(4).val();
        var choice6=$('input:radio:checked').eq(5).val();
        var choice7=$('input:radio:checked').eq(6).val();
        var choice8=$('input:radio:checked').eq(7).val();
        var choice9=$('input:radio:checked').eq(8).val();
        var choice10=$('input:radio:checked').eq(9).val();



        if (li1!=choice1){
            totol-=10;
            i++;
        }
        if (li2!=choice2){
            totol-=10;
            i++;
        }
        if (li3!=choice3){
            totol-=10;
            i++;
        }
        if (li4!=choice4){
            totol-=10;
            i++;
        }
        if (li5!=choice5){
            totol-=10;
            i++;
        }
        if (li6!=choice6){
            totol-=10;
            i++;
        }
        if (li7!=choice7){
            totol-=10;
            i++;
        }
        if (li8!=choice8){
            totol-=10;
            i++;
        }
        if (li9!=choice9){
            totol-=10;
            i++;
        }
        if (li10!=choice10){
            totol-=10;
            i++;
        }

        alert("得分"+totol+" "+"错误题数"+i);

    });


    $("#look").click(function () {
        $(".ul1").css("display","none");
        $(".ul2").css("display","block");
    });

    $("#back").click(function () {
        $(".ul2").css("display","none");
        $(".ul1").css("display","block");
    });


});




$(window).load(function(){
    var height = window.innerHeight,
        x= 0, y= height/2,
        curveX = 10,
        curveY = 0,
        targetX = 0,
        xitteration = 0,
        yitteration = 0,
        menuExpanded = false;

    blob = $('#blob'),
        blobPath = $('#blob-path'),

        hamburger = $('.hamburger');

    $(this).on('mousemove', function(e){
        x = e.pageX;

        y = e.pageY;
    });

    $('.hamburger, .menu-inner').on('mouseenter', function(){
        $(this).parent().addClass('expanded');
        menuExpanded = true;
    });

    $('.menu-inner').on('mouseleave', function(){
        menuExpanded = false;
        $(this).parent().removeClass('expanded');
    });

    function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
    }

    var hoverZone = 150;
    var expandAmount = 20;

    function svgCurve() {
        if ((curveX > x-1) && (curveX < x+1)) {
            xitteration = 0;
        } else {
            if (menuExpanded) {
                targetX = 0;
            } else {
                xitteration = 0;
                if (x > hoverZone) {
                    targetX = 0;
                } else {
                    targetX = -(((60+expandAmount)/100)*(x-hoverZone));
                }
            }
            xitteration++;
        }

        if ((curveY > y-1) && (curveY < y+1)) {
            yitteration = 0;
        } else {
            yitteration = 0;
            yitteration++;
        }

        curveX = easeOutExpo(xitteration, curveX, targetX-curveX, 100);
        curveY = easeOutExpo(yitteration, curveY, y-curveY, 100);

        var anchorDistance = 200;
        var curviness = anchorDistance - 40;

        var newCurve2 = "M60,"+height+"H0V0h60v"+(curveY-anchorDistance)+"c0,"+curviness+","+curveX+","+curviness+","+curveX+","+anchorDistance+"S60,"+(curveY)+",60,"+(curveY+(anchorDistance*2))+"V"+height+"z";

        blobPath.attr('d', newCurve2);

        blob.width(curveX+60);

        hamburger.css('transform', 'translate('+curveX+'px, '+curveY+'px)');

        $('h2').css('transform', 'translateY('+curveY+'px)');
        window.requestAnimationFrame(svgCurve);
    }

    window.requestAnimationFrame(svgCurve);

});
