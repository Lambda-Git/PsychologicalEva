/*
 * 根据type4set进行分类，获得numset中每种类别数字最大值
 */


		
/*
*按type类型得到分离COMMENT
*/

 function getCommentSortByType(commentset,type4set)
 {
			//alert(commentset);
			//alert(commentset[0]);
			
		 	if(checkValidity2(commentset,type4set)==null)
		 	{
		 		return null;
		 	}
		 	var valueList=new Array();

		 	var type4Array=changeStringToArray(type4set);
		 	var typeTotal=getTypeTotal(type4Array);
		
			
			for(var i=0;i<typeTotal.length;i++)
			{
				for(var ii=0;ii<type4set.length;ii++){
					if (type4set[ii]==typeTotal[i]){
						valueList.push(commentset[ii]);
						break;
					}
				}
			}
			//alert(valueList.length);  
			//alert(changeAnArrayIntoField(valueList));
			return changeAnArrayIntoField(valueList);
 }
 

 function getMaxValSortByType(numset,type4set){
 	var maxVal= new Array();
 	var type4Array=changeStringToArray(type4set);
 	var typeTotal=getTypeTotal(type4Array);
 	if(checkValidity2(numset,type4set)==null||numset==null||judgeFieldValidity(numset)=="null"){
		for(var i=0;i<typeTotal.length;i++){
			maxVal.push("null");
		}
		return changeAnArrayIntoField(maxVal);
	}
	var numArray=changeStringArrayToFloat(changeStringToArray(numset));
	var index;
	for(var i=0;i<typeTotal.length;i++){
		var temp=-1;
		index=getIndexOfSpecValue(typeTotal[i],type4Array);
	for(var j=0;j<index.length;j++){
			if(numArray[index[j]]>temp&&numArray[index[j]]!=""&&!isNaN(numArray[index[j]])){
				temp=numArray[index[j]];
			}
		}
		if(temp==-1){
			maxVal.push("null");
		}else{
			maxVal.push(temp);
		}
		
	}
	return changeAnArrayIntoField(maxVal);
 }

 
 function getMaxSortByType(numset,type4set){
 	var maxVal= new Array();
 	var type4Array=changeStringToArray(type4set);
 	var typeTotal=getTypeTotal(type4Array);
 	if(checkValidity2(numset,type4set)==null||numset==null||judgeFieldValidity(numset)=="null"){
		for(var i=0;i<typeTotal.length;i++){
			maxVal.push("null");
		}
		return changeAnArrayIntoField(maxVal);
	}
	var numArray=changeStringArrayToFloat(changeStringToArray(numset));
	var index;
	for(var i=0;i<typeTotal.length;i++){
		var temp=-1;
		index=getIndexOfSpecValue(typeTotal[i],type4Array);
	for(var j=0;j<index.length;j++){
			if(numArray[index[j]]>temp&&numArray[index[j]]!=""&&!isNaN(numArray[index[j]])){
				temp=numArray[index[j]];
			}
		}
		if(temp==-1){
			maxVal.push("null");
		}else{
			maxVal.push(temp);
		}
		
	}
	return changeAnArrayIntoField(maxVal);
 }

/*
 * 根据type4set进行分类，获得numset中每种类别正确反应序列的中位数
 */
 

 
function getMedianSortByType_Corrected(numset,correctanswerset,timeset,type4set){
	
	    
	
	if(checkValidity3(numset,correctanswerset,type4set)==null){
		return null;
	}
	if(checkValidity2(timeset,type4set)==null){
		return null;
	}

	var medianOfCorrect=new Array();
	var type4Array=changeStringToArray(type4set);
	typeTotal=getTypeTotal(type4Array);
	//alert("typeTotal"+typeTotal);  
	var numArray=changeStringToArray(numset);
	var timesetArray=changeStringToArray(timeset);
	var correctanswerArray=changeStringToArray(correctanswerset);
	var compareResult=compareTwoArray(numArray,correctanswerArray);
	var indexOfCorrect=getIndexOfSpecValue(1,compareResult);
	
	//alert('indexOfCorrect:'+indexOfCorrect);	      
	if(judgeFieldValidity(timeset)=="null"||indexOfCorrect==null){
		for(var i=0;i<typeTotal.length;i++){
			medianOfCorrect.push("null");
		}
		medianOfCorrect=changeAnArrayIntoField(medianOfCorrect);
		return medianOfCorrect;
	}
	var timeSetOfCorrect=new Array();
	var typeOfCorrect=new Array();
	for(var i=0;i<indexOfCorrect.length;i++){
			timeSetOfCorrect.push(timesetArray[indexOfCorrect[i]]);
			typeOfCorrect.push(type4Array[indexOfCorrect[i]]);
		}
	medianOfCorrect=getMedianSortByType(changeAnArrayIntoField(timeSetOfCorrect),changeAnArrayIntoField(typeOfCorrect));
	return medianOfCorrect;
}



