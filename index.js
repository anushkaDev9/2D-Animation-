function get_random_color() {
  var letters = 'ABCDE'.split('');
  var color = '#';
  for (var i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
  }
  console.log(color)
  return color;
}

function myFunction() {
  var context;
  var dx = 4;
  var dy = 4;
  var y = 150;
  var x = 10;
  var color = get_random_color();

  function draw() {
      context = myCanvas.getContext('2d');
      context.clearRect(0, 0, 1900, 760);
      context.beginPath();
      context.fillStyle = color;
      context.arc(x, y, 40, 0, Math.PI * 2, true);
      
      context.fill();
      if (x < 0 || x > 1900) {
          dx = -dx;
          color = get_random_color();
      }
      if (y < 0 || y > 760) {
          dy = -dy;
          color = get_random_color();
      }
      x += dx;
      y += dy;
  }
  setInterval(draw, 10);
}