var ship;
var bullets = [];

function setup(){
  createCanvas(600, 600);
  ship = new spaceShip();
}
function draw(){
  background(0);

  for (var i = 0; i < bullets.length; i++){
    bullets[i].render();
    bullets[i].update();
  }
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}
function keyReleased(){
  ship.setRotation(0);
  ship.boosting(false);
}
function keyPressed(){
  if (keyCode == 32){
    bullets.push(new Bullet(ship.pos, ship.heading));
  }
  if (keyCode == RIGHT_ARROW){
    ship.setRotation(0.1);
  }
  else if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.1);
  }
  else if (keyCode == UP_ARROW){
    ship.boosting(true);
  }
}
