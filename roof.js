class Roof{

    constructor(){

        var options={
            isStatic:true
        }

        this.body=Matter.Bodies.rectangle(400,200,500,20,options);
        World.add(world,this.body);
    }

    display(){

        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,500,20)

    }
}