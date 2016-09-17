define([],function(){
	function add(){
		require(['text!component/leyuan/leyuan.html'],function(content){
				$('#content').html(content)
			})
	}
	function ajax(){
		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城',
			type: 'get',
			async: true,
			success:function(data){
				var obj = JSON.parse(data);
				setdata(obj.data)

			}
		})
		function setdata(arr){
			for (var i = 0; i < arr.length; i++) {
				var liobj = $('<li><img src="'+ arr[i].img+'"/><p>'+ arr[i].name+'</p><p>'+ arr[i].address+'</p><div><i class="iconfont">&#xe62a;</i><span>'+arr[i].dist+'公里</span></div></li>')
				$('.leyuan_box_content ul').append(liobj);
			}
		}
		
		

	}
	function gn(){
		console.log('asd')
			$('.leyuan_box_top_nav_2').on('click',function(){
				console.log('asasasa')
				$('leyuan_box_top_area').css({
					'display':'block'
				})
				$('leyuan_box_top_nav_2').css('borderBottom','1px'+'solid'+'red')
			})
		}



	return{
		'add':add,
		'ajax':ajax,
		'gn':gn
	}


})
