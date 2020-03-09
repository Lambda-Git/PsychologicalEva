
/*
*获得某一字段跟标准答案对比后的正确数，并通过type4set进行排序
*/
function getCorrectCountSortByType(compareSet,correctanswerset,type4set){
	
	if (checkValidity3(compareSet,correctanswerset,type4set)==null ){
		return null;
	}  
	
	var compareArray=changeStringToArray(compareSet);
	var correctanswerArray=changeStringToArray(correctanswerset);
	var type4Array=changeStringToArray(type4set);
	var compareResult=compareTwoArray(compareArray,correctanswerArray);
	var typeTotal=getTypeTotal(type4Array);
	var correctCountByType=new Array();
	if(judgeFieldValidity(compareSet)=="null"){
		for(var i=0;i<typeTotal.length;i++){
			correctCountByType.push("null");
		}
	}else{
		for(var i=0;i<typeTotal.length;i++){
			correctCountByType.push(correctCountOfSameType(typeTotal[i],type4Array,compareResult));
		}
	}
	
	return changeAnArrayIntoField(correctCountByType);
}

/*
*获得某一字段跟标准答案对比后的正确数，并矫正，并通过type4set进行排序
*/
function getCorrectCountSortByType_Corrected(compareSet,correctanswerset,type4set){
	if(checkValidity3(compareSet,correctanswerset,type4set)==null){
		return null;
	}
	var compareArray=changeStringToArray(compareSet);
	var correctanswerArray=changeStringToArray(correctanswerset);
	var type4Array=changeStringToArray(type4set);
	var compareResult=compareTwoArray(compareArray,correctanswerArray);
	var typeTotal=getTypeTotal(type4Array);
	var correctCountByType=new Array();
	if(judgeFieldValidity(compareSet)=="null"){
		for(var i=0;i<typeTotal.length;i++){
			correctCountByType.push("null");
		}
	}else{
		for(var i=0;i<typeTotal.length;i++){
			correctCountByType.push(correctCountOfSameType(typeTotal[i],type4Array,compareResult)-wrongCountOfSameType(typeTotal[i],type4Array,compareResult));
		}
	}
	
	return changeAnArrayIntoField(correctCountByType);
}

/*
*获得某一字段跟标准答案对比后的正确率，并通过type4set进行排序
*/
function getPercentageCorreceSortByType(compareSet,correctanswerset,type4set){
	if(checkValidity3(compareSet,correctanswerset,type4set)==null){
		return null;
	}
	var compareArray=changeStringToArray(compareSet);
	var correctanswerArray=changeStringToArray(correctanswerset);
	var type4Array=changeStringToArray(type4set);
	var compareResult=compareTwoArray(compareArray,correctanswerArray);
	var typeTotal=getTypeTotal(type4Array);
	var totalCountByType=new Array();
	var correctCountByType=new Array();
	var correctPrecentageArray=new Array();
	if(judgeFieldValidity(compareSet)=="null"){
		for(var i=0;i<typeTotal.length;i++){
			correctPrecentageArray.push("null");
		}
	}else{
		for(var i=0;i<typeTotal.length;i++){
		totalCountByType.push(countOfSameType(typeTotal[i],type4Array));
		correctCountByType.push(correctCountOfSameType(typeTotal[i],type4Array,compareResult));
	}
	
	for(var i=0;i<totalCountByType.length;i++){
		if(totalCountByType[i]==0){
			correctPrecentageArray.push("null");
		}else{
			correctPrecentageArray.push((correctCountByType[i]/totalCountByType[i]).toFixed(2)*100);
		}
	}
}
	
	return changeAnArrayIntoField(correctPrecentageArray);
}

/*
 *按type类型得到其对应的统计值的平均值，返回一个字符串用分号分隔
 */
function getMeanSortByType(statisticSet,type4set)
{
 	if(checkValidity2(statisticSet,type4set)==null)
 	{
 		return null;
 	}
 	var meanList=new Array();
 	var statisticArray=changeStringArrayToFloat(changeStringToArray(statisticSet));
	var type4Array=changeStringToArray(type4set);
	var typeTotal=getTypeTotal(type4Array);
	if(judgeFieldValidity(statisticSet)=="null")
	{
		for(var i=0;i<typeTotal.length;i++){
			meanList.push("null");
		}
	}else
	{
		for(var i=0;i<typeTotal.length;i++)
		{
			var sum=sumOfSameType(typeTotal[i],type4Array,statisticArray);
			var count=countDigitalOfSameType(typeTotal[i],type4Array,statisticArray);
			if(sum==null||count==0)
			{
				meanList.push("null");
			}else
			{
				meanList.push((sum/count).toFixed(2));
			}
		}
	}
 	return changeAnArrayIntoField(meanList);
}
 
 
/*
 *按type类型得到其对应的统计值的Sum 返回一个字符串用分号分隔
 */
