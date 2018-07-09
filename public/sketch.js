var player;

var planets = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Player(25, width/2, height/2);

	//Adds planets
	for(var i = 0; i < 10; i++){
		let r = random(255);
		let g = random(255);
		let b = random(255);
		planets[i] = new Planet(random(50,100), random(width), random(height), r,g,b);
	}

}

function draw() {
	background(0);
	translate(windowWidth/2-player.pos.x,windowHeight/2-player.pos.y);
	player.show();
	for(var i = 0; i < 10; i++){
		planets[i].show();
	}
	player.update();

}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
