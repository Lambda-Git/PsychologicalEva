$(function () {
    var taskid = curTaskInfo.taskid;
    console.log(taskid);
    $("#rank").remove();
    $("body").append(
        '<div class="pm" id="rank" style="position: fixed;top: 250px;right: 10px;width: 128px;padding: 8px;">\n' +
        '        <div >\n' +
        '            <div style="height: 42px;line-height: 42px;background: #2e6da4;color: #fff;text-align: center;font-size: 14px;font-weight: 900;">平均分排名</div>\n' +
        '            <div style="height: 32px;line-height: 32px;background: #fff;color: #000;font-size: 14px;text-align: center;font-weight: 900;" id="average_rank"></div>\n' +
        '        </div>\n' +
        '        <div >\n' +
        '            <div style="height: 42px;line-height: 42px;background: #2e6da4;color: #fff;text-align: center;font-size: 14px;font-weight: 900;">总分排名</div>\n' +
        '            <div style="height: 32px;line-height: 32px;background: #fff;color: #000;font-size: 14px;text-align: center;font-weight: 900;" id="total_score_rank"></div>\n' +
        '        </div>\n' +
        '    </div>'
    );

    $("#respectfully").text("你好：");
    $("#xst").text("倒计时");
    $("#xsn").text("正确个数");
    $("#xsq").text("正确率");
    $("#bTime").text("不限时长");
    $("#captionTitle").text("做题情况");
    $("#th1").text("已做题目");
    $("#th2").text("正确答案");
    $("#th3").text("你的答案");
    $("#th4").text("每题用时");
    $("#out").text("返回");
    $("#knowledge").text("");
    // $("#average_rank").text("1");
    // $("#total_score_rank").text("2");
    testonly_toget_rank(taskid);
    function testonly_toget_rank(taskid)
    {
        var argsdata={taskid:taskid};
        var	data={
            clazz:'com.lattice.action.proxy.common.NormRecordRankProxy',
            service:'getNormRecordRankForOneTask',
            args:JSON.stringify(argsdata)
        };
        var success=function(data){
            $("#average_rank").text(data.averageNormRecordRank);//no need to Math.abs(), fixed it.
            $("#total_score_rank").text(data.sumNormRecordRank);
        };
        invoke_proxy(data,success);

    }
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
});