function getSumSortByType(statisticSet,type4set)
{
 	if(checkValidity2(statisticSet,type4set)==null)
 	{
 		return null;
 	}
 	var sumList=new Array();
 	var statisticArray=changeStringArrayToFloat(changeStringToArray(statisticSet));
	var type4Array=changeStringToArray(type4set);
	var typeTotal=getTypeTotal(type4Array);
	if(judgeFieldValidity(statisticSet)=="null")
	{
		for(var i=0;i<typeTotal.length;i++){
			sumList.push("null");
		}
	}else
	{
		for(var i=0;i<typeTotal.length;i++)
		{
			var sum=sumOfSameType(typeTotal[i],type4Array,statisticArray);
			var count=countDigitalOfSameType(typeTotal[i],type4Array,statisticArray);
			if(sum==null||count==0)
			{
				sumList.push("null");
			}else
			{
				//sumList.push((sum/count).toFixed(2));
				sumList.push((sum/1).toFixed(2));
			}
		}
	}
 	return changeAnArrayIntoField(sumList);
}
  
/*
*得到numset中每个题的偏离度，返回一个有type值的型数组
*/
function getMeanDeviationSortByType(numset,correctanswerset,type4set){
	if(checkValidity3(numset,correctanswerset,type4set)==null){
		return null;
	}
    var numArray=changeStringArrayToFloat(changeStringToArray(numset));
    var type4Array=changeStringToArray(type4set);
    var correctanswerArray=changeStringArrayToFloat(changeStringToArray(correctanswerset));
    var deviation=new Array();
    for(var i=0;i<numArray.length;i++){
    	if(!isNaN(numArray[i])&&!isNaN(correctanswerArray[i])&&!(numArray[i]==correctanswerArray[i])){
    		deviation.push((Math.abs((numArray[i]-correctanswerArray[i]))/(numArray[i]+correctanswerArray[i])).toFixed(4));
    	}else{
    		deviation.push("noDeviation");
    	}
    }
 	var meanDeviationList=getMeanSortByType(changeAnArrayIntoField(deviation),type4set);
	return meanDeviationList;
} 
 /*
*根据radioset的选项和asum~jsum的权重得到加权总分,返回为一个float变量
*/
function getWeightedScoreSortByType(radioset,type4set,radioList1set,radioList2set,radioList3set,radioList4set,radioList5set,radioList6set,radioList7set,radioList8set,radioList9set,radioList10set){
	if(checkValidity2(radioset,type4set)==null){
		return null;
	}
	var weightedScore=new Array();
 	var weighted=getWeightedAll(radioset,radioList1set,radioList2set,radioList3set,radioList4set,radioList5set,radioList6set,radioList7set,radioList8set,radioList9set,radioList10set);
 	var type4Array=changeStringToArray(type4set);
 	var typeTotal=getTypeTotal(type4Array);
 	for(var i=0;i<typeTotal.length;i++){
 		weightedScore.push(sumOfSameType(typeTotal[i],type4Array,weighted));
 	}
 
	return changeAnArrayIntoField(weightedScore);
 }
 /*
 *得到radioset中所有选项对应的权重值
 */
 function getWeightedAll(radioset,radioList1set,radioList2set,radioList3set,radioList4set,radioList5set,radioList6set,radioList7set,radioList8set,radioList9set,radioList10set){
 	var radiosetArray=changeStringArrayToFloat(changeStringToArray(radioset));
	var radioList1Array=changeStringArrayToFloat(changeStringToArray(radioList1set));
	var radioList2Array=changeStringArrayToFloat(changeStringToArray(radioList2set));
	var radioList3Array=changeStringArrayToFloat(changeStringToArray(radioList3set));
	var radioList4Array=changeStringArrayToFloat(changeStringToArray(radioList4set));
	var radioList5Array=changeStringArrayToFloat(changeStringToArray(radioList5set));
	var radioList6Array=changeStringArrayToFloat(changeStringToArray(radioList6set));
	var radioList7Array=changeStringArrayToFloat(changeStringToArray(radioList7set));
	var radioList8Array=changeStringArrayToFloat(changeStringToArray(radioList8set));
	var radioList9Array=changeStringArrayToFloat(changeStringToArray(radioList9set));
	var radioList10Array=changeStringArrayToFloat(changeStringToArray(radioList10set));
	var weighted=new Array();
	for(var i=0;i<radiosetArray.length;i++){
		weighted[i]=getTheRightWeighted(i,radiosetArray[i],radioList1Array,radioList2Array,radioList3Array,radioList4Array,radioList5Array,radioList6Array,radioList7Array,radioList8Array,radioList9Array,radioList10Array);		
	}
	return weighted;
 }
 /*
*得到radioset中值对应的权重，返回一个float变量
*/
function getTheRightWeighted(i,radioValue,radioList1Array,radioList2Array,radioList3Array,radioList4Array,radioList5Array,radioList6Array,radioList7Array,radioList8Array,radioList9Array,radioList10Array){
	var n=radioValue-1;
	var weighted="null";
	switch(n){
		case 0:
			if(radioList1Array!=null){
			weighted=radioList1Array[i];
			}
			break;
		case 1:
		if(radioList2Array!=null){
			weighted=radioList2Array[i];
			}
			break;
		case 2:
		if(radioList3Array!=null){
			weighted=radioList3Array[i];
			}
			break;
		case 3:
		if(radioList4Array!=null){
			weighted=radioList4Array[i];
			}
			break;
		case 4:
		if(radioList5Array!=null){
			weighted=radioList5Array[i];
			}
			break;
		case 5:
		if(radioList6Array!=null){
			weighted=radioList6Array[i];
			}
			break;
		case 6:
		if(radioList7Array!=null){
			weighted=radioList7Array[i];
			}
			break;
		case 7:
		if(radioList8Array!=null){
			weighted=radioList8Array[i];
			}
			break;
		case 8:
		if(radioList9Array!=null){
			weighted=radioList9Array[i];
			}
			break;
		case 9:
		if(radioList1Array!=null){
			weighted=radioList10Array[i];
			}
			break;
	}
	if(isNaN(n)||weighted==""||weighted==null){
		weighted="NaN";
	}
	return weighted;
}
/*
*将一个数组的值转换成一个字段，每个值之间用分号隔开，返回一个string型变量
*/
function changeAnArrayIntoField(array){
	var feild="";	
	for(var i=0;i<array.length;i++){
		if(i==array.length-1){
			feild=feild+array[i];
		}else{
			feild=feild+array[i]+";";
		}
	}
	return feild;
}
 /*
*得到某一type的num总和，返回float变量
*/
function sumOfSameType(type,typeArray,statisticArray){
	var sum=-1;
	var	index=getIndexOfAllSameType(type,typeArray);
	if(index==null){
 		return "null";
 	}
	for(var i=0;i<index.length;i++){
		if(!isNaN(statisticArray[index[i]])){
			sum=sum+statisticArray[index[i]];
		}
	}
	if(sum==-1){
		return "null";
	}
	sum=sum+1;
	return sum;
}

