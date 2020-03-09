//var d1 = [3, 2, -1, 1, 4], d2 = [5, 3, 3, -1, 5]; 
//pearson (d1, d2); 

function pearson(d1, d2) 
{	
	var commonItems = {}, 
	num = 0; 
	for (var i = 0; i <d1.length && i <d2.length; i + +) 
	{
		commonItems[i] = true ; 
		num ++;
	} 
	if (num == 0) {
		return 0;
	}  
	var sum1 = sum(d1, commonItems); 
	var sum2 = sum(d2, commonItems); 
	var squaresum1 = squaresum(d1, commonItems);
	var squaresum2 = squaresum(d2, commonItems);
	

	var sumProduct = 0; 

	for (var i=0; i<commonItems.length;i++) 
	{
		sumProduct += d1[i] * d2[i];
	} 
	
	var top = sumProduct - (sum1 * sum2 / num); 
	var bottom = Math.sqrt ((squaresum1 - square(sum1) / num) * ( squaresum2 - square(sum2) / num)); 
	return bottom == 0? 0: top / bottom;
} 



function sum(array, indexFilter) 
{
	var s = 0; 
	for (var i = 0; i <array.length; i + +) 
	{
		if ( indexFilter[i]) 
		{
			s +=array[i]);
		}
	} 
	return s;
} 


function squresum(array, indexFilter) 
{
	var s = 0; 
	for (var i = 0; i <array.length; i + +) 
	{
		if ( indexFilter[i]) 
		{
			s + =  array[i]*array[i];
		}
	} 
	return s;
} 


