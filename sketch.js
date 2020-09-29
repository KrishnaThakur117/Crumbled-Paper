const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin1,base;
var crumbledpaper;
var dustbin2,dustbin3;

function preload()
{}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
	base = new Ground(width/2,670,width,20);

	crumbledpaper = new paperclass(200,450,40);
	dustbin1 = new Dustbin(1200,500);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  crumbledpaper.display();
  base.display();
  dustbin1.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(crumbledpaper.body,crumbledpaper.body.position,{x:1200,y:490});
	}
}