/*
*判断一个字符在目标数组中的相同type的所有索引，返回一个int型的数组
*/
function getIndexOfAllSameType(type,typeArray){
	var index=new Array();
	for(var i=0;i<typeArray.length;i++){
		if(type==typeArray[i]){
			index.push(i);
		}
	}
	if(index.length==0){
		return null;
	}
		return index;
} 
/*
*将一个string类型的数组，转换成一个float类型的数组，返回一个float型数组
*/
function changeStringArrayToFloat(stringArray){
	var result=new Array();
	if(stringArray==null){
		return null;
	}
	for(var i=0;i<stringArray.length;i++){
	   result[i]=parseFloat(stringArray[i]);	   
	}
	return result;
}

/*
*检查待用字段是否为空值，长度是否正确等合法性
*/
function checkValidity3(compareSet,correctanswerset,type4set){
	/*if(judgeFieldValidity(compareSet)==null){
		return null;
	}*/ 
	
	if(compareSet==null ){
		return null;
	}
	if(!checkTwoFieldsLength(compareSet,correctanswerset)){
		alert("correctanswerset与???待统计字段的长度不一致！"+compareSet);
		return null;
	}
	if(!checkTwoFieldsLength(compareSet,type4set)){
		alert("待统计字段"+compareSet+"与???type4set的长度不一致！"+type4set);
		return null;
	}
	return true;
}
/*
*检查待用字段是否为空值，长度是否正确等合法性
*/
function checkValidity2(compareSet,type4set){
	/*if(judgeFieldValidity(compareSet)==null){
		return null;
	}*/
	   
	if(compareSet==null  ){
		return null;
	}
	if(!checkTwoFieldsLength(compareSet,type4set)){
		alert("待统计字段"+compareSet+"与type4set的长度不一致！"+type4set);
		return null;
	}
	return true;
}

