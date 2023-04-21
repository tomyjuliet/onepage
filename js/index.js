$(document).ready(function(){

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnb_list").stop(true,true).slideToggle("fast");
  });

  $(".main").click(function(){
    $(this).siblings().find(".sub").slideUp(300);
    $(this).siblings().find(">a").removeClass("uparrow")
    $(this).find(".sub").stop().slideToggle(200);
    $(this).find(">a").toggleClass("uparrow");
  });

  //브라우저 높이 가져오기
  let wh = $(window).height();

  /*브라우저 창 사이즈 변경시___________ */
  $(window).resize(function(){
    wh = $(window).height();
    $("html,body").stop().animate({ scrollTop:wh*a },700); 
  });


  /* 탑메뉴 클릭시______________________ */
  $("#gnb li,#dot span").click(function(){
    let num=$(this).index();
    $("html,body").stop().animate({ scrollTop:wh*num },700); 
    $("#dot span").eq(num).addClass("active");
		$("#dot span").eq(num).siblings().removeClass("active");
  });
  

  /* 마우스휠__________________________ */
  let a = 0;  //페이지번호
	let area_n = $(".area").length;  //섹션개수
	let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll",function(e,delta) {

    e.preventDefault();  //요소의 기본기능해제
    if ( wheel ) {
      let n = $(this).index();

      if(delta < 0) { //휠을 아래로 돌렸다면
        a = n+1;
      }else{ //휠을 위로 돌렸다면
        a = n-1;
      }

      if ( a <= 0 ) { a = 0; }
      if ( a >= area_n-1 ) { a = area_n-1; }

      $("#tt").text(a); 
      $("html,body").stop(true,true).animate({ scrollTop:wh*a },700); 	

    }

  });


  /* 스크롤이벤트______________________ */
  $(window).scroll(function(){
  
    let sc = $(document).scrollTop();
    if((sc >= wh) && (sc < wh*2)) {
      a=1;
      $("#tt").text(a);
      $(".gallery_contents h1").delay(200).animate({top:"30%",opacity:"1"},700,function(){
        $(".gallery_contents p").delay(200).animate({top:"61%",opacity:"1"},700,function(){
          $(".gallery_contents button").delay(200).animate({opacity:"1"},700);
        });
      });
    }

    if((sc >= wh*2) && (sc < wh*3)) {   
      a=2; 
      $("#tt").text(a);
      $(".business_contents h1").delay(200).animate({top:"30%",opacity:"1"},700,function(){
        $(".business_contents p").delay(200).animate({top:"61%",opacity:"1"},700,function(){
          $(".business_contents button").delay(200).animate({opacity:"1"},700);
        });
      });
    }

    if(sc >= wh*3) {   
			a=3; 
      $("#tt").text(a);
      $(".culture_contents h1").delay(200).animate({top:"0px",opacity:"1"},700,function(){
        $(".culture_contents p").delay(200).animate({top:"100px",opacity:"1"},700);

      });
		}    

  });

});
