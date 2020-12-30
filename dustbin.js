class dustbin{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
        'friction':1,
        'density':1
        }
    }
}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);


display()
{
var pos = this.body.position;
var angle = this.body.angle;
fill(255);
push() //- saving a setting
translate(pos.x,pos.y); //-origin of point for rotation
rotate(angle); //-angle for rotation
rectMode(CENTER);
strokeWeight(4);
stroke("blue");
rect(0,0,this.width,this.height);
pop(); // - restoring the setting
}
