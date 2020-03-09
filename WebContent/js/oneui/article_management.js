var article_management_js_vars={
};


function article_management_js_openArticleManagementDialog(passobj)
{
	
	var dialogid='article_management_js_openArticleManagementDialog';
	if($('#'+dialogid).length!=0)
	{
		$('#'+dialogid).dialog('destroy');
		$('#'+dialogid).remove();
	}
	$('body').append("<div id='"+dialogid+"' title='公告文章管理'>"+
			"<div id='article_management_js_openArticleManagementDialog_div' >"+
			"</div>"+
	"</div>");
	$('#'+dialogid).dialog({
		resizable: false,
		autoOpen: true,
		height: 500,
		width: 800,
		modal: true,
		buttons:[{
			text: "确定",
			click: function() {
				$(this).dialog("close");
				
			}
		}]
	});
	$('#'+dialogid).dialog('open');
	article_management_js_getAllArticles();
	
}
function article_management_js_getAllArticles()
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.articles.ArticleProxy',service:'listArticle',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		var newcontent = "";
		newcontent+=("<table class='footable table toggle-circle toggle-medium' style='width:100%;' ><thead><tr><th scope=col>标识</th><th scope=col>标题</th><th scope=col>查看</th><th scope=col>修改</th><th scope=col>删除</th></tr></thead>");
		for(var i=0;i<rdata.length;i++)
		{
			newcontent+="<tr>";
			newcontent+=("<td>"+rdata[i].aid+"</td><td>"+rdata[i].title+"</td><td><img src='/lattice/images/crud/search.png' style='width:24px;height:24px;' onclick='article_management_js_viewArticle("+rdata[i].category+","+rdata[i].aid+");'></img></td><td><img src='/lattice/images/crud/edit.png' style='width:24px;height:24px;' onclick='article_management_js_editArticle("+rdata[i].category+","+rdata[i].aid+");'></img></td><td><img src='/lattice/images/crud/close/cancel_48.png' style='width:24px;height:24px;' onclick='article_management_js_deleteArticle("+rdata[i].category+","+rdata[i].aid+");'></img></td>");
			newcontent+="</tr>";
		}
		newcontent+="</table>";
		
		$('#article_management_js_openArticleManagementDialog_div').html(newcontent);
		//$('.OPES_TABLE_ID').footable();
	};
	invoke_proxy(data,success);
}

function article_management_js_viewArticle(category,aid)
{
	window.location.href='/lattice/login/articles/articlesViewer.jsp?category='+category+'&aid='+aid;
		
}
function article_management_js_editArticle(category,aid)
{
	//window.location.href='/lattice/login/articles/articlesManagement.jsp?aid='+aid;
	$('#article_management_js_openArticleManagementDialog').dialog('close');
	save_value_to_hidden_input('article_management_js_editArticle_aidForEdit',aid);
	//save_value_to_hidden_input('article_management_js_editArticlecategory_aidForEdit',category);
	
	var argsdata={aid:aid};
	var	data={clazz:'com.lattice.action.proxy.articles.ArticleProxy',service:'getOneArticle',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		$('#abstracts').val(rdata.abstracts);
		$('#articleContent').val(rdata.articleContent);
		$('#title').val(rdata.title);
		$('#authors').val(rdata.authors);
		$('#publishTime').val(rdata.publishTime);
		$('#category').val(rdata.category);
		
	};
	invoke_proxy(data,success);
	
}
function article_management_js_deleteArticle(category,aid)
{
	var argsdata={aid:aid};
	var	data={clazz:'com.lattice.action.proxy.articles.ArticleProxy',service:'deleteArticle',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		article_management_js_getAllArticles();
	};
	invoke_proxy(data,success);
}

