class Bob{

    constructor(x,y){
        var options={
            
            isStatic:false,
            friction : 0,
            restitution : 0.9,
            density : 1.2
        
        }
        
        this.body=Matter.Bodies.circle(x,y,25,options);
        World.add(world,this.body)
        
    }

display(){

    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x,this.body.position.y,10,10)

    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,25,25);
    
}

}
