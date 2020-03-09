
function gen_help_docs_js_re_generate_all_tests_help_docs(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.help.docs.ReGenAllTestsHelpDocsProxy',service:'reGenAllTestsHelpDocs',args:JSON.stringify(argsdata)};
	var success=function(data){
		show_user_msg('处理成功，请刷新帮助文档页面');
	};
	invoke_proxy(data,success);
	
	
}

