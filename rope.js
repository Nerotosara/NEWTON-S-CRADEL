class rope{
constructor(body1,body2,offsetX,offsetY){
this.offsetX=offsetX
this.offsetY=offsetY
var ropes={
bodyA:body1,
bodyB:body2,
pointB:{x:this.offsetX, y:this.offsetY}

}
this.rope=Constraint.create(ropes)
World.add(world,this.rope);


}
display(){
    var pointA=this.Rope.bodyA.position;
    var pointB=this.Rope.bodyB.position;

    strokeWeight(2);
    var Anchor1X =pointA.x
    var Anchor1Y =pointA.y

    var Anchor2x=pointB.x+this.offsetX
    var Anchor2y=pointB.y+this.offsetY
    
    line(Anchor1X,Anchor1Y,Anchor2x,Anchor2y);
}


}