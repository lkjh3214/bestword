requirejs.config({
	baseUrl:'js/lib',
	paths:{
		'app':'../app',
		'jquery':'jquery-3.1.1',
		'xhr':'../app/xhr',
		
	},
	shim:{
		'xhr':{
			exports:'createXHR'
		}
	}
});
define(['jquery','app/myfn','xhr','app/header','app/ajax','app/banner','app/sbanner','app/search',],function($,base,xhr,head,ajax,banner,sbanner,search){
	$(document).ready(function(){
//		顶部广告---顶部搜索栏.模块加载
		head();
		//顶部搜索栏 添加键盘事件
		search();
		//轮播图;
		ajax("/banner",banner);
		//边导航
		ajax("/menu",sbanner)
		//
	})
})