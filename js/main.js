$(function(){
$(window).scroll(function() {
if($(this).scrollTop() >= 270) {
$('.nav-bar').addClass('fixed-top');
}
else{
$('.nav-bar').removeClass('fixed-top');
}
});
});

 $('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   dots: true,
   focusOnSelect: true,
   autoplay: true,
  autoplaySpeed: 6000,
   responsive: [
                            {
                              breakpoint: 1200,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 1008,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            },
                            {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }

                          ]
            });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });