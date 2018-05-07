/**
 * Created by chennan on 2017/6/24.
 */
$(document).ready(function () {
    $(document).ready(function(){
        for (var i=1; i <= $('.slider__slide').length; i++){
            $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
        }
        setTimeout(function(){
            $('.slider__wrap').addClass('slider__wrap--hacked');
        }, 1000);
    })

    function goToSlide(number){
        $('.slider__slide').removeClass('slider__slide--active');
        $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
    }

    $('.slider__next, .go-to-next').on('click', function(){
        var currentSlide = Number($('.slider__slide--active').data('slide'));
        var totalSlides = $('.slider__slide').length;
        currentSlide++
        if (currentSlide > totalSlides){
            currentSlide = 1;
        }
        goToSlide(currentSlide);
    });
    //2

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
});