
function admin_user_task_norm_record_sum_rank_analysis_js_updateAllUserNormRecordSum(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.common.NormRecordSumProxy',service:'updateAllUserNormRecordSum',args:JSON.stringify(argsdata)};
	var success=function(data){
		show_user_msg('处理成功');
	};
	invoke_proxy(data,success);
	
}



//***************below will delete********************

function testonly_toget_rank(passobj)
{
	var taskid=passobj.taskid;
	var argsdata={taskid:taskid};
	var	data={clazz:'com.lattice.action.proxy.common.NormRecordRankProxy',service:'getNormRecordRankForOneTask',args:JSON.stringify(argsdata)};
	var success=function(data){
		//data.averageNormRecordRank
		//data.sumNormRecordRank
	};
	invoke_proxy(data,success);
	
}