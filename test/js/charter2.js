/**
 * Created by chennan on 2017/6/21.
 */
$(document).ready(function(){
    /*main页面*/
    var strips = document.querySelector('.strips');
    var strip  = document.querySelectorAll('.strip');

    strip.forEach(function(theStrip){
        theStrip.addEventListener('mouseenter', function() {
            strip[0].classList.remove('hoverin');
            theStrip.classList.add('hoverin');
        });
        theStrip.addEventListener('mouseleave', function() {
            theStrip.classList.remove('hoverin');
            strip[0].classList.add('hoverin');
        });
    });


});/**
 * Created by chennan on 2017/6/24.
 */
