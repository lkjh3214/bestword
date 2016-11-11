var express = require('express');
var app = express();
var fs = require('fs');
var http=require('http');
// var router = require('router');
// 存储从文件读取的数据
var gdata = null;
var bdata = null;
var fdata = null;
var mdata = null;

fs.readFile('data/nav.json',function(err,data){
	if(err)
		console.log(err);
		gdata = data;
		fs.readFile('data/banner.json',function(err1,dat){
			if(err1)
				console.log(err1);
				bdata = dat;				
				fs.readFile('data/freeWalk.json',function(err2,da){
					if(err2)
						console.log(err2);
						fdata = da;	
						fs.readFile('data/menu.json',function(err3,d){
							if(err3)
								console.log(err3);
								mdata = d;
								if(err&&err1&&err2&&err3){
									console.log('无法启动')
								}
								app.listen(9000);
								console.log('服务已启动');						
						})
				})
		})
});

// 提供web服务功能
app.use(express.static('www'));
app.all('/*',function(req,res,next){
	console.log('我是根')
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})

app.get("/znav",function(req,res,next){
	console.log('请求');
	res.header("Content-type","application/json");
	// console.log(JSON.parse(gdata));
	res.send(gdata);
});
app.get("/banner",function(req,res,next){
	console.log('请求');
	res.header("Content-type","application/json");
	console.log(bdata);
	res.send(bdata);
})
app.get("/freeWalk",function(req,res,next){
	console.log('请求');
	res.header("Content-type","application/json");
	console.log(fdata);
	res.send(fdata);
})
app.get("/menu",function(req,res,next){
	console.log('请求');
	res.header("Content-type","application/json");
	console.log(mdata);
	res.send(mdata);
});


app.get('/',function(req,res){
	//获取用户传递过来的函数
	var arg=req.query['kw'];
	httpSearch(arg,function(info){
		res.send(JSON.parse(info));
	});
	console.log(req.query['kw']);
});
function httpSearch(kwVal,callback){
	http.get('http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword='+kwVal,function(httpRes){
		var buffers=[];
		httpRes.on('data',function(chunk){
			buffers.push(chunk);
		});
		httpRes.on('end',function(chunk){
			var wholeData=Buffer.concat(buffers);
			var dataStr=wholeData.toString('utf8');
			callback(wholeData);

		});

	}).on('error',function(e){
			console.log(e);
		});
}