/*
 * 根据type4set进行分类，获得numset中每种类别正确反应序列的中位数
 */
function getMeanSortByType_Corrected(numset,correctanswerset,timeset,type4set){
	if(checkValidity3(numset,correctanswerset,type4set)==null){
		return null;
	}
	if(checkValidity2(timeset,type4set)==null){
		return null;
	}
	var medianOfCorrect=new Array();
	var type4Array=changeStringToArray(type4set);
	typeTotal=getTypeTotal(type4Array);
	var numArray=changeStringToArray(numset);
	var timesetArray=changeStringToArray(timeset);
	var correctanswerArray=changeStringToArray(correctanswerset);
	var compareResult=compareTwoArray(numArray,correctanswerArray);
	var indexOfCorrect=getIndexOfSpecValue(1,compareResult);
	if(judgeFieldValidity(timeset)=="null"||indexOfCorrect==null){
		for(var i=0;i<typeTotal.length;i++){
		medianOfCorrect.push("null");
		}
		medianOfCorrect=changeAnArrayIntoField(medianOfCorrect);
		return medianOfCorrect;
	}
	var timeSetOfCorrect=new Array();
	var typeOfCorrect=new Array();
	for(var i=0;i<indexOfCorrect.length;i++){
			timeSetOfCorrect.push(timesetArray[indexOfCorrect[i]]);
			typeOfCorrect.push(type4Array[indexOfCorrect[i]]);
		}
	meanOfCorrect=getMeanSortByType(changeAnArrayIntoField(timeSetOfCorrect),changeAnArrayIntoField(typeOfCorrect));
	return meanOfCorrect;
}




/*
*获得反应时的中位数
*/
function getMedianSortByType(timeSet,type4set){
	if(checkValidity2(timeSet,type4set)==null){
		return null;
	}
	var timeByType=new Array();
	var median=new Array();;
	var timeArray=changeStringArrayToFloat(changeStringToArray(timeSet));
	var type4Array=changeStringToArray(type4set);
	
	//var typeTotal=getTypeTotal(type4Array);  
	
	var medianList=new Array();
	if(judgeFieldValidity(timeSet)=="null"){
		for(var i=0;i<typeTotal.length;i++){
			median.push("null");
		}
		
		median=changeAnArrayIntoField(median);
		return median;
	}  
	//alert(typeTotal.length); 
	for(var i=0;i<typeTotal.length;i++){
		
		//Adding the command in 2016/09/09. by Xinlin Zhou. Otherwise, the latter condition would be intervened by former conditions in RT.  
		var timeByType=new Array();   
		
		for(var j=0;j<timeArray.length;j++){
			if((type4Array[j]==typeTotal[i])&&!isNaN(timeArray[j])){
				timeByType.push(timeArray[j]);
			}
		} 
		//median= from Xinlin Zhou: Some conditions, there are no any valid trials. 
		//alert(timeByType);
		if (timeByType.length>0)
			medianList.push(getMedian(timeByType));
		else
			medianList.push(0);
	}
	return changeAnArrayIntoField(medianList);
}

/*
*获取某一数组的中位数
*/
function getMedian(array){
	var md=-1;
	arry=sortNumArray(array);
	var index=-1;
	var indexL=index;
	var indexH=index;
	var n=array.length;
	if(n%2==0){
		index=array.length/2;
		indexL=index-1;
		indexH=index;
	}else{
		index=(array.length-1)/2;
		indexL=indexH=index;
	}
	for(var i=indexL-1;i>=0;i--){
		if(array[i]==array[indexL]){
			indexL=i;
		}
	}
	for(var i=indexH+1;i<array.length;i++){
		if(array[i]==array[indexH]){
			indexH=i;
		}
	}
	if(n%2==0&&(array[indexH]!=array[indexL])){
			md=((array[indexH]+array[indexL])/2).toFixed(2);
		}else if(n%2!=0&&(indexH==indexL)){
			md=array[index];
		}else{
			var lb=array[index]-0.5;
			var n=array.length;
			var fb=indexL;
			var fmd=indexH-indexL+1;
			md=(lb+((n/2-fb)/fmd)).toFixed(2);
		}
	return md;
}

