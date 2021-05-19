//监测窗口尺寸，用rem实现适应窗口大小
document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
  document.documentElement.style.fontSize = innerWidth/16 + 'px';
}


require.config({
  paths:{
    jquery:'js/jquery-1.12.3',
    underscore:'js/underscore',
    backbone:'js/backbone',
    router:'router',
    text:'js/text',
    swiper:'js/swiper-3.3.1.jquery.min',
    baiduTemplate:'js/baiduTemplate'
  },
  shim:{
    'underscore':{
      export:'_'
    },
    'router':{
      deps:['backbone','jquery']
    }
  }
})

//使用模块
require(['jquery','underscore','router'],function(){

  //监听地址栏的变化（也可以写在router.js中，当写在router.js中时，
  //函数要传参，监听要写成： 参数.history.start();）
  Backbone.history.start();
  $('.footer a').on('click',function(){
    $('.footer a').css('color','#838383');
    $(this).css('color','red');
  })
})
