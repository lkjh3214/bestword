define(['jquery'],function($){
	function lunbo(data){
//		应用于轮播图的函数
			$(".focus-banner-a:eq(0)").attr("href",data[0].href);
			$(".focus-banner-a:eq(0)").attr("href",data[0].href);
			$(".focus-banner-a:eq(1)").attr("href",data[1].href);
			$(".focus-banner-a:eq(2)").attr("href",data[2].href);
			
			
			$(".focus-banner-list:eq(0)").css("background","url("+data[0].imgUrl+")");
			$(".focus-banner-list:eq(1)").css("background","url("+data[0].imgUrl+")");
			$(".focus-banner-list:eq(2)").css("background","url("+data[1].imgUrl+")");  
			$(".focus-banner-list:eq(3)").css("background","url("+data[2].imgUrl+")");
			
			var left=0;
			
//			在interval中应用的函数
			function time(){
				if(left>(-3)){
					left-=1;
					$(".focus-banner-ul").css("left",left+"00%");
				}else{
					left=(-1);
					$(".focus-banner-ul").css("left",left+"00%");
				}
				var index=(-left-1)
				$(".focus-bottom-list").css("background","#323232");
				$(".focus-bottom-list").eq(index).css("background","red");
			};
//			设置时间间隔
			var timer=setInterval(time,2000);
//			对左右两个按钮设置点击事件
			$('#focus-left-arrow').mousedown(function(){
				clearInterval(timer);
				if(left>(-3)){
				left-=1;
				$(".focus-banner-ul").css("left",left+"00%");
				}else{
					left=(-1);
					$(".focus-banner-ul").css("left",left+"00%");
				}
				var index=(-left-1)
				$(".focus-bottom-list").css("background","#323232");
				$(".focus-bottom-list").eq(index).css("background","red");
			}).mouseup(function(){
				clearInterval(timer);
				timer=setInterval(time,2000);
			});
			
			
			$('#focus-right-arrow').mousedown(function(){
				clearInterval(timer);
				if(left<(-1)){
				left+=1;
				$(".focus-banner-ul").css("left",left+"00%");
				}else{
					left=(-3);
					$(".focus-banner-ul").css("left",left+"00%");
				}
				var index=(-left-1)
				$(".focus-bottom-list").css("background","#323232");
				$(".focus-bottom-list").eq(index).css("background","red");
			}).mouseup(function(){
				clearInterval(timer);
				timer=setInterval(time,2000);
			});
			$(".focus-bottom-list").each(function(index,element){
				
				$(element).click(function(){
					clearInterval(timer);
					$(".focus-bottom-list").css("background","#323232");
					$(this).css("background","red");
					left=(-(index+1))
					$(".focus-banner-ul").css("left",left+"00%");
				}).mouseleave(function(){
					clearInterval(timer);
					timer=setInterval(time,2000);
				})
				
			})
		}
	return lunbo;
	
	
})