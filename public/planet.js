function Planet(r, x, y,r,g,b){
  //Whether the player can go through or not
  playerBarrier = true;

  //Sets position of planet
  this.pos = createVector(x, y);

  //Sets radius of planet
  this.r = r;

  this.show = function(){

    //Sets color to white then creates the eclipse at position
    fill(r,g,b,255);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);

  }

  this.intersectsOtherPlanet = function(otherPlanet){
    distance = dist(this.pos.x, this.pos.y, otherPlanet.pos.x, otherPlanet.pos.y);
    if(distance < (this.r + otherPlanet.r)){
      return false;
    }
  }




}
