
var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Freelancer")
  .pauseFor(2500)
  .start();
