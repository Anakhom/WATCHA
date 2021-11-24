//-------first animation
const letters = new Letterize({
        targets: ".animate"
      });

const animation = anime.timeline({
  targets: letters.listAll,
  delay: anime.stagger(100, {
    grid: [letters.list[0].length, letters.list.length],
    from: "center"
  }),
  loop: true
});

animation
  .add({
    scale: 0.5
  })
  .add({
    letterSpacing: "10px"
  })
  .add({
    scale: 1
  })
  .add({
    letterSpacing: "6px"
  });

//------second animation
let textWrapper = document.querySelector('.ml12');
//wrapping every single letter in a span
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [2,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });