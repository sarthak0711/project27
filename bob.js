class Bob{

    constructor(x,y){
        var options={
            
            isStatic:false,
            friction : 0.5,
            restitution : 0.3,
            density : 1.2
        
        }
        
        this.body=Matter.Bodies.circle(x,y,50,options);
        World.add(world,this.body)
        
    }

display(){

    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x,this.body.position.y,10,10)

    ellipse(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,50,50);
    
}

}