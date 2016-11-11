define(['xhr','app/myfn'],function(xhr,base){
	
	
	function elisit(address,fn){
	
		var d=null;	
		var x=xhr();
		x.open("get",base.getBaseURL()+address);
		x.send(null);
		x.onreadystatechange=function(){
			if(x.readyState===4){
	//			console.log(x.responseText)
				d=JSON.parse(x.responseText);
	//			console.log(d);
				fn(d);
			}
			
			
				
		}
	}
	
	
	
	
	return elisit;
	
})
	