

function project_tasks_js_getTasksForLatestUsedProject(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.users.ProjectTaskMGProxy',service:'getTasksForLatestUsedProject',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		project_tasks_js_showCurrentSelectedProjectInfo(rdata);
		project_tasks_js_showTasksForLatestUsedProject(rdata);
	};
	invoke_proxy(data,success);
}


function project_tasks_js_getTasksForOneProject(passobj)
{
	var projectid=passobj.projectid;
	var argsdata={projectid:projectid};
	var	data={clazz:'com.lattice.action.proxy.users.ProjectTaskMGProxy',service:'getTasksForOneProject',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		project_tasks_js_showCurrentSelectedProjectInfo(rdata);
		project_tasks_js_showTasksForLatestUsedProject(rdata);
	};
	invoke_proxy(data,success);
}
function project_tasks_js_showCurrentSelectedProjectInfo(rdata)
{
	var project=rdata.project;
	if($.isEmptyObject(project))
	{
		$('#current_selected_project_id').html('未选择项目或者未登陆系统');
	}else
	{
		$('#current_selected_project_id').html('当前项目('+project.pid+')：'+project.projectname);
	}
	
}
function project_tasks_js_showTasksForLatestUsedProject(rdata)
{
	var tasks=rdata.tasks;
	console.log(tasks);
	var table='<table id="project_tasks_js_showTasksForLatestUsedProject_tableID" class="table table-hover table-bordered table-striped" style="font-size:12px;"> </table>';
	$('#task_list_for_one_project_div_id').html(table);
	
	$('#project_tasks_js_showTasksForLatestUsedProject_tableID').DataTable( {
	        data: tasks,
	       order: [[ 1, 'desc' ]],
	        columns: [
	        	   { title: "个数",data: 'sequence' },
	        	   { title: "任务号码",data: 'taskid' },
	        	   { title: "任务名称",data: 'name' },
	        	   { title: "操作",data: '' }
	        	   // { title: "taskwebpage",data: 'taskwebpage' }
            ],
            "columnDefs":[
            	{
		            "render": function(data, type, row) {
		            	var taskLink='<a target="_blank" href="/lattice/StartTestHandler?action=StarttheCurrentTest&projectid='+row.projectid+'&taskid='+row.taskid+'&taskwebpage='+row.taskwebpage+'&targetpagename=3.html">开始</a>';
		            	//var tema="<a title='点击查看' href='javascript:;' onclick='aaaaaaaa(\""+row._id+"\")'>查看</a>";
		                return taskLink;
		            },
		            "targets":3
		        }
            ]
	    });
}








