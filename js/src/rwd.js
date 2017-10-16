// rwd.js

(function($){
  // 1. 브라우저 가로값
  var winWidth= $(window).width();
  
  // 2. h1의 text내용 변경해보기 
  var wrap = $('#wrap');
  var h1 = wrap.children('h1');

  //영역별 작성
  if(winWidth <= 640){
    /* mobile */
    h1.text('mobile버전 전용으로 화면 변경합니다.');




  }else if(winWidth > 640 && winWidth <= 1024){
    /*tablet*/
    h1.text('tablet버전 전용으로 화면 변경합니다.');





  }else if(winWidth > 1024 && winWidth <= 1366){
    /* pc */
    h1.text('pc버전 전용으로 화면 변경합니다.');





  }else{
    /* pcful */
    h1.text('pc full버전 전용으로 화면 변경합니다.');




  }


  // 브라우저 사이즈(가로) 변경시 새로고침이 필요하므로,,, f5누르지 않고도 변경되는 명령어 주기!! ++++++++++++++++++++++++
  $(window).on('resize',function(){
    var _nowWidth = $(window).width();

    if(winWidth !== _nowWidth){
    location.reload();  // 새로고침하면서 띄우는거라.. transition이 잘 안되는 것처럼 보임.. 이는 당연한 것.ㅋ 
    }

  });//$(window).function기능 끝.

})(this.jQuery);