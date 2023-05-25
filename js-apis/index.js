var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;
$('.carousel-control-prev').on('click', function(){
    if(scrollPosition < 0){
        console.log('prev')
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-inner').animate({scrollRight: scrollPosition}, 600);
    }
});

$('.carousel-control-next').on('click', function(){
    if(scrollPosition < (carouselWidth - (cardWidth * 4))){
        console.log('next')
        scrollPosition = scrollPosition + cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
    }
});
