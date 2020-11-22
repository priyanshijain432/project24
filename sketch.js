
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  // ball = new paperBall(300,650,3);

  box1 = new box(700,700,30,30,{isStatic:true});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();

  
  drawSprites();
 
}



