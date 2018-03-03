function Bullet(shipPos, angle){
  this.pos = createVector(shipPos.x, shipPos.y);
  this.velocity = p5.Vector.fromAngle(angle);
  this.velocity.mult(5);

  this.update = function(){
    this.pos.add(this.velocity);
  }
  this.render = function(){
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  }
}
