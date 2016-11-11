define(['jquery'],function($){
	function header(){
	
//		顶部广告
		$(".web-ad-close").on("click",function(){
			$("#header-banner").css("display","none");
		});
//		头部导航栏
		$(".header-nav-a").on("mouseenter",function(){
			$(this).css("color","#10b041");
		}).on("mouseleave",function(){
			$(this).css("color","#c0c0c0");
		})
		$('.header-nav-a:eq(4)').off("mouseleave");
		
		
		//右侧图标文字;
		$('.header-right-list').on('mouseenter',function(){
			$(this).children().css('color','#10b041');
		}).on('mouseleave',function(){
			$(this).children().css('color','#666')
		})
		
//      顶部主要搜索栏
		$("#search-input1").focus(function(){
			$(".search-main-div").css("display","block")
		}).blur(function(){
			$(".search-main-div").css("display","none")
		})
		
		$(".search-main-div-list").on("mouseenter",function(){
			$(this).css("background","#00B081")
		}).on("mouseleave",function(){
			$(this).css("background","none")
		});
		
		var sbimg2=$('.search-banner-img2');
		var sbimg3=$('.search-banner-img3');
		sbimg2.on("mouseenter",function(){
			sbimg3.css("top","10px");
		}).on("mouseleave",function(){
			sbimg3.css("top","15px");
		})
		
//		顶部主导航栏;
		$(".main-list").on("mouseenter",function(){
			$(this).css("background","#f0f4f7");
		}).on("mouseleave",function(){
			$(this).css("background","none")
		})

		}
		return header;
})