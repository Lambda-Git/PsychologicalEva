function addfooter()
{
	document.write( "<div class='index_footer'><div class='index_footernav'><a href=''>与我们联系</a> | <a href=''>使用条款</a> | <a href=''>隐私权声明</a></div><div class='index_footerlogo'></div></div>");
}
function getTimestamp()
{
	var now = new Date();
	return now.getTime(); // in ms
}
//在body中创建一个id为hiddenid的hidden元素，并且把value保存
function save_value_to_hidden_input(hiddenid,val)
{
	$('#'+hiddenid).remove();
	$('body').append("<input type='hidden' id='"+hiddenid+"' value=''></input>");
	$('#'+hiddenid).val(val);
}
function get_value_from_hidden_input(hiddenid)
{
	return $('#'+hiddenid).val();
}
function clear_input_values()
{
	$('input.my_input[type=text]').each(function(i){
		//alert($(this)+$(this).val());
		$(this).val('');
	});
}
function tips(title,message,type)
{
	if(message==null)
	{
		message=title;
	}
	var alert_div_id='RANDOM_ALERT_DIV_ID_JQUERYUI';
	$('#'+alert_div_id).remove();

	$('body').append("<div id='"+alert_div_id+"' title='"+title+"'>"+message+"</div>");
	$('#'+alert_div_id).dialog({
		autoOpen: true,
		height: 210,
		width: 390,
		modal: true,
		buttons:{
			'关闭窗口':
				function(){
				close_dialog(alert_div_id);
			}
		}
	});

}
function   get_date_yyyy_mm_dd_hh_mm_ss() 
{ 
//	alert('vasfdsafdsf');
	var   today=new  Date();
//	alert(today);
	var   year=today.getYear(); 
	var   month=today.getMonth()+1; 
	var   date=today.getDate(); 
	var   hour=today.getHours(); 
	var   minute=today.getMinutes(); 
	var   second=today.getSeconds(); 
//	alert(year+ "_"+month+ "_"+date+ "_"+hour+ "_"+minute+ "_"+second);
	return   year+ "_"+month+ "_"+date+ "_"+hour+ "_"+minute+ "_"+second; 
} 



