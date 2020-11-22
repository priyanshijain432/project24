class paperBall {
    constructor(x,y,radius){
  var options = {
      isStatic:false,
      restitution:0.3,
      fiction:0.5,
      density:1.2
  }
  this.body = bodies.circle(x,y,radius);
  this.radius = radius;

   World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        elipseMode(CENTER)
        fill("pink");
        circle(pos.x,pos.y,this.radius);
    }
}


