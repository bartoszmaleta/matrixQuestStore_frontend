
// function init() {
//     audio = document.getElementById("audio");
//     c = document.getElementById("c");
//     ctx = can.getContext("2d");
//     audio.addEventListener("playing", draw, false);
//     audio.addEventListener("pause", stop, false);
//     audio.addEventListener("ended", stop, false);
// }

function alertMessage() {
    alert("If there was a backend You would be logging in right now (probably). Try this button after May 1st 2020, hopefully...");
}

// ------------------------------------------------------------------------------
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = document.body.clientWidth;
c.width = document.body.clientWidth;

//chinese characters - taken from the unicode charset
var chinese = "P.Grax Denim";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++) drops[x] = 1;

//drawing the characters
function draw() {
   //Black BG for the canvas
   //translucent BG to show trail
   ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
   
   ctx.fillRect(0, 0, c.width, c.height);

   ctx.fillStyle = "#0F0"; //green text
   ctx.font = font_size + "px arial";
   //looping over drops
   for (var i = 0; i < drops.length; i++) {
      //a random chinese character to print
      var text = chinese[Math.floor(Math.random() * chinese.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > c.height && Math.random() > 0.975)
         drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
   }
}

setInterval(draw, 33);

// sound 
function play() {

    var audio = new Audio('../Sounds/m.mp3');
    audio.loop = true;
    audio.play().then(function(e) {
        clearInterval(musicIntervalId);
    });

}

var musicIntervalId = setInterval(play, 500);