// archivo.js
$(document).ready(function() {
   $(".menu ul li").on('click', function(){
    $(".menu ul li.active").removeClass('active');
    $(this).addClass('active');
   });
});
