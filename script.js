$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('black');
    $('nav .logo').addClass('resize');
  }
  else{
    $('nav').removeClass('black');
    $('.logo').removeClass('resize');
  }
});
$(document).ready(function(){
  $('#navbar').load('header.html');
});
$(document).ready(function(){
  $('#footer').load('footer.html')
});

function redirectAlert(){
  alert('You will be redirected to you email to send message');
  alert("If you don't have an email please create one before sending")
}