/*
*获得某一字段跟标准答案对比后的正确数，并通过type4set进行排序
*/
function getCorrectCountSortByType(compareSet,correctanswerset,type4set){
	

	if (checkValidity3(compareSet,correctanswerset,type4set)==null ){
		return null;
	}   

	
	
/*	
alert("getCorrectCountSortByType in Statistics.js");	
alert("Length: "+compareSet.trim().length);
alert("Length: "+compareSet.length);
*/	
	var compareArray=changeStringToArray(compareSet);
	var correctanswerArray=changeStringToArray(correctanswerset);
	var type4Array=changeStringToArray(type4set);
	var compareResult=compareTwoArray(compareArray,correctanswerArray);
	typeTotal=getTypeTotal(type4Array);
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
	typeTotal=getTypeTotal(type4Array);
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
	typeTotal=getTypeTotal(type4Array);
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
	typeTotal=getTypeTotal(type4Array);
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
	typeTotal=getTypeTotal(type4Array);
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
    		//deviation.push((Math.abs((numArray[i]-correctanswerArray[i]))/(numArray[i]+correctanswerArray[i])).toFixed(4));
    		//deviation.push((Math.abs((numArray[i]-correctanswerArray[i]))/(3)).toFixed(4));
    		deviation.push((Math.abs((numArray[i]-correctanswerArray[i]))/(correctanswerArray[i]+Math.abs(numArray[i]-correctanswerArray[i]))).toFixed(4));
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
function getWeightedScoreSortByType(radioset,type4set,radioList1set,radioList2set,radioList3set,radioList4set,radioList5set,radioList6set,radioList7set,radioList8set,radioList9set,radioList10set,radioList11set,radioList12set,radioList13set,radioList14set,radioList15set,radioList16set){
	if(checkValidity2(radioset,type4set)==null){
		return null;  
	}  
	var weightedScore=new Array();    
	//alert(radioList1set);
	//alert(radioList2set);
 	var weighted=getWeightedAll(radioset,radioList1set,radioList2set,radioList3set,radioList4set,radioList5set,radioList6set,radioList7set,radioList8set,radioList9set,radioList10set);
 	//alert("Weighted:"+weighted);
 	var type4Array=changeStringToArray(type4set);
 	typeTotal=getTypeTotal(type4Array);
 	//alert(typeTotal.length);
 	for(var i=0;i<typeTotal.length;i++){
 		//alert(sumOfSameType(typeTotal[i],type4Array,weighted));
 		weightedScore.push(sumOfSameType(typeTotal[i],type4Array,weighted));
 	}
 
	return changeAnArrayIntoField(weightedScore);
 }
 /*
 *得到radioset中所有选项对应的权重值
 */
 function getWeightedAll(radioset,radioList1set,radioList2set,radioList3set,radioList4set,radioList5set,radioList6set,radioList7set,radioList8set,radioList9set,radioList10set,radioList11set,radioList12set,radioList13set,radioList14set,radioList15set,radioList16set){
 	

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

	var radioList11Array=changeStringArrayToFloat(changeStringToArray(radioList11set));
	var radioList12Array=changeStringArrayToFloat(changeStringToArray(radioList12set));
	var radioList13Array=changeStringArrayToFloat(changeStringToArray(radioList13set));
	var radioList14Array=changeStringArrayToFloat(changeStringToArray(radioList14set));
	var radioList15Array=changeStringArrayToFloat(changeStringToArray(radioList15set));
	var radioList16Array=changeStringArrayToFloat(changeStringToArray(radioList16set));

	
	var weighted=new Array();
	for(var i=0;i<radiosetArray.length;i++){
		weighted[i]=getTheRightWeighted(i,radiosetArray[i],radioList1Array,radioList2Array,radioList3Array,radioList4Array,radioList5Array,radioList6Array,radioList7Array,radioList8Array,radioList9Array,radioList10Array,radioList11Array,radioList12Array,radioList13Array,radioList14Array,radioList15Array,radioList16Array);
		//alert("weighted[i]:"+weighted[i]);
	}
	return weighted;
 }
 /*
*得到radioset中值对应的权重，返回一个float变量
*/
function getTheRightWeighted(i,radioValue,radioList1Array,radioList2Array,radioList3Array,radioList4Array,radioList5Array,radioList6Array,radioList7Array,radioList8Array,radioList9Array,radioList10Array,radioList11Array,radioList12Array,radioList13Array,radioList14Array,radioList15Array,radioList16Array){
	var n=radioValue-1;
	var weighted="";
	
	switch(n){
		case 0:
			if(radioList1Array!=null){
			weighted=radioList1Array[i];
			}
			break;
		case 1:
			//alert(radioList2Array[i]);			
			//alert("isNaN:"+isNaN(radioList2Array[i]))//alert(radioList2Array[i]);
			if(radioList2Array!=null){
				weighted=radioList2Array[i];
			}
			//alert("weighted"+weighted);
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
			if(radioList10Array!=null){
				weighted=radioList10Array[i];
			}
			break;
		case 11:
			//alert(radioList2Array[i]);			
			//alert("isNaN:"+isNaN(radioList2Array[i]))//alert(radioList2Array[i]);
			if(radioList2Array!=null){
				weighted=radioList2Array[i];
			}
			//alert("weighted"+weighted);
			break;
		case 12:
			if(radioList3Array!=null){
			weighted=radioList3Array[i];
			}
			break;
		case 13:
			if(radioList4Array!=null){
			weighted=radioList4Array[i];
			}
			break;
		case 14:
			if(radioList5Array!=null){
			weighted=radioList5Array[i];
			}
			break;
		case 15:
			if(radioList6Array!=null){
			weighted=radioList6Array[i];
			}
			break;
			
	}
	//alert("1111NaN1:"+weighted);
	//alert(weighted=="");
	//var kk=0;
	//alert(kk=="");
	//if(isNaN(n) || weighted=="" ||  weighted=="null" ){
	if(isNaN(n) ||  weighted=="null" ){	
		weighted="NaN";
	}
	//alert("1"+weighted);
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
	var sum=0;
	var flag=false;
	//alert(type);
	//alert(typeArray);
	var	index=getIndexOfAllSameType(type,typeArray);
	//alert(index);
	if(index==null){
 		return "null";
 	}  
	//alert("statisticArray:"+statisticArray);
	for(var i=0;i<index.length;i++){
		if(!isNaN(statisticArray[index[i]])){
			flag=true;
			sum=sum+statisticArray[index[i]];
		}
	} 
	//alert("Sum:"+sum);
	//alert(flag);
	if(flag==false){
		return "null";
	}
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
		//alert("correctanswerset与待统计字段的长度不一致！");
		return null;
	}
	if(!checkTwoFieldsLength(compareSet,type4set)){
		//alert("待统计字段"+compareSet+"与type4set的长度不一致！");
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
		//alert("待统计字段"+compareSet+"与type4set的长度不一致！");
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
*获得某一数组中特定数值的索引
*/
function getIndexOfSpecValue(value,array){
	var indexList=new Array();
	for(var i=0;i<array.length;i++){
		if(array[i]==value){
			indexList.push(i);
		}
	}
	if(indexList.length==0){
		return null;
	}else{
		return indexList;
	}
	
}
/*
 *对数字进行排序,传进来的数组是int或float型
 */
function sortNumArray(array){
	var temp=0;
	for(var i=0;i<array.length;i++){
		for(var j=i+1;j<array.length;j++){
			if(array[i]>array[j]){
				temp=array[i];
				array[i]=array[j];
				array[j]=temp;
			}
		}
	}
	return array;
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
*得到某一数组中所有的Type(无重复)
*/
function getTypeTotal(array){
	var typeTotal=new Array();
	array=changeStringArrayToFloat(array);
	for(var i=0;i<array.length;i++){
		if(!isExist(array[i],typeTotal)){
			typeTotal.push(array[i]);
		}
	}
	return sortNumArray(typeTotal);
	
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
			//alert("标准答案中存在空值，有误，请检查！");
			compareResult.push("null");
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
	//alert("statistics: "+field);  
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




