var task = null;
var fileArr = [];
//调用现场照片
document.getElementById('headImage').addEventListener('tap', function() {
    // console.log(1)
    if (mui.os.plus) {
        var buttonTit = [{
            title: "拍照"
        }, {
            title: "从相册选择"
        }];
        plus.nativeUI.actionSheet({
            title: "上传图片",
            cancel: "取消",
            buttons: buttonTit
        }, function(b) { /*actionSheet 按钮点击事件*/
            switch (b.task_list) {
                case 1:
                    getImage(); /*拍照*/
                    break;
                case 2:
                    galleryImg(); /*打开相册*/
                    break;
            }
        })
    }
}, false);

// 拍照获取图片  
function getImage() {
    var c = plus.camera.getCamera();
    c.captureImage(function(e) {
        plus.io.resolveLocalFileSystemURL(e, function(entry) {
            var imgSrc = entry.toLocalURL()
            plus.zip.compressImage({  
                src: imgSrc,  
                dst: "_doc/camera/" + imgSrc,  
                quality: 40,  
                width:'50%',
                height:'50%',
                overwrite: true  
            },function(e){
               setFile(e.target);
            })
             setHtml(imgSrc);
        }, function(e) {
            console.log("读取拍照文件错误：" + e.message);
        });
    }, function(s) {
        console.log("error" + s.message);
    }, {
        filename: "_doc/camera/",
        index: 1
    })
}
    // 从相册中选择图片   
function galleryImg() {
// 从相册中选择图片  
    plus.gallery.pick(function(e) {
        for (var i in e.files) {
            var fileSrc = e.files[i];
            plus.zip.compressImage({  
                src: fileSrc,  
                dst: "_doc/camera/" + fileSrc,  
                quality: 40,  
                width:'50%',
                height:'50%',
                overwrite: true  
            },function(e){
               setFile(e.target);
            })
            // setFile(fileSrc);
            setHtml(fileSrc);
        }
    }, function(e) {
        console.log("取消选择图片");
    }, {
        filter: "image",
        multiple: true,
        maximum: 5,
        system: false,
        onmaxed: function() {
            plus.nativeUI.alert('最多只能选择5张图片');
        }
    });
}

//删除当前照片--删除当前元素的整个父级元素
function deleteImg(event) {
    var obj = event.srcElement;
    var thisPic = obj.parentElement.children[0].currentSrc;
    for(var i = 0 ;i< fileArr.length;i++){
        if(fileArr[i].path.indexOf(thisPic) > -1 ){
            fileArr.splice(i,1)
        }
    }
    obj.parentElement.remove();
}

function setHtml(path) {
    var str = '';
    str = '<li class="mui-table-view-cell mui-media mui-col-xs-4">' +
        '<img class="mui-media-object" src="' + path + '" data-preview-src="" data-preview-group="1" />' +
        '<span class="mui-icon mui-icon-trash deleteBtn" onclick="deleteImg(event)"></span>' +
        '</li>';
    $("#imgs").prepend(str);
}

function setFile(p) {
    // var n = p.substr(p.lastIndexOf('/') + 1);
    fileArr.push({
        name: "img" + fileArr.length,
        path: p
    });
    console.log(fileArr)
}
