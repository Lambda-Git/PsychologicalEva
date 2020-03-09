

function thirdpart_logout_js_getLogoutInfo(passobj)
{
	var argsdata={};
	var	data={clazz:'com.lattice.action.proxy.thirdparty.login.ThirdPartyLogoutProxy',service:'getLogoutInfo',args:JSON.stringify(argsdata)};
	var success=function(rdata)
	{
		window.location.href=rdata.redirectURL;
	};
	invoke_proxy(data,success);
}






