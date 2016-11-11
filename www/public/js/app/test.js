function search(){
		$("#search-input1").keydown(function(ev){
			var e=ev||event;
			
			var d=null;	
			var x=xhr();
			x.open("get",base.getBaseURL()+"/ajax");
			x.send(e.key);
			x.onreadystatechange=function(){
				if(x.readyState===4){
		//			console.log(x.responseText)
					d=JSON.parse(x.responseText);
		//			console.log(d);
					console.log(d)