var article_list_for_home_js_vars={
};

//see ArticleCategory.java

function article_list_for_home_js_showTopArticle(passobj)
{
	passobj.articleCategory=1;
	article_list_for_home_js_getTopArticle(passobj);
	 
	passobj.articleCategory=2;
	article_list_for_home_js_getTopArticle(passobj);
	
}

function article_list_for_home_js_getTopArticle(passobj)
{
	var articleCategory=passobj.articleCategory;
	
	var argsdata={articleCategory:articleCategory};
	var	data={clazz:'com.lattice.action.proxy.articles.ArticleProxy',service:'getTopArticle',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		var content='';
		for(var i=0;i<rdata.length;i++)
		{
			content+='<li><a href="/lattice/login/articles/articlesViewer.jsp?category='+ articleCategory+'&aid='+rdata[i].aid+'">'+rdata[i].title+'</a></li>';
		}
		
		if(articleCategory==1)
		{
			$('#ArticleCategory_SYSTEM_NOTIFICATION').html(content);
		}else if(articleCategory==2)
		{
			$('#ArticleCategory_SCIENTIFIC_PROGRESS').html(content);
		}
	};
	invoke_proxy(data,success);
	
}


