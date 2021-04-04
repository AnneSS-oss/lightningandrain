const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine;
var world;
var maxDrops = 100;
var drops = []

function preload(){
    
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world
    if (frameCount%400===0) {
        for (var i=0; i<maxDrops; i++) {
        drops.push(new Drops(random(0,400), random(0,400)));
    }
    }
    

    
}

function draw(){
    background("black");
    Engine.update(engine)
    for (var i=0; i<drops.length; i++) {
        drops[i].display();
        drops[i].update();
    }
    
    
 
}   

