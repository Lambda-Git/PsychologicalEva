
function admin_map_data_analysis_js_reCalculateAllProvinceMapData(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.analysis.map.province.ProvinceDataAnalysisProxy',service:'reCalculateAllTestResultsToAnalysisDB',args:JSON.stringify(argsdata)};
	var success=function(data){
		show_user_msg('处理成功');
	};
	invoke_proxy(data,success);
	
}


