$(function(){

  $("#button").click(function(){
    $("#menu").slideToggle();
    return false;
  });

  $(window).resize(function(){

	if( $(window).width() > 480){
		$("#menu").show();
    } else {
		$("#menu").hide();
    }
  });

});
