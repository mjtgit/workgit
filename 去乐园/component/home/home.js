define([],function(){
	function add(){
		require(['text!component/home/home.html'],function(content){
				$('#content').html(content)
			})
	}
	function ajax(){
		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/home_data.php',
			type: 'get',
			async: true,
			success:function(data){
				var obj = JSON.parse(data);
				setdata(obj)
			}
		})
		function setdata(obj){
			for (var i = 0; i < obj.slider.length; i++) {
				var imgobj = $('<div class="swiper-slide"><img src="'+ obj.slider[i].img+'"/></div>')
				$('.swiper-wrapper').append(imgobj)
				// console.log(obj.slider[i].img)
			}
		  	var mySwiper = new Swiper ('.swiper-container', {
			    // direction: 'vertical',
			    loop: true,
			    
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    
			    // 如果需要滚动条
			    scrollbar: '.swiper-scrollbar',
			    autoplay: 3000,//可选选项，自动滑动
		  	})  
		  	for (var i = 0; i < obj.arealist.length; i++) {
		  		var aimg = $('<a href="'+obj.arealist[i].href+'"><img src="'+ obj.arealist[i].img+'"></a>');
		  		$('.home_banner').append(aimg)
		  	} 
		  	for (var i = 0; i < obj.reclist.length; i++) {
		  		var liobj = $('<li><img src="'+obj.reclist[i].img +'"/></li>')
		  		$('.home_imgslist').append(liobj)
		  	}


				
		}
	}
	
	










	return{
		'add':add,
		'ajax':ajax
	}
})