function addheader()
{
	document.write( "<div class='index_top' >"+
			+"<div class='index_toplogo'></div>"+  
			+"<div class='index_toplanguage'>"+
			+" <div class='index_toplanguage_pulldownlist' >"+
			+"   <div class = box><div class = box2>"+
			+"     <select id = 'LangController'>"+
			+"     <option value='zh_CN'>中文</option>"+
			+"		<option value='en'>English</option>"+
			+"		<option value=''>Русский</option>"+
			+"    </select>"+
			+"   </div></div> "+
			+"  </div>"+
			+"  <div class='index_toplanguage_go'>"+
			+"    <a href=''><div class='index_toplanguage_btn'></div></a>"+
			+"  </div>"+
			+"  </div>  "+ 
			+"  <div class='index_tophelp'>| <a href='#'>帮助</a></div>"+
			+"  <div class='index_topnav'> ");

	document.write( "  <div id='menunav'>"+
			+"   <ul id='nav' class='clearfix'>"+
			+"      <li><a href=''><fmt:message key='jsp.menu.home'/></a></li>"+
			+"      <div class='menunav_line1'></div>"+
			+"     <li><a href=''>测试</a>"+
			+"       <ul>"+
			+"      <li><a href='' class='sub'>认知能力测验</a></li>"+
			+"      <li><a href='' class='sub'>语言认知能力测验</a></li>"+
			+"     <li><a href='' class='sub'>数学认知能力测验</a></li>"+
			+"     <li><a href='' class='sub'>幼儿数学能力水平测试</a></li>"+
			+"     <li><a href='' class='sub'>数学成就测验</a></li>"+
			+"   </ul>"+
			+"   </li>"+
			+"  <div class='menunav_line2'></div>"+
			+"   <li><a href=''>训练</a>"+
			+"    <ul>"+
			+"      <li><a href='' class='sub'>儿童青少年脑功能促进训练</a></li>"+
			+"      <li><a href='' class='sub'>老年人脑功能促进训练</a></li>"+
			+"      <li><a href='' class='sub'>脑损伤患者脑功能恢复训练</a></li>"+
			+"    </ul>"+
			+"  </li>"+
			+"   <div class='menunav_line3'></div>"+
			+"   <li><a href=''>研究</a>"+
			+"     <ul>"+
			+"      <li><a href='' class='sub'>中英儿童数学认知能力跨文化比较</a></li>"+
			+"      <li><a href='' class='sub'>中英儿童空间认知能力跨文化比较</a></li>"+
			+"          <li><a href=''>幼儿数学能力水平测试</a></li>"+
			+"       <li><a href=''>北京市中小学生数学认知能力测验</a></li>"+
			+"  </ul>"+
			+"        </li>"+
			+"     <div class='menunav_line4'></div>"+
			+"  <li><a href=''>个人</a>"+
			+" <ul>"+
			+"                 <li><a href='' class='sub'>选择集体</a></li>"+
			+"              <li><a href='' class='sub'>测验记录</a></li>"+
			+"           <li><a href=''>修改个人信息</a></li>"+
			+"      </ul>"+
			+" </li>"+
			+"            <div class='menunav_line5'></div>"+
			+"        <li><a href=''>集体</a>"+
			+"           <ul>"+
			+"           <li><a href='' class='sub'>管理个人用户</a></li>"+
			+"            <li><a href='' class='sub'>查看测验结果</a></li>"+
			+"           <li><a href=''>导出实验记录</a></li>"+
			+"         <li><a href=''>设置实验</a></li>"+
			+"           <li><a href=''>修改集体用户信息</a></li>"+
			+"         </ul>"+
			+"       </li>"+
			+"       <div class='menunav_line6'></div>"+
			+" 	    <li><a href=''>系统</a></li>"+
			+"         <div class='menunav_line7'></div>"+
			+"      </ul>"+
			+"   </div>"+
			+"   </div>"+
			+"  </div>");
}

//check if a value in a array
function is_in(targ,sour)
{
	for(var i=0;i<sour.length;i++)
	{
		if(targ==sour[i])
		{
			return true;
		}
	}
	return false;
}
//remove a value in a array
function romve_value(targ,sour)
{
	var cop=new Array();
	for(var i=0;i<sour.length;i++)
	{
		if(targ!=sour[i])
		{
			cop.push(sour[i]);
		}
	}
	return cop;
}
//add two array, return new array
function add_array(addl,addr)
{
	var add_res=new Array();
	for(var i=0;i<addl.length;i++)
	{
		add_res.push(addl[i]);
	}
	for(var i=0;i<addr.length;i++)
	{
		add_res.push(addr[i]);
	}
	return add_res;
}
//return partion of c_result_array
function get_related_result(c_result_array,user_result_length)
{
	var related=new Array();
	for(var i=0;i<user_result_length;i++)
	{
		related[i]=c_result_array[i];
	}
	return related;
}
function reverse_array(org)
{
	var des=new Array();
	for(var i=org.length-1;i>=0;i--)
	{
		des.push(org[i]);
	}
	return des;
}
function divide_array(org,divided)
{
	var des=new Array();
	for(var i=org.length-1;i>=0;i--)
	{
		des.push(Math.round(org[i]/divided));
	}
	return des;
}

