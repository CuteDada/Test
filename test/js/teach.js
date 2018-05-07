/**
 * Created by chennan on 2017/7/4.
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
//teach 作业

$(document).ready(function () {
    $("#testA1").click(function () {
        var choice1=$('input:radio[name="work1"]:checked').eq(0).val();
        var work1='A';
        if(work1!=choice1){
            $(".p1").html("选择错误！");
            $(".p1").css("color","red");
        }else {
            $(".p1").html("选择正确！");
            $(".p1").css("color","green");
            $("#next1").css("display","inline");
        }
    });
    $("#next1").click(function () {
        $("#li1").css("display","none");
        $(".p1").css("display","none");
        $("#li2").css("display","block");

        $("#testA2").click(function () {
            var choice2=$('input:radio[name="work2"]:checked').val();
            var work2='C';
            if(work2!=choice2){
                $(".p1").css("display","block");
                $(".p1").html("选择错误！");
                $(".p1").css("color","red");
            }else {
                $(".p1").css("display","block");
                $(".p1").html("选择正确！");
                $(".p1").css("color","green");
                $("#next2").css("display","inline");
                $("#next2").val("很棒！都答对啦~~~");
            }
        });

    });

});