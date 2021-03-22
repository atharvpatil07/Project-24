const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(100,300,50);
    stone = new Stone(200,300);
    iron = new Iron(300,300);
   
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubber.display();
    stone.display();
    iron.display();
 
}