/*
*目标数组中，同一种type下的正确个数，返回一个int型变量
*/
function correctCountOfSameType(type,typeArray,compareResult){
	var count=0;
	for(var i=0;i<typeArray.length;i++){
		if(typeArray[i]==type&&compareResult[i]==1){
			count++;
		}
	}
	return count;
}
/*
*目标数组中，同一种type下的错误个数，返回一个int型变量
*/
function wrongCountOfSameType(type,typeArray,compareResult){
	var count=0;
	for(var i=0;i<typeArray.length;i++){
		if(typeArray[i]==type&&compareResult[i]==0){
			count++;
		}
	}
	return count;
}

/*
*目标数组中，同一种type下的个数，返回一个int型变量
*/
function countOfSameType(type,typeArray){
	var count=0;
	for(var i=0;i<typeArray.length;i++){
		if(typeArray[i]==type){
			count++;
		}
	}
	return count;
}

/*
*目标数组中,数字，同一种type下的个数，返回一个int型变量
*/
function countDigitalOfSameType(type,typeArray,statisticArray){
	var count=0;
	for(var i=0;i<typeArray.length;i++){
		if(typeArray[i]==type&&!isNaN(statisticArray[i])){
			count++;
		}
	}
	return count;
}
/*
*得到type4set中的所有type(无重复)，且排序
*/
function getType(type4set){
	var type4Array=changeStringToArray(type4set);
 	var typeTotal=getTypeTotal(type4Array);
 	return changeAnArrayIntoField(typeTotal);
}
 /*
*得到某一数组中所有的Type(无重复)，返回一个string型的数组
*/
function getTypeTotal(array){
	var typeTotal=new Array();
	for(var i=0;i<array.length;i++){
		if(!isExist(array[i],typeTotal)){
			typeTotal.push(array[i]);
		}
	}
	return typeTotal.sort();
}
/*
*判断一个字符在目标数组中是否存在，返回一个布尔值
*/
function isExist(n,array){
	var exist=false;
	for(var i=0;i<array.length;i++){
	if(n==array[i]){
		exist=true;
	}
}
return exist;
}
/*
*对比两个等长的数组，得到每个题的正确或错误标志，返回一个int型数组，其值为1或0
*/
function compareTwoArray(compareArray,correctanswerArray){
	var compareResult=new Array();
	for(var i=0;i<compareArray.length;i++){
		if(compareArray[i]==""&&correctanswerArray.length!=""){
			compareResult.push(0);
		}else if(compareArray[i]==""&&correctanswerArray.length==""){
			alert("标准答案中存在空值，有误，请检查！");
			compareResult.push(null);
		}else if((compareArray[i].toLowerCase()==correctanswerArray[i].toLowerCase())&&compareArray[i]!=""){
			compareResult.push(1);
		} else{
			compareResult.push(0);
		}
	}
	return compareResult;
}

/*
*将一个由;隔开的字段变成一个string型的数组
*/
function changeStringToArray(field){
	if(field==null){
		return null;
	}
	var fieldArray=new Array();
	if(field.indexOf(";")!=-1){
		fieldArray=field.split(";");
	}else{
		fieldArray.push(field);
	}
	return fieldArray;
}

/*
*检查初始字段长度合法性
*/
function checkTwoFieldsLength(field1,field2){
	var field1Array=changeStringToArray(field1);
	var field2Array=changeStringToArray(field2);
	if(field1Array.length==field2Array.length){
		return true;
	}else{
		return false;
	}
}
/*
*若该字段为空，无值，则直接返回NULL
*/
function judgeFieldValidity(compareSet){
	if(compareSet==null){
		return compareSet;
	}
	var compareArray=changeStringToArray(compareSet);
	var count=0;
	for(var i=0;i<compareArray.length;i++){
		if(compareArray[i]!=""){
			count++;
		}
	}
	if(count==0){
		return "null";
	}else{
		return true;
	}
}


