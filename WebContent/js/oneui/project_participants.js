
function project_participants_js_openSwitchProjectDialog()
{
	var content='';

	var dialogID='project_participants_js_openSwitchProjectDialog_dialog_id';
	content+='<div class="modal fade bs-example-modal-lg" id="'+dialogID+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
	content+='<div class="modal-dialog modal-lg" role="document">';
	content+='<div class="modal-content">';
	content+='<div class="modal-header">';
	content+='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
	content+='<h4 class="modal-title" id="project_participants_js_openSwitchProjectDialog_title_id">我的项目列表：</h4>';
	content+='</div>';
	content+='<div class="modal-body">';
	content+='<div  class="table-responsive" id="project_participants_js_openSwitchProjectDialog_content_div_id">';
	content+='</div>';
	content+='</div>';
	content+='<div class="modal-footer">';
	content+='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
	content+='</div>';
	content+='</div>';
	content+='</div>';
	content+='</div>';


	$('#'+dialogID).remove();
	$('body').append(content);
	
	//$('#'+dialogID).modal('hide')
	$('#'+dialogID).modal('show');

	project_participants_js_getAllProjectParticipantsMGForOneUser({});
	
}
function project_participants_js_getAllProjectParticipantsMGForOneUser(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.users.ProjectParticipantsMGProxy',service:'getAllProjectParticipantsMGForOneUser',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		project_participants_js_showAllProjectParticipantsMGForOneUser(rdata);
	};
	invoke_proxy(data,success);
}

function project_participants_js_setLatestUsedProjectParticipantsMGForOneUser(projectid)
{
	var argsdata={projectid:projectid};
	var	data={clazz:'com.lattice.action.proxy.users.ProjectParticipantsMGProxy',service:'setLatestUsedProjectParticipantsMGForOneUser',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		showUserTrainningProjectList(rdata);
	};
	invoke_proxy(data,success);
}

function project_participants_js_updateProjectParticipantsToMongodb(passobj)
{
	var projectid=passobj.projectid;
	var argsdata={projectid:projectid};
	var	data={clazz:'com.lattice.action.proxy.users.ProjectParticipantsMGProxy',service:'updateProjectParticipantsToMongodb',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		alert(rdata.updatedCountOfProjectParticipantsMG+'|'+rdata.updatedCountOfProjectTaskMG+'个体数据被更新完毕。');
	};
	invoke_proxy(data,success);
}

function project_participants_js_getUserTrainningProjectList(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.thirdparty.project.ThirdPartyProjectProxy',service:'getUserTrainningProjectList',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		showUserTrainningProjectList(rdata);
	};
	invoke_proxy(data,success);
}
function project_participants_js_showAllProjectParticipantsMGForOneUser(rdata)
{
	var projects=rdata.projects;
	console.log(projects);
	var table='<table id="project_participants_js_showAllProjectParticipantsMGForOneUser_tableID" class="table table-hover table-bordered table-striped" style="width:100%;font-size:12px;"> </table>';
	$('#project_participants_js_openSwitchProjectDialog_content_div_id').html(table);
	
	$('#project_participants_js_showAllProjectParticipantsMGForOneUser_tableID').DataTable( {
        data: projects,
       order: [[ 1, 'desc' ]],
        columns: [
        	   { title: "项目ID",data: 'pid' },
        	   { title: "项目名称",data: 'projectname' },
        	   { title: "使用情况",data: 'lastestUsed' },
        	   { title: "选择",data: 'NA' }
        ],
        "columnDefs":[
        	{
	            "render": function(data, type, row) {
	            	 var tema="<a title='点击查看' href='javascript:;' onclick='project_participants_js_switchProject(\""+row.pid+"\")'>切换到此项目</a>";
	                return tema;
	            },
	            "targets":3
	        }
        ]
    });
	
}

function project_participants_js_switchProject(projectid)
{
	var argsdata={projectid:projectid};
	var	data={clazz:'com.lattice.action.proxy.users.ProjectParticipantsMGProxy',service:'setLatestUsedProjectParticipantsMGForOneUser',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		getTasksForLatestUsedProject();
		$('#project_participants_js_openSwitchProjectDialog_dialog_id').modal('hide');
	};
	invoke_proxy(data,success);
}