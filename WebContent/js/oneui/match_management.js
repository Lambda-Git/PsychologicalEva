
function match_management_js_getAllMatchList(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.match.MatchManagementProxy',service:'getAllMatchList',args:JSON.stringify(argsdata)};
	var success=function(data){
		match_management_js_showAllMatchList(data);
	};
	invoke_proxy(data,success);

}


function match_management_js_showAllMatchList(rdata)
{
	var newcontent = "";
	//newcontent+=("<table class='footable table toggle-circle toggle-medium' style='width:100%;' ><thead><tr><th scope=col>关闭</th><th scope=col>删除</th><th scope=col>激活状态</th><th scope=col>项目号</th><th scope=col>任务号</th><th scope=col>比赛类型</th><th scope=col>任务名称</th><th scope=col>开始时间</th><th scope=col>结束时间</th><th scope=col>时长</th><th scope=col>个体成绩</th><th scope=col>分组成绩</th></tr></thead>");
	newcontent+=("<table class='footable table toggle-circle toggle-medium' style='width:100%;' ><thead><tr><th scope=col>关闭</th><th scope=col>删除</th><th scope=col>激活状态</th><th scope=col>比赛类型</th><th scope=col>任务名称</th><th scope=col>开始时间</th><th scope=col>结束时间</th><th scope=col>时长</th><th scope=col>个体成绩</th><th scope=col>分组成绩</th></tr></thead>");
	if(rdata.length==0)
	{
		newcontent+="<tr>";
		newcontent+=("<td colspan=100% style='text-align:center;'>暂时没有数据</td>");
		newcontent+="</tr>";
	}
	for(var i=0;i<rdata.length;i++)
	{
		newcontent+="<tr>";    
		var individualMatchResultsLink='<a target="_blank"	href="/lattice/SubCollMatch/indMatch.jsp?taskid='+rdata[i].taskid+'&projectid='+rdata[i].projectid+'&ptid='+rdata[i].taskid+'&matchStartTime='+rdata[i].matchStartTime+'&matchEndTime='+rdata[i].matchEndTime+'">个体 </a>';
		var subCollectiveMatchResultsLink='<a target="_blank"	href="/lattice/SubCollMatch/subcollmatch.jsp?taskid='+rdata[i].taskid+'&projectid='+rdata[i].projectid+'&ptid='+rdata[i].taskid+'&matchStartTime='+rdata[i].matchStartTime+'&matchEndTime='+rdata[i].matchEndTime+'">分组 </a>';
		//newcontent+=('<td><img src="/lattice/OPES2/imgs/end.jpg" style="width:26px;height:26px;" onclick=match_management_js_closeOneMatch(\''+rdata[i].matchName+'\');></img></td><td><img src="/lattice/OPES2/imgs/cancel_48.png" style="width:24px;height:24px;" onclick=match_management_js_deleteOneMatch(\''+rdata[i].matchName+'\');></img></td><td>'+match_management_js_getActiveCNValue(rdata[i].isActive)+'</td><td>'+rdata[i].projectid+'</td><td>'+rdata[i].taskid+'</td><td>'+match_management_js_getMatchTypeCNValue(rdata[i].matchType)+'</td><td>'+rdata[i].taskname+'</td><td>'+rdata[i].matchStartTime+'</td><td>'+rdata[i].matchEndTime+'</td><td>'+rdata[i].durationInSeconds+'秒</td><td>'+individualMatchResultsLink+'</td><td>'+subCollectiveMatchResultsLink+'</td>');
		newcontent+=('<td><img src="/lattice/OPES2/imgs/end.jpg" style="width:26px;height:26px;" onclick=match_management_js_closeOneMatch(\''+rdata[i].matchName+'\');></img></td><td><img src="/lattice/OPES2/imgs/cancel_48.png" style="width:24px;height:24px;" onclick=match_management_js_deleteOneMatch(\''+rdata[i].matchName+'\');></img></td><td>'+match_management_js_getActiveCNValue(rdata[i].isActive)+'</td><td>'+match_management_js_getMatchTypeCNValue(rdata[i].matchType)+'</td><td>'+rdata[i].taskname+'</td><td>'+rdata[i].matchStartTime+'</td><td>'+rdata[i].matchEndTime+'</td><td>'+rdata[i].durationInSeconds+'秒</td><td>'+individualMatchResultsLink+'</td><td>'+subCollectiveMatchResultsLink+'</td>');
		newcontent+="</tr>";  
	}
	newcontent+="</table>";

	$('#match_list_div_id').html(newcontent);
	//$('.OPES_TABLE_ID').footable();
}
function match_management_js_closeOneMatch(matchName)
{
	var argsdata={matchName:matchName};
	var	data={clazz:'com.lattice.action.proxy.match.MatchManagementProxy',service:'closeOneMatch',args:JSON.stringify(argsdata)};
	var success=function(data){
		match_management_js_getAllMatchList({});
	};
	invoke_proxy(data,success);
}
function match_management_js_deleteOneMatch(matchName)
{

	var callback=function(matchName)
	{
		var argsdata={matchName:matchName};
		var	data={clazz:'com.lattice.action.proxy.match.MatchManagementProxy',service:'deleteOneMatch',args:JSON.stringify(argsdata)};
		var success=function(data){
			match_management_js_getAllMatchList({});
		};
		invoke_proxy(data,success);
	}
	open_delete_confirm_dialog(callback,matchName);
	


	
}
function match_management_js_initialize_datetime_input()
{
	 $("#matchStartTime,#matchEndTime").datetimepicker({
			showSecond: true,
			dateFormat: 'yy-mm-dd',
			timeFormat: 'hh:mm:ss',
			stepHour: 1,
			stepMinute: 5,
			stepSecond: 30
		});
}
function match_management_js_openAddOneMatchDialog()
{
	var dialogid='match_management_js_openAddOneMatchDialog_id';
	if($('#'+dialogid).length!=0)
	{
		$('#'+dialogid).dialog('destroy');
		$('#'+dialogid).remove();
	}
	$('body').append("<div id='"+dialogid+"' title='打开'>"+
			"<div id='match_management_js_openAddOneMatchDialog_div' >"+
				
			"</div>"+
	"</div>");
	
	$('#'+dialogid).dialog({
		resizable: false,
		autoOpen: true,
		height: 580,
		width: 800,
		modal: true,
		buttons:[{
			text: "确定",
			click: function() {
				$(this).dialog("close");
				$('.ali-common-header').show();
			}
		},{
			text: "取消",
			click: function() {
				$(this).dialog("close");
				$('.ali-common-header').show();
			}
		}]
	});
	$('#'+dialogid).dialog('open');
	$('.ali-common-header').hide();
	//match_management_js_initialize_datetime_input();
	match_management_js_getAllMatchProjects();
	
}

