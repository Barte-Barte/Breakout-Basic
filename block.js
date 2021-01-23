class Block{

constructor(x,y){
this.x=x
this.y=y   
this.color=color(random(50,255),random(50,255),random(50,255))
this.block=createSprite(this.x, this.y, 100, 50)
}
display(){
fill(this.color)
 drawSprites()


}



}