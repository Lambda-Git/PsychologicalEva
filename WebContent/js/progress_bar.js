
var progress_bar_vars={
		progress_bar_container_id:null,//there will be problem if there are two progress bars shown in one page
		progress_bar_timeout_id:null,
		update_interval:20//ms
};


function show_progress_bar_PROGRESS_BAR_JS___________(oid,duration)
{
	progress_bar_vars.progress_bar_container_id=oid;
	$( "#"+progress_bar_vars.progress_bar_container_id ).progressbar({
		value: 0
	});
	//var now = new Date();
	//var time=now.getTime();
	//var elapset=(time-starttime)/1000;
	var total_count=duration/progress_bar_vars.update_interval;
	update_progress_bar_PROGRESS_BAR_JS(total_count,0);
}
//10 000 --20
function update_progress_bar_PROGRESS_BAR_JS___________(total_count,current_count)
{
	if(current_count<=total_count)
	{
		current_count++;
		var showv=parseInt(current_count*100/total_count);
		$("#"+progress_bar_vars.progress_bar_container_id).progressbar( "option", "value", showv );
		clearTimeout(progress_bar_vars.progress_bar_timeout_id);
		progress_bar_vars.progress_bar_timeout_id= window.setTimeout("update_progress_bar_PROGRESS_BAR_JS("+total_count+","+current_count+")",progress_bar_vars.update_interval); 

	}else
	{
		//clearTimeout(progress_bar_vars.progress_bar_timeout_id);
	}
	//alert(total_count+"------"+current_count);
	
}
function show_progress_bar_PROGRESS_BAR_JS(oid,starttime,duration)
{
	progress_bar_vars.progress_bar_container_id=oid;
	$( "#"+progress_bar_vars.progress_bar_container_id ).progressbar({
		value: 0
	});
	duration=duration/1000;
	update_progress_bar_PROGRESS_BAR_JS(starttime,duration);
}
function update_progress_bar_PROGRESS_BAR_JS(starttime,duration)
{
	var now = new Date();
	var time=now.getTime();
	var elapset=(time-starttime)/1000;
	if(elapset<duration)
	{
		var showv=parseInt(elapset*100/duration);
		$("#"+progress_bar_vars.progress_bar_container_id).progressbar( "option", "value", showv );
		clearTimeout(progress_bar_vars.progress_bar_timeout_id);
		progress_bar_vars.progress_bar_timeout_id= window.setTimeout("update_progress_bar_PROGRESS_BAR_JS("+starttime+","+duration+")",progress_bar_vars.update_interval); 

	}else
	{
		//clearTimeout(progress_bar_vars.progress_bar_timeout_id);
	}
	//alert(total_count+"------"+current_count);
	
}
