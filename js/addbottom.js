mui(document.body)[0].innerHTML +='<nav class="mui-bar mui-bar-tab">'+
'<a class="mui-tab-item " id="backList"><span class="mui-icon mui-icon-home"></span><span class="mui-tab-label">返回首页</span></a>'+
'<a class="mui-tab-item" id="logout"><img class="mui-icon" style="width:16px;height:16px;margin-top: 5px;"  src="../image/logout.png" alt=""><span class="mui-tab-label">退出登录</span></a>'+
'</nav>'

mui(document.body).on('tap', '#backList', function(e) {
        mui.openWindow({  
            url:'../taskPrepareStage/taskList.html?rand='+Math.random(),  
            createNew: true,
            styles: {
                cachemode:"noCache",
            }
        })  
        if(ws){
            ws.close()
        }
        // mui.currentWebview.close();
})
mui(document.body).on('tap', '#topBackList', function(e) {
        mui.openWindow({  
            url:'../taskPrepareStage/taskList.html?rand='+Math.random(), 
            createNew: true,
            styles: {
                cachemode:"noCache",
            }
        })  
        if(ws){
            ws.close()
        }
        // mui.currentWebview.close();
})