function GetRequest()
{
	var url = location.search; 
	var theRequest = new Object();
	if(url.indexOf("?") != -1)
	{ 
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++)
		{ 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}


function GetRequestForURL(url)
{
	//var url = location.search; 
	var theRequest = new Object();
	if(url.indexOf("?") != -1)
	{ 
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++)
		{ 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
//---------------------------dialog method---------------------------------
function open_dialog(dialogid)
{
	$('#'+dialogid).dialog('open');
}
function close_dialog(dialogid)
{
	$('#'+dialogid).dialog('close');
}
function destroy_dialog(dialogid)
{
	$('#'+dialogid).dialog('destroy');
}

//[4,5,6] [4,6,7,8] 5 will be added to the container_array
function addto(add_array,container_array)
{
	var temp0=new Array('','');
	var temp=[];
	temp0.push('');
	$.each(add_array,function(index,value){
		if($.inArray(value,container_array)==-1)
		{
			//alert(value+"-----"+container_array);
			container_array.push(value);
		}
	});
	return container_array;

}
//[4,5,6] [5,6,7,8] 5 and 6 will be removed
function removefrom(remove_array,container_array)
{
	$.each(remove_array,function(index,value){
		container_array = $.grep(container_array, function(val) { return val != value; });
	});
	return container_array;
}

function toggle_all_and_cal(checkbox_head,sub_checkbox_name,added_ids_array)
{
	if(checkbox_head.checked)
	{
		var tmp=new Array();
		$.each($(':checkbox'),function(index,value){
			if(value.name==sub_checkbox_name)
			{
				value.checked=true;
				tmp.push(value.id);
			}
		});

		added_ids_array=addto(tmp,added_ids_array);
	}else
	{
		var tmp=new Array();
		$.each($(':checkbox'),function(index,value){
			if(value.name==sub_checkbox_name)
			{
				value.checked=false;
				tmp.push(value.id);
			}
		});

		added_ids_array=removefrom(tmp,added_ids_array);
	}
	return added_ids_array;
}
//add css style to table
function ajax_utils_add_table_css()
{
	$(".AJAX_TABLE_ID tr:even").css("background-color", "#E4EEFA");
	$(".AJAX_TABLE_ID tr:odd").css("background-color", "#FFF");
	$('.AJAX_TABLE_ID tr').hover(
			function () {
				$(this).css("background-color", "#FFDEAD");
			},
			function () {
				$("tr:even").css("background-color", "#E4EEFA");
				$("tr:odd").css("background-color", "#fff");
			}
	);
}
//for xheditor
function loadJS_chat_js(url,callback,charset)
{
	var script = document.createElement('script');
	script.onload = script.onreadystatechange = function ()
	{
		if (script && script.readyState && /^(?!(?:loaded|complete)$)/.test(script.readyState)) return;
		script.onload = script.onreadystatechange = null;
		script.src = '';
		script.parentNode.removeChild(script);
		script = null;
		if(callback)callback();
	};
	script.charset=charset || document.charset || document.characterSet;
	script.src = url;
	try {document.getElementsByTagName("head")[0].appendChild(script);} catch (e) {}
}
function initialize_rich_editor_chat_js(id_array,handler_url)
{
	loadJS_chat_js('../xheditor/xheditor-1.1.7/xheditor-1.1.7/xheditor-1.1.7-zh-cn.min.js',function(){
		for(var i=0;i<id_array.length;i++)
		{
			$('#'+id_array[i]).xheditor({
				tools:'full',//full simple
				upImgUrl:handler_url+"?immediate=1",upImgExt:"jpg,jpeg,gif,png",
				upFlashUrl:handler_url+"?immediate=1",upFlashExt:"swf",
				upMediaUrl:handler_url+"?immediate=1",upMediaExt:"mp3,avi,mp4"
			});
		}
	});
}
/*
 * this is used to load dynamic exam js files
 * Usage:
   $.cachedScript("ajax/test.js").done(function(script, textStatus) {
	  console.log( textStatus );
	});
 */
jQuery.cachedScript = function(url, options) {

	// allow user to set any option except for dataType, cache, and url
	options = $.extend(options || {}, {
		dataType: "script",
		cache: false,
		url: url
	});
	// Use $.ajax() since it is more flexible than $.getScript
	// Return the jqXHR object so we can chain callbacks
	return jQuery.ajax(options);
};
//this is used to load static libs
jQuery.loadCachedStaticScript = function(url, options) {
	options = $.extend(options || {}, {
		dataType: "script",
		cache: true,
		url: url
	});
	return jQuery.ajax(options);
};