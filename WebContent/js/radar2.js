/**
 * Created by Guilin Zhou on 17-7-16.
 */
$(function () {
    var width = 1024;
    var height = width * 1.414516129032258;
    $("body").css("width", width + "px");
    $("body").css("min-height", height + "px");
    var inner_box = width * 0.7;
    $("#inner_box").css("width", inner_box + "px");
    $("#inner_box").css("height", inner_box + "px");
    $("#outer_box").css("padding-top", height * 0.28 + "px");

    $(".text").css("top", height * 0.139 + "px");
    $(".text").css("height", height * 0.018 + "px");
    $(".textbox").css("height", height * 0.018 + "px");
    $(".textbox").css("height", height * 0.018 + "px");
    $(".textbox").css("width", height * 0.072 + "px");
    $(".textbox").css("fontSize", height * 0.012 + "px");
    $(".textbox").css("lineHeight", height * 0.018 + "px");

    $(".username").css("left", height * 0.112 + "px");
    $(".sexual").css("left", height * 0.264 + "px");
    $(".age").css("left", height * 0.416 + "px");
    $(".grade").css("left", height * 0.567 + "px");

    window.onresize = function () {
        /*
        window.location.reload();
        var width=$(window).width();
        var height=width*1.414516129032258;
        $("body").css("width",width+"px");
        $("body").css("height",height+"px");
        var inner_box=width*0.7;
        $("#inner_box").css("width",inner_box+"px");
        $("#inner_box").css("height",inner_box+"px");
        $("#outer_box").css("padding-top",height*0.28+"px");

        $(".text").css("top",height*0.139+"px");
        $(".text").css("height",height*0.018+"px");
        $(".textbox").css("height",height*0.018+"px");
        $(".textbox").css("height",height*0.018+"px");
        $(".textbox").css("width",height*0.072+"px");
        $(".textbox").css("fontSize",height*0.012+"px");
        $(".textbox").css("lineHeight",height*0.018+"px");

        $(".username").css("left",height*0.112+"px");
        $(".sexual").css("left",height*0.264+"px");
        $(".age").css("left",height*0.416+"px");
        $(".grade").css("left",height*0.567+"px");
       */

    }

    // $(".username").html(getCookie("name"));
    // $(".sexual").html(getCookie("sex"));
    // $(".age").html(getCookie("age"));
    // $(".grade").html(getCookie("grade"));
    // var res=JSON.parse(getCookie("data"));

    // var data_name=res["name"];
    // var data_score=res["score"];
    // var data_maxscore=res["maxscore"];
    // var data_name_maxscore=[];

    // for (var i = 0; i < data_name.length; i++) {
    // var tmp=new Object();
    // tmp["text"]=data_name[i];
    // tmp["max"]=data_maxscore[i];
    // data_name_maxscore.push(tmp);
    // }
    // console.log(data_name_maxscore);
    // console.log(data_score);


    //本部分从服务器获取data（老师，应该是java插入这些数据，我列出数据入口或者说格式）
    var bottom_email = emailaddress;//java变量可直接插入替换该字符串
    var conclusion = longinterpretation;


    var text_tmp = title.split(",");
    //alert(text_tmp[0]);
    var score_tmp = dataset.split(",");
    var pic_tmp = tasklogo.split(",");

    var intro_tmp = taskdescription.split(",");


    var result_data_star = [];
    for (var i = 0; i < text_tmp.length; i++) {
        var tmp = {text: "blank", score: 1, pic: "./blank", max: 9, intro: "blank"};
        tmp["text"] = text_tmp[i];
        tmp["score"] = score_tmp[i];
        tmp["pic"] = "http://www.dweipsy.com/lattice/Users/report/" + coidpic_task + "/" + projectid + "/" + pic_tmp[i];
        tmp["intro"] = intro_tmp[i];
        tmp["max"] = 9;
        result_data_star.push(tmp);
    }


    var data = result_data_star;


    /*

            //以下是各项指标核心数据
            var data=[
            {
                text:"注意力",
                score:7,//该用户在该项上的得分
                pic:"./111.png",//对应的图片路径
                max:9, //最大值固定为9
                intro:"一小段文字描述一小段文字描述一小段文字描述一小段文字描述",
            },
            {
                text:"工作记忆",
                score:1,//该用户在该项上的得分
                pic:"./111.png",//对应的图片路径
                max:9, //最大值固定为9
                intro:"一小段文字描述一小段文字描述一小段文字描述一小段文字描述",
            },
            {
                text:"图形推理",
                score:7,//该用户在该项上的得分
                pic:"./111.png",//对应的图片路径
                max:9, //最大值固定为9
                intro:"一小段文字描述一小段文字描述一小段文字描述一小段文字描述",
            },
            {
                text:"算术能力",
                score:7,//该用户在该项上的得分
                pic:"./111.png",//对应的图片路径
                max:9, //最大值固定为9
                intro:"一小段文字描述一小段文字描述一小段文字描述一小段文字描述",
            },
            {
                text:"自我认知",
                score:7,//该用户在该项上的得分
                pic:"./111.png",//对应的图片路径
                max:9, //最大值固定为9
                intro:"一小段文字描述一小段文字描述一小段文字描述一小段文字描述",
            }
            ];

            */

    for (var i = 0; i < data.length; i++) {
        data[i].star = 15 + data[i].score / data[i].max * 115;
        var xx = $("<div></div>").attr("class", "starbox");
        //use background star
        //$(xx).html("<img class='icon' src='"+data[i].pic+"' width='50px'></img><div class='starbox_inner'><div class='box_left'>"+data[i].text+"</div><div class='box_right'></div><div class='box_right star_color' style='width:"+data[i].star+"px'></div></div>     <div class='starbox_text'>"+data[i].intro+"</div>");
        //use img start
        var starCount = parseInt(data[i].score);
        var starContent = "";
        for (var k = 0; k < starCount; k++) {
            starContent += "<img src='http://www.dweipsy.com/lattice/report/resizeApi24-1.png' width='16px' height='16px' />";
            if (k === 4) {
                //starContent+="<br/>";
            }
        }
        for (var k = starCount; k < 9; k++) {
            starContent += "<img src='http://www.dweipsy.com/lattice/report/resizeApi32-7.png' width='16px' height='16px' />";
        }
        $(xx).html("<img class='icon' src='" + data[i].pic + "' width='50px' /><div class='starbox_inner'><div class='box_left'>" + data[i].text + "</div><div class='box_right'>" + starContent + "</div></div><div class='starbox_text'>" + data[i].intro + "</div>");

        $(".starbox_out").append(xx);
    }

    $('#starbox_out_div_id div').css({'box-sizing': 'border-box'});


    //插入数据到js

    $(".big_text").html(conclusion);
    $("#bottom_email").html(bottom_email);

});


//jeff-----------------------------------
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end === -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString()) + ";path=/"
}


function ajaxcall(aim, data) {
    var result = new Object();
    $.ajax({
        url: aim,
        type: "POST",
        async: false,
        data: data,
        dataType: "json",
        success: function (resultText, status) {
            result = resultText;
            console.log(result);
            console.log('11111111');

        },//sucess end
        error: function (resultText, status) {
            result = resultText;
            console.log(result);
            console.log('error');

        },//sucess end

    });//ajax end

    return result;
}

