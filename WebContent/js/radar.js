/**
 * Created by Guilin Zhou on 17-7-16.
 */
 $(function(){
 	var width=1024;
 	var height=width*1.414516129032258;
 	$("body").css("width",width+"px");
 	$("body").css("height",height+"px");
 	var inner_box=width*0.7;
 	$("#inner_box").css("width",inner_box+"px");
 	$("#inner_box").css("height",inner_box+"px");
 	$("#outer_box").css("padding-top",height*0.28+"px");
 	$("#outer_box").css("padding-top",height*0.16+"px");

 	$(".text").css("top",height*0.139+"px");
 	$(".text").css("height",height*0.018+"px");
 	$(".textbox").css("height",height*0.018+"px");
 	$(".textbox").css("height",height*0.018+"px");
 	//$(".textbox").css("width",height*0.072+"px");
 	$(".textbox").css("width",height*0.120+"px");
 	$(".textbox").css("fontSize",height*0.012+"px");
 	$(".textbox").css("lineHeight",height*0.018+"px");

 	$(".username").css("left",height*0.112+"px");
 	$(".sexual").css("left",height*0.264+"px");
 	$(".age").css("left",height*0.416+"px");
 	$(".grade").css("left",height*0.567+"px");

 	window.onresize = function(){
 		//comment below line, to prevent reload when click print.
 		//window.location.reload();
 		/*
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
 	// 	var tmp=new Object();
 	// 	tmp["text"]=data_name[i];
 	// 	tmp["max"]=data_maxscore[i];
 	// 	data_name_maxscore.push(tmp);
 	// }
 	// console.log(data_name_maxscore);
 	// console.log(data_score);






      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('inner_box'));

        // 指定图表的配置项和数据
      	var array_tmp=title.split(",");

      	var result_data=[];
      	for(var i=0;i<array_tmp.length;i++){
      		var tmp={text:"blank",max:9};
      		tmp["text"]=array_tmp[i];
      		result_data.push(tmp);
      	}
      	//console.log(result_data);
      	console.log(result_data);


        var option = {
        	radar: [
        	{
        		indicator:  result_data,
        		//[
                //{ text: '注意力',max:9 },
                //{ text: '工作记忆',max:9  },
                //{ text: '图形推理' ,max:9 },
                //{ text: '算术能力' ,max:9 },
                //{ text: '自我认知' ,max:9 },
                //{ text: '自我认知' ,max:9 }
                //],

        		//data_name_maxscore
                center: ['50%', '50%'],
                radius: inner_box*0.3,
                startAngle: 90,
                splitNumber: 3,
                shape: 'circle',
                name: {
                   formatter:'【{value}】',
                   textStyle: {
                   color:'#d15b29',
                   fontSize:14,
                }

            },
            splitArea: {
               areaStyle: {
                color: ['#89CBF2','#B3E0F5'],
                // shadowColor: 'rgba(0, 0, 0, 0.3)',
                // shadowBlur: 10
            }
        },
        axisLine: {
           lineStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            width:5,
        }
    },
    splitLine: {
       lineStyle: {
        color: 'rgba(255, 255, 255, 0.5)'
    }
}
},
],
series: [
{
  name: '雷达图',
  type: 'radar',
  itemStyle: {
   normal: {
    lineStyle: {
     width: 0,
     color:"#333",
 },
 areaStyle: {
     type: 'default',
     color:"#666",
 }
},
emphasis: {
    lineStyle: {
     width: 0,
     color:"#333",
 },
 areaStyle: {
     type: 'default',
     color:"#eee",
 }
}
},
data: [
{
     value: dataset.split(",") ,




	 //value: [6, 7, 8, 7, 6,9],


	//dataset=<%=dataset%>;
	//dataset_index=<%=dataset_index%>;
	//dataset_condition=<%=dataset_condition%>


                    //data_score
                    name: '图一',
                    symbol: 'circle',
                    symbolSize: 7,
                    lineStyle: {
                        normal: {
                         type: 'normal'
                     }
                 }
             },
             ]
         },
         ]
     }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


    });




//jeff-----------------------------------
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

function getCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{
			c_start=c_start + c_name.length+1
			c_end=document.cookie.indexOf(";",c_start)
			if (c_end==-1) c_end=document.cookie.length
				return unescape(document.cookie.substring(c_start,c_end))
		}
	}
	return ""
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : "; expires="+exdate.toGMTString())+";path=/"
}


function ajaxcall(aim,data){
	var result=new Object();
	$.ajax({
		url:aim,
		type:"POST",
		async:false,
		data:data,
		dataType:"json",
		success: function (resultText,status){
			result= resultText;
			console.log(result);
			console.log('11111111');

        },//sucess end
        error: function (resultText,status){
        	result= resultText;
        	console.log(result);
        	console.log('error');

        },//sucess end

	});//ajax end

	return result;
}


/*
function logo(data){

	var data=['111','111','111','111','111','111'];
    data=tasklogo.split(",");

    var angle=2*Math.PI/data.length;
    var radius=300;
    for (var i = 0; i <data.length; i++) {
        var xx=$("<div></div>").attr("class","logo");
        var left=509;
        var top=455;
        left=left+radius*Math.sin(i*angle);
        top=top+radius*(1-Math.cos(i*angle));

        $(xx).css("left",left+'px');
        $(xx).css("top",top+'px');
        var img=$("<img></img>").attr("src","./"+coid+"/"+projectid+"/"+data[i]+".png");
        var img_center=Math.max(65-(3*data.length),25);
        $(img).attr("width",img_center);
        $(img).css("left","-"+img_center/2+"px");
        $(img).css("top","-"+img_center/2+"px");
        $(xx).append(img);
        $("#outer_box").append(xx);

    }
}

*/


function logo(data){

	var data=['111','111','111','111','111'];
	data=tasklogo.split(",");
	var data_new=[];
	data_new.push(data[0]);
	for (var i=data.length-1;i>=1; i--){
		data_new.push(data[i]);
	}
	data=data_new;


	var angle=2*Math.PI/data.length;
	var radius=230;
	var left_mid=509;
	var top_mid=532+230;
	for (var i = 0; i <data.length; i++) {
		var xx=$("<div></div>").attr("class","logo");
		var left=509;
		//var top=532;
		var top=360;
		left=left+radius*Math.sin(i*angle);
		top=top+radius*(1-Math.cos(i*angle));
        //---判断上下左右的移动方向
        var move_left=left<left_mid?1:-1;
        var move_top=top<top_mid?1:-1;
        if(left==left_mid){
        	move_left=0;
        }
        left=left-(move_left*45);
        top=top-(move_top*40);
        $(xx).css("left",left+'px');
        $(xx).css("top",top+'px');
        //var img=$("<img></img>").attr("src","./"+data[i]+".png");

        var img=$("<img />").attr("src","http://www.dweipsy.com/lattice/Users/report/"+coidpic_task+"/"+projectid+"/"+data[i]);

        var img_center=Math.max(65-(3*data.length),25);
        $(img).attr("width",img_center);
        $(img).css("left","-"+img_center/2+"px");
        $(img).css("top","-"+img_center/2+"px");
        $(xx).append(img);

        $("#outer_box").append(xx);


    }

}

