define([],function(){
	//Backbone.js创建路由的方法
	var Router = Backbone.Router.extend({
		routes:{
			//home和html里a标签href里的内容一致，
			'home':'homefunc',
			'leID':'leIDfunc',
			'leyuan':'leyuanfunc',
			'user':'userfunc'
		},
		homefunc : function(){
			console.log('home')
			require(['./component/home/home.js','swiper'],function(res){
				res.add();
				res.ajax();
			})
		},
		leIDfunc : function(){
			require(['./component/leyuan/leyuan.js'],function(res){
				res.add();
				res.ajax();
				res.gn();
			})
		},
		leyuanfunc : function(){
			require(['./component/leID/leID.js'],function(res){
				res.add();
			})
		},
		userfunc : function(){
			require(['component/user/user.js'],function(res){
				res.add()
			})
		}
	});
	var router = new Router();
})