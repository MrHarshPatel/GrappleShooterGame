function Player(r, x, y){
  this.center = createVector(windowWidth/2, windowHeight/2);

  var speed = 5;
  //Sets position to center of the screen
  this.pos = createVector(x, y);

  //Sets radius of player
  this.r = r;

  //Sets position of guns
  this.gunPos = createVector(x,(y-r));

  //Radius of gun
  this.gunR = (this.r)/5;



  this.show = function(){

    //Sets color to white then creates the eclipse at position
    fill('white');
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);

    //Draws the guns
    fill('yellow');
    ellipse(this.gunPos.x, this.gunPos.y, this.gunR*2, this.gunR*2);
  }

  this.update = function(){
    var mouse = createVector(mouseX, mouseY);
    this.center = createVector(windowWidth/2, windowHeight/2);

    if(keyIsDown(68)){ //RIGHT D
      this.pos.x += speed;
    }
    if(keyIsDown(65)){//LEFT A
      this.pos.x -= speed;
    }
    if(keyIsDown(87)){//UP W
      this.pos.y -= speed; //REMEMBER UP IS LOWER Y VALUE
    }
    if(keyIsDown(83)){//DOWN S
      this.pos.y += speed;
    }


    mouse.sub(this.center);
    mouse.setMag(this.r);

    this.gunPos.x = this.pos.x + mouse.x;
    this.gunPos.y = this.pos.y + mouse.y;


  }

}
