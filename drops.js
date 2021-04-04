class Drops {
    constructor(x,y) {
        var options = {
            'restitution':0.5,
            'friction':0.1,
            'density':1.0
        }
        this.rain = Bodies.circle(x,y,5, options);
        this.radius =5;
        World.add(world, this.rain);
    }
    display(){
        var pos =this.rain.position;
        var angle = this.rain.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        stroke("blue");
        strokeWeight(2);
        ellipse(0,0,this.radius,this.radius);
        pop();
    
    }
    update(){
        if(this.rain.position.y > 400) {
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
}