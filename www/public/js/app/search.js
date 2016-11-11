define(['jquery','xhr','app/myfn'],function(){
	function search(){
		$(".header-right-search-input").keyup(function(ev){
			console.log(123)
			var e=ev||event;
			var kw=$(this).val();
			var d=null;	
			if( (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){
			 $.ajax({
                    type:"get",
                    url:'http://10.0.161.60:9000?kw='+kw,
                    success:showData
                  })
		}	 
        });
        //对返回的数据进行操作
		function showData(data){
//			console.log(data)
		 	var d=data.data.list;
		 	console.log(d)
		 	d.forEach(function(ele,index){
		 		$(".header-right-div").css("display","block");
		 		if(ele.type_name == "word"){
		 			$(".header-right-div-list").eq(index).children().remove();
					$("<a class='.header-right-div-a'>"+ele.word+"</a>").attr("href",ele.url).appendTo($(".header-right-div-list").eq(index));
		 		}else if(ele.type_name == "item"){
		 			$(".header-right-div-list").eq(index).children().remove();
		 			$("<a class='.header-right-div-a'>"+ele.word+"</a>").html("wtf").appendTo($(".header-right-div-list").eq(index));
		 		}
		 		
		 		
		 	})
		}
		
		//头部导航栏 右侧搜索栏;
		function restore(){
			$('.header-right-search').css("background","#323232").animate({width:'40px'},'fast');
			$('.header-right-search-input').animate({width:'0px'},"fast");
		};
		
		$('.header-right-search').on('mouseenter',function(){
			$('.header-right-search').animate({width:'200px'},'fast').css("background","white");
			$('.header-right-search-input').animate({width:'160px'},"fast");
		});
		
		$('.header-right-search-input').focus(function(){
			$('.header-right-search').off("mouseleave");
		}).blur(function(){
			restore();
			$('.header-right-search-input').val("");
			$(".header-right-div").css("display","none")
			$('.header-right-search').mouseleave(function(){
				restore();
			});
			
		});
		
		$('.header-right-search').mouseleave(function(){
			restore();
		});
		
		//改变搜索弹出的div的背景色
		$(".header-right-div-list").on("mouseenter",function(){
			$(this).css("background","#ada")
		}).on("mouseleave",function(){
			$(this).css("background","none")
		});
	}
	
	return search
})