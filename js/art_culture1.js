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


  $(".btn li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabContents .res").removeClass("active");
    $("#" + result).addClass("active"); 

  });


  $(".bt_1").click(function(){
    $(".modal.1").fadeIn();
  });
  $(".btn-close.1").click(function(){
    $(".modal.1").fadeOut();
  });

  $(".bt_2").click(function(){
    $(".modal.2").fadeIn();
  });
  $(".btn-close.2").click(function(){
    $(".modal.2").fadeOut();
  });

  $(".bt_3").click(function(){
    $(".modal.3").fadeIn();
  });
  $(".btn-close.3").click(function(){
    $(".modal.3").fadeOut();
  });

  $(".bt_4").click(function(){
    $(".modal.4").fadeIn();
  });
  $(".btn-close.4").click(function(){
    $(".modal.4").fadeOut();
  });

});
