var search_project_js_vars={
};


function search_project_js_openDialogWithProjectDetails(passobj)
{
	
	var projectid=passobj.projectid;
	
	var dialogid='search_project_js_openDialogWithTaskDetails';
	if($('#'+dialogid).length!=0)
	{
		$('#'+dialogid).dialog('destroy');
		$('#'+dialogid).remove();
	}
	$('body').append("<div id='"+dialogid+"' title='详细信息查看'>"+
			"<div id='search_project_js_openDialogWithTaskDetails_div' >"+
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
	search_project_js_getProject(projectid);
	search_project_js_setMenuToBackground();
}
function search_project_js_setMenuToBackground()
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
function search_project_js_getProject(projectid)
{
	var argsdata={projectid:projectid};
	var	data={clazz:'com.lattice.action.proxy.search.SearchProjectProxy',service:'getProject',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		var newcontent = "";
		newcontent+=("<table class='footable table toggle-circle toggle-medium' style='width:100%;' ><thead><tr><th scope=col colspan=100%>"+rdata.projects.projectname+"（项目标识："+rdata.projects.projectid+"）</th></tr></thead>");

		
		newcontent+="<tr>";
		newcontent+=("<td>项目类型：</td><td>"+rdata.projects.projecttype+"</td>");
		newcontent+="</tr>";

		
		newcontent+="<tr>";
		newcontent+=("<td>项目介绍：</td><td>"+rdata.projects.projectdescription+"</td>");
		newcontent+="</tr>";
		
		newcontent+="<tr>";
		newcontent+=("<td>指导语：</td><td>"+rdata.projects.projectinstruction+"</td>");
		newcontent+="</tr>";

		//newcontent+="<tr>";
		//newcontent+=("<td>时长：</td><td>"+rdata.projects.timeLength+"（分钟）</td>");
		//newcontent+="</tr>";
		newcontent+="<tr>";
		newcontent+=("<td>建立时间：</td><td>"+rdata.projects.starttime+"</td>");
		newcontent+="</tr>";
		
		newcontent+="<tr>";
		newcontent+=("<td>建立者：</td><td>"+rdata.projects.developer+"</td>");
		newcontent+="</tr>";	


		newcontent+="<tr>";
		newcontent+=("<td>电话：</td><td>"+rdata.projects.phone+"</td>");
		newcontent+="</tr>";		

		newcontent+="<tr>";
		newcontent+=("<td>邮箱：</td><td>"+rdata.projects.email+"</td>");
		newcontent+="</tr>";
		
		

		
		
		newcontent+="</table>";
		
		$('#search_project_js_openDialogWithTaskDetails_div').html(newcontent);
		//$('.OPES_TABLE_ID').footable();
	};
	invoke_proxy(data,success);
}


