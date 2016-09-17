define([],function(){
	function add(){
		require(['text!component/user/user.html'],function(content){
			$('#content').html(content)
		})
	}
	





	return{
		'add':add
	}

})