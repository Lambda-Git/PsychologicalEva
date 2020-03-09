var search_task_js_vars={
};


function search_task_js_openDialogWithTaskDetails(passobj)
{
	
	var taskid=passobj.taskid;
	
	var dialogid='search_task_js_openDialogWithTaskDetails';
	if($('#'+dialogid).length!=0)
	{
		$('#'+dialogid).dialog('destroy');
		$('#'+dialogid).remove();
	}
	$('body').append("<div id='"+dialogid+"' title='详细信息查看'>"+
			"<div id='search_task_js_openDialogWithTaskDetails_div' >"+
			"</div>"+
	"</div>");
	$('#'+dialogid).dialog({
		resizable: false,
		autoOpen: true,
		height: 480,
		width: 700,
		modal: false,
		buttons:[{
			text: "确定",
			click: function() {
				$(this).dialog("close");
				
			}
		}]
	});
	$('#'+dialogid).dialog('open');
	search_task_js_getTask(taskid);
	search_task_js_setMenuToBackground();
}
function search_task_js_setMenuToBackground()
{
	/*
	<style>
	.ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br{
		z-index: 9999999;
	}
</style>
*/
$('.ui-corner-all').css({'z-index': 9999999});


}
function search_task_js_getTask(taskid)
{
	var argsdata={taskid:taskid};
	var	data={clazz:'com.lattice.action.proxy.search.SearchTaskProxy',service:'getTask',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		var newcontent = "";
		newcontent+=("<table class='footable table toggle-circle toggle-medium' style='width:100%;' ><thead><tr><th scope=col colspan=100%>"+rdata.taskname+"（任务标识："+rdata.taskid+"）" +"</th></tr></thead>");
		

		
		newcontent+="<tr>";
		newcontent+=("<td>描述：</td><td>"+rdata.taskdescrip+"</td>");
		newcontent+="</tr>";
		
		newcontent+="<tr>";
		newcontent+=("<td>时长（秒）：</td><td>"+rdata.timeLength+"</td>");
		newcontent+="</tr>";

		newcontent+="<tr>";
		newcontent+=("<td>开发者：</td><td>"+rdata.developer+"</td>");
		newcontent+="</tr>";
		
		newcontent+="<tr>";
		newcontent+=("<td>电话：</td><td>"+rdata.phone+"</td>");
		newcontent+="</tr>";
		
		newcontent+="<tr>";
		newcontent+=("<td>邮箱：</td><td>"+rdata.email+"</td>");
		newcontent+="</tr>";

		newcontent+="<tr>";
		newcontent+=("<td>使用人次：</td><td>"+rdata.numbertrial+"</td>");
		newcontent+="</tr>";

		
		
		newcontent+="</table>";
		
		$('#search_task_js_openDialogWithTaskDetails_div').html(newcontent);
		//$('.OPES_TABLE_ID').footable();
	};
	invoke_proxy(data,success);
}