function match_management_js_getAllMatchProjects()
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.match.MatchManagementProxy',service:'getAllMatchProjects',args:JSON.stringify(argsdata)};
	var success=function(rdata){
		
		var newcontent = "";
		newcontent+=("<table class='footable table toggle-circle toggle-medium' style='width:100%;' ><thead><tr><th scope=col>select</th><th scope=col>projectid</th><th scope=col>projectname</th></tr></thead>");
		if(rdata.length==0)
		{
			newcontent+="<tr>";
			newcontent+=("<td colspan=100% style='text-align:center;'>暂时没有数据</td>");
			newcontent+="</tr>";
		}
		for(var i=0;i<rdata.length;i++)
		{
			newcontent+="<tr>";    
			newcontent+=("<td><img src='/lattice/OPES2/imgs/time34.png' style='width:40px;height:32px;' onclick='match_management_js_openViewTaskListDialog("+rdata[i].projectid+");'></img></td><td>"+rdata[i].projectid+"</td><td>"+rdata[i].projectname+"</td>");
			newcontent+="</tr>";
		}
		newcontent+="</table>";

		$('#match_management_js_openAddOneMatchDialog_div').html(newcontent);
		
	};
	invoke_proxy(data,success);

}
function match_management_js_openViewTaskListDialog(projectid)
{
	var dialogid='match_management_js_openViewTaskListDialog_id';
	if($('#'+dialogid).length!=0)
	{
		$('#'+dialogid).dialog('destroy');
		$('#'+dialogid).remove();
	}
	$('body').append("<div id='"+dialogid+"' title='打开'>"+
			"<div id='match_management_js_openViewTaskListDialog_div' >"+
				
			"</div>"+
	"</div>");
	
	$('#'+dialogid).dialog({
		resizable: false,
		autoOpen: true,
		height: 580,
		width: 800,
		modal: true,
		buttons:[{
			text: "确定",
			click: function() {
				$(this).dialog("close");
			}
		},{
			text: "取消",
			click: function() {
				$(this).dialog("close");
			}
		}]
	});
	$('#'+dialogid).dialog('open');
	match_management_js_getAllTasksForOneProject(projectid);
	
}
function match_management_js_getAllTasksForOneProject(projectid)
{
	var argsdata={projectid:projectid};
	var	data={clazz:'com.lattice.action.proxy.match.MatchManagementProxy',service:'getAllTasksForOneProject',args:JSON.stringify(argsdata)};
	var success=function(rdata){
		
		var newcontent = "";
		newcontent+=("<table class='footable table toggle-circle toggle-medium' style='width:100%;' ><thead><tr><th scope=col>select</th><th scope=col>taskid</th><th scope=col>name</th></tr></thead>");
		if(rdata.length==0)
		{
			newcontent+="<tr>";
			newcontent+=("<td colspan=100% style='text-align:center;'>暂时没有数据</td>");
			newcontent+="</tr>";
		}
		for(var i=0;i<rdata.length;i++)
		{
			newcontent+="<tr>";    
			newcontent+=("<td><img src='/lattice/OPES2/imgs/time34.png' style='width:40px;height:32px;' onclick='match_management_js_openMatchTimeSettingDialog("+projectid+","+rdata[i].taskid+");'></img></td><td>"+rdata[i].taskid+"</td><td>"+rdata[i].name+"</td>");
			newcontent+="</tr>";
		}
		newcontent+="</table>";

		$('#match_management_js_openViewTaskListDialog_div').html(newcontent);
		
	};
	invoke_proxy(data,success);

}
function match_management_js_openMatchTimeSettingDialog(projectid,taskid)
{
	var dialogid='match_management_js_openMatchTimeSettingDialog_id';
	if($('#'+dialogid).length!=0)
	{
		$('#'+dialogid).dialog('destroy');
		$('#'+dialogid).remove();
	}
	$('body').append("<div id='"+dialogid+"' title='打开'>"+
			"<div id='match_management_js_openMatchTimeSettingDialog_div' >"+
						"<table style='width: 100%; text-align: left;border:0px solid;'>"+
							"<tr>"+
							"<td style='text-align: left;'>"+
								"类型设置：" +
							"</td>"+
								"<td style='text-align: left;'>"+
									"	<select onclick='match_management_js_matchTypeSelectEvent()' id='match_management_js_openMatchTimeSettingDialog_div_matchType' style='height:38px;width:360px;'>" +
									"	<option selected value=3>立刻开始</option>" +
									"	<option value=4>定时开始</option>" +
									"	</select>"+
								"</td>"+
							"</tr>"+
							"<tr>"+
							"<td style='text-align: left;'>"+
								"子集体ID："+
							"</td>"+
							"<td style='text-align: left;'>"+
								"<input id='match_management_js_subcoids' style='height:36px;width:350px;padding:6px 9px;' type='text' ></input>逗号分隔"+
							"</td>"+
						"</tr>"+
							"<tr>"+
							"<td style='text-align: left;'>"+
								"时长设置："+
							"</td>"+
							"<td style='text-align: left;'>"+
								"<input id='durationInSeconds' style='height:36px;width:350px;padding:6px 9px;' type='text' value='0'></input>分钟"+
							"</td>"+
						"</tr>"+
							"<tr>"+
								"<td style='text-align: left;'>"+
									"开始时间："+
								"</td>"+
								"<td style='text-align: left;'>"+
									"<input id='matchStartTime' style='height:36px;width:350px;padding:6px 9px;' type='text' ></input>"+
								"</td>"+
							"</tr>"+
							"<tr>"+
								"<td style='text-align: left;'>"+
									"结束时间："+
								"</td>"+
								"<td style='text-align: left;'>"+
									"<input id='matchEndTime' style='height:36px;width:350px;padding:6px 9px;' type='text' ></input>"+
								"</td>"+
							"</tr>"+
							
							"<tr>"+
							"<td style='text-align: left;'>"+
								"Type4："+
							"</td>"+
							"<td style='text-align: left;'>"+
								"<input id='type4' style='height:36px;width:350px;padding:6px 9px;' type='text' value=1></input>"+
							"</td>"+
							
							"<tr>"+
							"<td style='text-align: left;'>"+
								"CodeMaterial："+
							"</td>"+
							"<td style='text-align: left;'>"+
								"<input id='codeMaterial' style='height:36px;width:350px;padding:6px 9px;' type='text'  value=0></input>"+
							"</td>"+
						"</tr>"+
						"</table>"+
			"</div>"+
	"</div>");
	
	$('#'+dialogid).dialog({
		resizable: false,
		autoOpen: true,
		height: 380,
		width: 620,
		modal: true,
		buttons:[{
			text: "确定",
			click: function() {
				$(this).dialog("close");
				$('#match_management_js_openViewTaskListDialog_id').dialog('close');
				$('#match_management_js_openAddOneMatchDialog_id').dialog('close');
				$('.ali-common-header').show();
				match_management_js_addOneMatch(projectid,taskid);
			} 
		},{
			text: "取消",
			click: function() {
				$(this).dialog("close");
			}
		}]
	});
	$('#'+dialogid).dialog('open');
	match_management_js_initialize_datetime_input();
	$('#durationInSeconds').attr("disabled",false);
	$('#matchStartTime').attr("disabled",true);
	$('#matchEndTime').attr("disabled",true);
	
}
function match_management_js_matchTypeSelectEvent()
{
	var matchType=$('#match_management_js_openMatchTimeSettingDialog_div_matchType').val();
	if(matchType==3)
	{
		$('#durationInSeconds').attr("disabled",false);
		$('#matchStartTime').attr("disabled",true);
		$('#matchEndTime').attr("disabled",true);
		
	}else if(matchType==4)
	{
		$('#durationInSeconds').attr("disabled",true);
		$('#matchStartTime').attr("disabled",false);
		$('#matchEndTime').attr("disabled",false);
	}
	
}
function match_management_js_addOneMatch(projectid,taskid)
{
	var matchType=$('#match_management_js_openMatchTimeSettingDialog_div_matchType').val();
	var subcoids=$('#match_management_js_subcoids').val();
	var durationInSeconds=$('#durationInSeconds').val();
	var matchStartTime=$('#matchStartTime').val();
	var matchEndTime=$('#matchEndTime').val();
	var type4=$('#type4').val();
	var codeMaterial=$('#codeMaterial').val();
	
	
	durationInSeconds=durationInSeconds*60;//convert to seconds
	
	var argsdata={projectid:projectid,taskid:taskid,matchType:matchType,subcoids:subcoids,durationInSeconds:durationInSeconds,matchStartTime:matchStartTime,matchEndTime:matchEndTime,type4:type4,codeMaterial:codeMaterial};
	var	data={clazz:'com.lattice.action.proxy.match.MatchManagementProxy',service:'addOneMatch',args:JSON.stringify(argsdata)};
	var success=function(data){
		match_management_js_getAllMatchList();
	};
	invoke_proxy(data,success);

}
function match_management_js_getMatchTypeCNValue(matchType)
{
	if(matchType==3)
	{
		return '立刻开始';
	}else if(matchType==4)
	{
		return '定时开始';
	}else
	{
		return '类型无法识别';
	}
}

function match_management_js_getActiveCNValue(isActive)
{
	if(isActive==0)
	{
		return '已关闭';
	}else if(isActive==1)
	{
		return '已开放';
	}else
	{
		return '无法识别';
	}
}
