
function news_management_js_GetAllArticleMG(passJsonObj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.news.ArticleProxy',service:'getAllArticle',args:JSON.stringify(argsdata)};
	var success=function(rdata){
		var exerciseRecordTable='<table id="news_management_js_GetAllArticleMG_tableID" class="table table-bordered table-striped" style="font-size:12px;"> </table>';
		$('#all_news_list_div_id').html(exerciseRecordTable);
		$('#news_management_js_GetAllArticleMG_tableID').DataTable( {
		        data: rdata.allNewsMG,
		       order: [[ 1, 'desc' ]],
		        columns: [
		        	   { title: "_id",data: '_id' },
		        	   { title: "title",data: 'title' },
		        	   { title: "authors",data: 'authors' },
		        	   { title: "createUid",data: 'createUid' },
		        	   { title: "createTime",data: 'createTime' },
		        	   { title: "delete",data: '_id' }
                ],
                "columnDefs":[
                	{
    		            "render": function(data, type, row) {
    		            	 var tema="<a title='点击查看' href='/lattice/login/news/articlesManagement.html?newsID="+row._id+"' target=_blank>修改</a>";
    		                return tema;
    		            },
    		            "targets":0
    		        },{
    		            "render": function(data, type, row) {
   		            	 var tema="<button type='btn' class='btn btn-primary' onclick='categoryManagement_deleteOneArticleMG(\""+row._id+"\")'>删除</button>";
   		                return tema;
   		            },
   		            "targets":5
   		        }
                ],
		    });
		
	};
	invoke_proxy(data,success);
}

function categoryManagement_deleteOneArticleMG(_id)
{
	var  callback=function(_id){
		var argsdata={_id:_id};
		var	data={clazz:'com.lattice.action.proxy.news.ArticleProxy',service:'deleteOneArticle',args:JSON.stringify(argsdata)};
		var success=function(rdata){
			news_management_js_GetAllArticleMG({});
		};
		invoke_proxy(data,success);
	}
	
	
	open_delete_confirm_dialog(callback,_id);
	
}

