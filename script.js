$(document).ready(function(){
  $('#navbar').load('header.html');
});
$(document).ready(function(){
  $('#footer').load('footer.html')
});
 window.onscroll = function() {
   myFunction()
 };
 var header = document.getElementById('navbar');
 var sticky = header.offsetTop;
 function myFunction(){
   if(window.pageYOffset > sticky){
     header.classList.add('sticky');
   } else{
     header.classList.remove('sticky');
   }
 }
