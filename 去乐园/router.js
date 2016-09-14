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
			require(['text!component/leID/leID.html'],function(content){
				$('#content').html(content)
			})
		},
		leyuanfunc : function(){
			require(['text!component/leyuan/leyuan.html'],function(content){
				$('#content').html(content)
			})
		},
		userfunc : function(){
			require(['text!component/user/user.html'],function(content){
				$('#content').html(content)
			})
		}
	});
	var router = new Router();
})