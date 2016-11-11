function createXHR(){
		//若果浏览器支持XMLHttpRequest;
		if(typeof XMLHttpRequest !='undefined'){
			return new XMLHttpRequest();
		}
		else if(typeof ActiveXObject!= 'undefined'){
			if(typeof arguments.callee.activeXString!='string'){
				var versions=['MSNML2.XMLHttp.6.0','MSNML2.XMLHttp.3.0','MSNML2.XMLHttp'];
			for (var i=0;i<versions.length;i++){
				//try{}catch(){}
				//正常走try,异常的走后边;
				//在此次设计中,异常后没有显示; 相当于略过了;
				try{
				new ActiveXObject(versions[i]);
				arguments.callee.activeXString=versions[i];
				
				
				}catch(e){
					
					
					
				}
			}
			return new ActiveXObject(arguments.callee.activeXSting)
			
			}
			
		}
		
		else{
				throw new Error("无法正常的创建ajax对象")
			}
	}