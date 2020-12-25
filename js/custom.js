//window scroll desktop
$(document).ready(function(){
    $(window).scroll(function(){
        if( $(window).scrollTop() > 100 ){
            $(".top-logo").css({
                "position" : "fixed",
                "top" : "0",
                "left" : "0",
                "width" : "100%",
            })
        }
        else{
            $(".top-logo").css({
                "position" : "relative",
                "top" : "0",
                "left" : "0",
                "width" : "100%",
            })
        }
    })
})



//window scroll mobile
$(document).ready(function(){
    $(window).scroll(function(){
        if( $(window).scrollTop() > 20 ){
            $(".search-mob").css({
                "position" : "fixed",
                "top" : "0",
                "left" : "0",
                "width" : "100%",
            })
        }
        else{
            $(".search-mob").css({
                "position" : "relative",
                "top" : "0",
                "left" : "0",
                "width" : "100%",
            })
        }
    })
})





//category carousel
$('.category-carousel').owlCarousel({
    loop:false,
    nav:true,
    dots: false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




//product carousel
$('.product-carousel').owlCarousel({
    loop:false,
    nav:true,
    dots: false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



//client carousel
$('.client-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



//ad carousel
$('.ad-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//testimonial carousel
$('.testimonial-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//banner carousel
$('.banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$(document).ready(function(){
   $(".nav-click").click(function(){
       let nav = $(this).attr('id')
       if( nav  != 'all' ){
           $("." + nav).slideToggle()
       }
   })
})

