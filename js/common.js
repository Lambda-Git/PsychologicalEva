// var httpUrl = 'http://172.16.10.80:8096'; //测试环境
// var httpUrl = 'http://192.168.1.102:8096'; //开发环境
// var httpUrl = 'http://192.168.1.100:8096'; //环境

//获取页面参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}

//获取当前登录角色
var userInfo = JSON.parse(localStorage.getItem('userInfo'))||{};
//获取当前项目下 -- 当前任务信息
var curTaskInfo = JSON.parse(localStorage.getItem('curTaskInfo')) ||{};

// 扩展API加载完毕后调用onPlusReady回调函数
// document.addEventListener( "plusready", onPlusReady, false );

// 扩展API加载完毕，现在可以正常调用扩展API
// function onPlusReady() {
// //  geeelocation()
// }

//返回上一页
function goNext(url) {
    clickMusic.play();
    setTimeout(function(){
        mui.openWindow({
            url: url,
            createNew: true,
            styles: {
                cachemode:"noCache", //返回上一页 清除缓存
            }
        });
    }, 100);
};

//退出登录
mui(document.body).on('tap', '#logout', function() {
    mui.confirm('确认要退出多维心理APP？','',['退出','取消'],function(e){
        if(e.index == 0) {
            plus.runtime.quit();
            //清理本地缓存数据
            localStorage.removeItem('userInfo')
            localStorage.removeItem('access_token')
            localStorage.removeItem('uid')
            localStorage.removeItem('curTaskInfo')
            localStorage.clear()
        }
    })
});

//表单数据转化
function getFormData(eId) {
    var inData={};
    $("#" + eId).find("input").each(function() {
        if ($(this).attr("real-value") != null) {
            inData[$(this).attr("name")] = $(this).attr("real-value").trim();
        } else {
            inData[$(this).attr("name")] = $(this).val().trim();
        }
    });
    $("#" + eId).find("select").each(function() {
        inData[$(this).attr("name")] = $(this).val();
    });
    $("#" + eId).find("textarea").each(function() {
        inData[$(this).attr("name")] = $(this).val().trim();
    });
    return inData;
}

//ajax -- post  认知能力测评(当前状态) 统一接口--数据提交*************
function postFormInputData() {
    //展示正式任务结束页面
    $('.formalResult').removeClass('active'); //隐藏 打印结果form表单
    document.getElementById("button_pq").style.display = "none"; //隐藏 左右button
    var formData = getFormData('result');
    //本地测试账号-对应孙老师
   /* formData.userName = '18210119894001';
    formData.password = 'password';*/
    //正式环境
    formData.userName = '105988';
    formData.password = '123456';
    formData.type = 'formal';
    $.ajax({
        type: 'POST',
        url: 'http://www.dweipsy.com/lattice/CommonActionProxy', //正式环境 -- 不带token
        // url: 'http://192.168.43.175/lattice/CommonActionProxy', //本地测试
        data: {
            clazz: 'com.lattice.action.OPES.OPESResultProxy',
            service: 'postResults',
            args: JSON.stringify(formData)
        },
        dataType: 'json',
        success: function (data) {
        //数据提交成功
        mui.toast('数据保存成功!3秒后自动跳转到任务列表!',{ duration:'long', type:'div' })
         setTimeout(function () {
             mui.openWindow({
                 url: '../../../task_1/task_list.html',
                 createNew: true,
                 styles: {
                     cachemode:"noCache",
                 }
             });
         },3000);
        }
    });
}

//ajax -- post  数学认知能力训练 统一接口--数据提交*************
function postWebMathData(opes_result_data) {
    //本地测试账号-对应孙老师
    /* formData.userName = '18210119894001';
     formData.password = 'password';*/
    //正式环境
    opes_result_data.userName = userInfo.userName;
    opes_result_data.password =  userInfo.password;
    opes_result_data.access_token =  localStorage.getItem('access_token');
    opes_result_data.type = 'formal';
    $.ajax({
        type: 'POST',
        url: 'http://www.dweipsy.com/lattice/CommonActionThirdPartyProxy', //正式环境 第三方 带token
        // url: 'http://192.168.43.175/lattice/CommonActionProxy', //本地测试
        data: {
            clazz: 'com.lattice.action.OPES.OPESResultProxy',
            service: 'postResults',
            args: JSON.stringify(opes_result_data)
        },
        dataType: 'json',
        success: function (data) {
            if (data.flag === 'success') {
                //数据提交成功
                mui.toast('数据保存成功!3秒后自动跳转到任务列表!',{ duration:'long', type:'div' })
                setTimeout(function () {
                    mui.openWindow({
                        url: '../../../task_2/appointTask/index_list.html?pid='+opes_result_data.projectid,
                        createNew: true,
                        styles: {
                            cachemode:"noCache",
                        }
                    });
                },3000);
            }
        }
    });
}

