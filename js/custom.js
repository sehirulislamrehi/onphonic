$(document).ready(function(){
   $(".nav-click").click(function(){
       let nav = $(this).attr('id')
       if( nav  != 'all' ){
           $("." + nav).slideToggle()
       }
   })
})