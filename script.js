
var textElem = $(".intro p");
setTimeout(() => {

  textElem.fadeOut(1000, () => {
    textElem.text("Hi");
  });
  textElem.fadeIn(1000);
  setTimeout(() => {
    textElem.fadeOut("slow", () => {
      textElem.text("Welcome to my soundscape. Please select how you would like to proceed.");
    });
    textElem.fadeIn(2000, () => {
      $(".buttonClass").stop().css('display', 'block').hide().slideDown();
    });

  }, 1600);
}, 1000);



var drums = document.getElementById("drums");
var intro = document.querySelector(".intro");

$(".soundscape").on("click", () => {
  $(".intro").fadeOut(1000);
  $('.carouselClass').fadeIn(1000);
  drums.play();

});
$('.carousel').carousel({
  interval: 2000,
  ride: true
});

// drums.addEventListener("timeupdate", () => {
//   // console.log(drums.currentTime);
// })

// intro.addEventListener("click", () => {
//   intro.classList.add('hidden');
//
// });
// download and try tone js
