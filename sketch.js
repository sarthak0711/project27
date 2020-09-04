
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob,bob1,bob2,bob3,bob4;
var rope,rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof();
    bob=new Bob(400,500);
    bob1=new Bob(450,500);
    bob2=new Bob(500,500);
    bob3=new Bob(350,500);
    bob4=new Bob(300,500);

    rope=new Rope(bob.body,roof.body,0,300);
    rope1=new Rope(bob3.body,roof.body,-50,300);
    rope2=new Rope(bob2.body,roof.body,100,300);
    rope3=new Rope(bob4.body,roof.body,-100,300);
    rope4=new Rope(bob1.body,roof.body,50,300);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();


  drawSprites();
 
}


function keyPressed(){

  if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bob4.body,bob4.body.position,{x:50,y:0});
  }

}




