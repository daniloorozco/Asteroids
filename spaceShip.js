function spaceShip(){
  this.pos = createVector(width/2, height/2);
  this.r = 10;
  this.heading = 0;
  this.rotation = 0;
  this.velocity = createVector(0,0);
  this.isBoosting = false;

  this.boosting = function(x){
    this.isBoosting = x;
  }

  this.update = function() {
    if (this.isBoosting){
      this.boost();
    }
    this.pos.add(this.velocity);
    this.velocity.mult(0.99);
  }
  this.boost = function(){
    let force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.velocity.add(force);
  }

  this.render = function(){
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI/2);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }
  this.setRotation = function(x){
    this.rotation = x;
  }
  this.turn = function(){
    this.heading += this.rotation;
  }

  //wrap around function
  this.edges = function(){
    if (this.pos.x > width + this.r){
      this.pos.x = -this.r;
    }
    else if (this.pos.x < -this.r){
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r){
      this.pos.y = -this.r;
    }
    else if (this.pos.y < -this.r){
      this.pos.y = height + this.r;
    }
  }
}
