// var carouselWidth = $('.carousel-inner')[0].scrollWidth;
// var cardWidth = $('.carousel-item').width();

// var scrollPosition = 0;
// $('.carousel-control-prev').on('click', function(){
//     if(scrollPosition < 0){
//         console.log('prev')
//         scrollPosition = scrollPosition - cardWidth;
//         $('.carousel-inner').animate({scrollRight: scrollPosition}, 600);
//     }
// });

// $('.carousel-control-next').on('click', function(){
//     if(scrollPosition < (carouselWidth - (cardWidth * 4))){
//         console.log('next')
//         scrollPosition = scrollPosition + cardWidth;
//         $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
//     }
// });


let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 6
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
