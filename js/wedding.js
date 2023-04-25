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


  /* 탭메뉴 클릭_____________________________*/

  $(".tab li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".panel li").removeClass("active");
    $("#" + result).addClass("active"); 
  
  });


  //해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴....(마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함)
  $(".tab li:first-child").click(function(){  
    $(".gallery1 .thumbs li:first").click();
  });
  $(".tab li:nth-child(2)").click(function(){  
    $(".gallery2 .thumbs li:first").click();
  });
  $(".tab li:last-child").click(function(){  
      $(".gallery3 .thumbs li:first").click();
  });


  /*탭메뉴별 이미지갤러리_____________________________*/

  //tab1-gallery
  let goldidxA=0; 
	let gidxA=0;

  function galleryImgA(gidxA){ 

    if(goldidxA!=gidxA){ 
      $(".gallery1 .thumbs li").eq(goldidxA).css({"opacity":0.3}); 
      $(".gallery1 .thumbs li").eq(gidxA).css({"opacity":1}); 
      $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(100);  
      $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(100);
    }
    goldidxA=gidxA; 

  }

  $(".gallery1 .thumbs li").click(function(){

    gidxA=$(this).index();
    galleryImgA(gidxA);
  
  });


  //tab2-gallery
  let goldidxB=0; 
	let gidxB=0;

  function galleryImgB(gidxB){ 

    if(goldidxB!=gidxB){ 
      $(".gallery2 .thumbs li").eq(goldidxB).css({"opacity":0.3}); 
      $(".gallery2 .thumbs li").eq(gidxB).css({"opacity":1}); 
      $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(100);  
      $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(100);
    }
    goldidxB=gidxB; 

  }

  $(".gallery2 .thumbs li").click(function(){

    gidxB=$(this).index();
    galleryImgB(gidxB);
  
  });


  //tab3-gallery
  let goldidxC=0; 
	let gidxC=0;

  function galleryImgC(gidxC){ 

    if(goldidxC!=gidxC){ 
      $(".gallery3 .thumbs li").eq(goldidxC).css({"opacity":0.3}); 
      $(".gallery3 .thumbs li").eq(gidxC).css({"opacity":1}); 
      $(".gallery3 .largeImg li").eq(goldidxC).stop().fadeOut(100);  
      $(".gallery3 .largeImg li").eq(gidxC).stop().fadeIn(100);
    }
    goldidxC=gidxC; 

  }

  $(".gallery3 .thumbs li").click(function(){

    gidxC=$(this).index();
    galleryImgC(gidxC);
  
  });

   //tab4-gallery
   let goldidxD=0; 
   let gidxD=0;
 
   function galleryImgD(gidxD){ 
 
     if(goldidxD!=gidxD){ 
       $(".gallery4 .thumbs li").eq(goldidxD).css({"opacity":0.3}); 
       $(".gallery4 .thumbs li").eq(gidxD).css({"opacity":1}); 
       $(".gallery4 .largeImg li").eq(goldidxD).stop().fadeOut(100);  
       $(".gallery4 .largeImg li").eq(gidxD).stop().fadeIn(100);
     }
     goldidxD=gidxD; 
 
   }
 
   $(".gallery4 .thumbs li").click(function(){
 
     gidxD=$(this).index();
     galleryImgD(gidxD);
   
   });


});
