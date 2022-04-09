
var checkKeypress = true;
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

// play the music of my hometown button
$(".soundscape").on("click", () => {
  $(".intro").fadeOut(1000);
  $('.carouselClass').fadeIn(1000);
  drums.play();
});

// make my own music button
$(".makemymusic").on("click", () => {
  $(".intro").fadeOut(1000);
  $('.interactivesound').fadeIn(1000);
  checkKeypress = true;

});

const synth = new Tone.Synth().toDestination();
var notes = ['D4', 'C2', 'F4', 'C4', 'A4', 'C5', 'E5', 'C1'];
var lenNote = ['8n', '6n']
$("body").on("keypress", () => {
  const randNum = Math.floor(Math.random() * notes.length);
  const randNum2 = Math.floor(Math.random() * lenNote.length);

  if (checkKeypress) {
    synth.triggerAttack(notes[randNum], lenNote[randNum2]);
  }
});
$("body").on("keyup", () => {
  if (checkKeypress) {

    synth.triggerAttackRelease();
  }
});

// for carousel options
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
