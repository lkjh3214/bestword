define(["jquery"],function(){
	function sbanner(data){
		console.log(data)
		$(".focus-nav-list").each(function(index,ele){
//			var index=index;
			$(".focus-nav-list").eq(index).mouseenter(function(){
			$(this).css("background","white").css("opacity",1).css("color","#000000");
			$(".yincang").eq(index).css("display","block");
		}).mouseleave(function(){
			$(".focus-nav-list").css("background","black").css("color","white");
			$(".yincang").eq(index).css("display","none")
		})
		})
		$(".yicang-right").eq(2).html("I`m sorry");
		$(".yicang-right").eq(3).html("我有病..");
		$(".yicang-right").eq(4).html("懒癌晚期..没睡好犯困,还有点感冒,写的很烂..但是我觉得一些逻辑还是写了的...敬请谅解");
		
		
//		将数据添加
		data.forEach(function(ele,index){
			
			$(".focus-list-div-title").eq(index).html(ele.title);
			var that=$(".focus-list-subtitle").eq(index);
			var num=index;
			
			ele.mainCity.forEach(function(ele,index){
				that.children().eq(index).html(ele);
			})
			
			ele.moreCity.forEach(function(ele,index){
				var div=$(".yicang-left").eq(num);
				$("<a></a>").html(ele.cityName).appendTo(div).attr("class","yincang-left-a");	
			})
			
			
		})
		
		
	}
	
	
	return sbanner;
})