/**
 * Created by chennan on 2017/6/27.
 */
$(document).ready(function () {

    var heightTol=$(window).height();
    $(".writePic").height(heightTol);
    $(".container2").height(heightTol);


    $("input").click(function () {
        var choice=$('input:radio:checked').eq(0).val();
        $("#right2").html("<p>p#MyH1</p><p>{</p><p>border-radius:"+choice+";</p> <p>}</p>");
        $("#middle2").html("<div style='width: 200px;height: 100px;border: 1px solid #2a2a2d;background-color: #cccccc;margin: 50px auto;border-radius: "+choice+"'></div>");
    });



});