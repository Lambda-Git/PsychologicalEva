
function admin_testresult_scores_analysis_js_updateAllUserResultScores(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.thirdparty.scores.ThirdPartyScoresUpdatesProxy',service:'updateAllUserResultScores',args:JSON.stringify(argsdata)};
	var success=function(data){
		show_user_msg('处理成功');
	};
	invoke_proxy(data,success);
	
}


