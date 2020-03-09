$(function() {
    //设置默认值
	
	var option = $("<option>").val("0").text("==请选择任务==");
	$("#task").append(option);
	
    var option = $("<option>").val("0").text("==请选择省份==");
    $("[name='province']").append(option);

    option = $("<option>").val("0").text("==请选择城市==");
    $("[name='city']").append(option);

    option = $("<option>").val("0").text("==请选择县区==");
    $("[name='county']").append(option);

    //绑定省份
    for (var i = 0; i < areas.length; i++) {
        if (parseInt(areas[i].level) == 1) {
            option = $("<option>").val(areas[i].code).text(areas[i].name);
            $("[name='province']").append(option);
        }
    }

    //城市联动
    $("[name='province']").bind("change", function() {
    	
        var code = parseInt($(this).val());
        //加载城市
        if (code > 0) {
            $("[name='city'] option:gt(0)").remove();
            for (var i = 0; i < areas.length; i++) {
                if (parseInt(areas[i].parentCode) == code) {
                    option = $("<option>").val(areas[i].code).text(areas[i].name);
                    $("[name='city']").append(option);
                }
            }
        }
       
    });

    //城市联动
    $("[name='city']").bind("change", function() {
        var code = parseInt($(this).val());

        //加载县区
        if (code > 0) {
            $("[name='county'] option:gt(0)").remove();
            for (var i = 0; i < areas.length; i++) {
                if (parseInt(areas[i].parentCode) == code) {
                    option = $("<option>").val(areas[i].code).text(areas[i].name);
                    $("[name='county']").append(option);
                }
            }
        }

    });
     
});


function addressManagement_provinceCityCounty_js_getLogonCollective()
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.collective.address.management.AddressManagementProxy',service:'getLogonCollective',args:JSON.stringify(argsdata)};
	var success=function(rdata){
		//$('#hidden_coid').val(rdata.coid);
		$('#coid').val(rdata.coName+'|'+rdata.coRealName);
		addressManagement_provinceCityCounty_js_getSubCollective(rdata.coid);
	};
	invoke_proxy(data,success);
}


function addressManagement_provinceCityCounty_js_getSubCollective(coid)
{
	//var coid=$('#hidden_coid').val();
	var argsdata={coid:coid};
	var	data={clazz:'com.lattice.action.proxy.collective.address.management.AddressManagementProxy',service:'getSubCollective',args:JSON.stringify(argsdata)};
	var success=function(rdata){
		var select1 = $("#subcoid");
		select1.empty();
		$("<option selected value='-1'>请选择</option>").appendTo(select1);
	    for(var i=0;i<rdata.length;i++)
	    {
	        $("<option value='" + rdata[i].subcoid + "'>" + rdata[i].subconame + "</option>").appendTo(select1);
	    }
	};
	invoke_proxy(data,success);
}


function addressManagement_provinceCityCounty_js_getAllUsersForOneSubCollective()
{
	var subcoid=$("#subcoid").val();
	if(subcoid==-1)
	{
		return;
	}
	var argsdata={subcoid:subcoid};
	var	data={clazz:'com.lattice.action.proxy.collective.address.management.AddressManagementProxy',service:'getAllUsersForOneSubCollective',args:JSON.stringify(argsdata)};
	var success=function(rdata){
		var select1 = $("#uid");
		select1.empty();
		$("<option selected value='-1'>请选择</option>").appendTo(select1);
	    for(var i=0;i<rdata.length;i++)
	    {
	        $("<option value='" + rdata[i].userid + "'>" + rdata[i].userName+'|'+rdata[i].realName + "</option>").appendTo(select1);
	    }
	};
	invoke_proxy(data,success);
}

function set_address_for_coid()
{
	var provincecode=$('#province').val();
	var citycode=$('#city').val();
	var countycode=$('#county').val();
	if(provincecode==0||citycode==0||countycode==0)
	{
		tips('请选择省份，城市，县区！');
	}else
	{
		var argsdata={provincecode:provincecode,citycode:citycode,countycode:countycode};
		var	data={clazz:'com.lattice.action.proxy.collective.address.management.AddressManagementProxy',service:'setAddressForCoid',args:JSON.stringify(argsdata)};
		var success=function(rdata){
			tips('updated count '+rdata.count);
		};
		invoke_proxy(data,success);
	}
}
function set_address_for_subcoid()
{
	var provincecode=$('#province').val();
	var citycode=$('#city').val();
	var countycode=$('#county').val();
	var subcoid=$("#subcoid").val();
	if(provincecode==0||citycode==0||countycode==0||subcoid==-1)
	{
		tips('请选择省份，城市，县区，子集体！');
	}else
	{
		var argsdata={provincecode:provincecode,citycode:citycode,countycode:countycode,subcoid:subcoid};
		var	data={clazz:'com.lattice.action.proxy.collective.address.management.AddressManagementProxy',service:'setAddressForSubCoid',args:JSON.stringify(argsdata)};
		var success=function(rdata){
			tips('updated count '+rdata.count);
		};
		invoke_proxy(data,success);
	}
}
function set_address_for_uid()
{
	var provincecode=$('#province').val();
	var citycode=$('#city').val();
	var countycode=$('#county').val();
	var uid=$("#uid").val();
	if(provincecode==0||citycode==0||countycode==0||uid==-1)
	{
		tips('请选择省份，城市，县区，个体用户！');
	}else
	{
		var argsdata={provincecode:provincecode,citycode:citycode,countycode:countycode,uid:uid};
		var	data={clazz:'com.lattice.action.proxy.collective.address.management.AddressManagementProxy',service:'setAddressForUid',args:JSON.stringify(argsdata)};
		var success=function(rdata){
			tips('updated count '+rdata.count);
		};
		invoke_proxy(data,success);
	}
}
