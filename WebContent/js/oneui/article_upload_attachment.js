var article_upload_attachment_js_vars={
};

function article_upload_attachment_js_uploadArticleAttachment(passobj)
{
	var success_func=function(serverData){
		var file=$.parseJSON(serverData);  
		//alert(serverData+' '+file.fileName);
		$('#ajax_upload_js_single_upload_dialog').dialog('close');
		$('#articleContent').val($('#articleContent').val()+'上传的文件路径为：<br>'+file.fileName);
	};
	
	var args_array={upload_url:'/lattice/CommonActionProxy?clazz=com.lattice.action.proxy.articles.upload.ArticleUploadArticleAttachmentProxy&service=uploadArticleAttachment&args={}',success:success_func};
	load_js_then_exec_func_util('/lattice/OPES2/js/framework/ajax_upload.js','ajax_upload_js_open_upload_dialog',args_array);

}
