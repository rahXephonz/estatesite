function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

window.addEventListener("load", function(){

	const loader = document.querySelector(".loader");
	console.log(loader);
	loader.className += " hidden"; // class loader hidden

}); 


$(window).scroll(function(){

	$('nav').toggleClass('scrolled', $(this).scrollTop() > 10 );

});

$(window).scroll(function(){

	$('.navbar-bottom').toggleClass('scrolled', $(this).scrollTop() > 4550 );

});

$('.owl-carousel').owlCarousel({
    loop:true,
	center: true,
    nav:false,
    margin: 10,
	dots:true,
	autoplay:true,
	autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
    }
})