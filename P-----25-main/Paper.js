class Paper{
constructor(x,y,radius){
var options = {
  //  isStatic:false,
'restitution':0.3,
'friction':0.003,
'density':1.2

}
this.body = Bodies.circle(x,y,radius,options)
this.radius =radius;

this.img = loadImage("paper.png")
World.add(world,this.body)



}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
strokeWeight(4);
stroke("green");
fill(255);
image(this.img,0, 0, this.radius, this.radius);
pop();


}















}