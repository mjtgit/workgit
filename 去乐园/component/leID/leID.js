define([],function(){
	function add(){
		require(['text!component/leID/leID.html'],function(content){
			$('#content').html(content)
		})
	}
	return{
		'add':add
	}
})