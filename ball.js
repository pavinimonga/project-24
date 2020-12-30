class ball{
    constructor(x,y){
        var options={
            'restitution':0.5,
        'friction':1,
        'density':1.5
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height =50;
        World.add(world,this.body);
    }

    display()
    {
        if(keyDown("up")){
            var angle = this.body.angle;
            push() 
            translate(pos.x,pos.y);
            strokeWeight(4);
            stroke("blue");
            rect(0,0,this.width,this.height);
            pop(); 
            rotate(angle); 
            rectMode(CENTER);

        }
    }
