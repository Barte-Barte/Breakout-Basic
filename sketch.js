var pause, play, pauseImg, playImg, ball, ballImg, paddle, paddleImg, w1, w2, w3, w4, b1, gameState,score=0, synth, blockGroup;
var Blocks=[]
function preload(){
synth=loadSound("synth.wav")
pauseImg=loadImage( "pause.png")
playImg=loadImage("play.png")
ballImg=loadImage("ball Image.png")
paddleImg=loadImage("paddle.png")

}

function setup() {
  synth.loop();
  createCanvas(displayWidth,displayHeight-111);

  w2=createSprite(displayWidth/2,displayHeight-150,displayWidth,80);
  w2.shapeColor=('White')
  w1=createSprite(displayWidth/2,40,displayWidth,80)
  w1.shapeColor=('white')
  w3=createSprite(displayWidth-40, displayHeight/2, 80, displayHeight)
  w3.shapeColor=('white')
  w4=createSprite(40, displayHeight/2, 80, displayHeight)
  w4.shapeColor=('white')
  pause=createSprite(displayWidth/(3/2),displayHeight/(35/2),20,20);
  pause.addImage(pauseImg);
  pause.scale=0.1
  play=createSprite(displayWidth/3, displayHeight/(35/2), 20, 20);
  play.addImage(playImg);
  play.scale=0.1
  ball=createSprite(displayWidth/1.5, displayHeight/2, 10, 10)
  ball.addImage(ballImg)
  ball.scale=0.06
  paddle=createSprite(displayWidth/2, displayHeight/1.33333333, 50, 5)
  paddle.addImage(paddleImg)
  paddle.scale=0.5
   
  b1=createSprite(displayWidth/(8/1), displayHeight/(10/1), 100, 50)
  b2=createSprite(displayWidth/(5), displayHeight/(10), 100, 50)
  b3=createSprite(displayWidth/(3.6), displayHeight/(10), 100, 50)
  b4=createSprite(displayWidth/(2.78), displayHeight/(10), 100, 50)
  b5=createSprite(displayWidth/(2.29), displayHeight/(10), 100, 50)
  b6=createSprite(displayWidth/(1.95), displayHeight/(10), 100, 50)
  b7=createSprite(displayWidth/(1.7), displayHeight/(10), 100, 50)
  b8=createSprite(displayWidth/(1.5),displayHeight/(10), 100, 50)
  b9=createSprite(displayWidth/(1.34), displayHeight/(10), 100, 50)
  b10=createSprite(displayWidth/(1.21), displayHeight/(10), 100, 50)
  b11=createSprite(displayWidth/(8/1), displayHeight/(6/1), 100, 50)
  b12=createSprite(displayWidth/(5), displayHeight/(6), 100, 50)
  b13=createSprite(displayWidth/(3.6), displayHeight/(6), 100, 50)
  b14=createSprite(displayWidth/(2.78), displayHeight/(6), 100, 50)
  b15=createSprite(displayWidth/(2.29), displayHeight/(6), 100, 50)
  b16=createSprite(displayWidth/(1.95), displayHeight/(6), 100, 50)
  b17=createSprite(displayWidth/(1.7), displayHeight/(6), 100, 50)
  b18=createSprite(displayWidth/(1.5),displayHeight/(6), 100, 50)
  b19=createSprite(displayWidth/(1.34), displayHeight/(6), 100, 50)
  b20=createSprite(displayWidth/(1.21), displayHeight/(6), 100, 50)
  b21=createSprite(displayWidth/(8/1), displayHeight/(4.25/1), 100, 50)
  b22=createSprite(displayWidth/(5), displayHeight/(4.25), 100, 50)
  b23=createSprite(displayWidth/(3.6), displayHeight/(4.25), 100, 50)
  b24=createSprite(displayWidth/(2.78), displayHeight/(4.25), 100, 50)
  b25=createSprite(displayWidth/(2.29), displayHeight/(4.25), 100, 50)
  b26=createSprite(displayWidth/(1.95), displayHeight/(4.25), 100, 50)
  b27=createSprite(displayWidth/(1.7), displayHeight/(4.25), 100, 50)
  b28=createSprite(displayWidth/(1.5),displayHeight/(4.25), 100, 50)
  b29=createSprite(displayWidth/(1.34), displayHeight/(4.25), 100, 50)
  b30=createSprite(displayWidth/(1.21), displayHeight/(4.25), 100, 50)
  b31=createSprite(displayWidth/(8/1), displayHeight/(3.28/1), 100, 50)
  b32=createSprite(displayWidth/(5), displayHeight/(3.28), 100, 50)
  b33=createSprite(displayWidth/(3.6), displayHeight/(3.28), 100, 50)
  b34=createSprite(displayWidth/(2.78), displayHeight/(3.28), 100, 50)
  b35=createSprite(displayWidth/(2.29), displayHeight/(3.28), 100, 50)
  b36=createSprite(displayWidth/(1.95), displayHeight/(3.28), 100, 50)
  b37=createSprite(displayWidth/(1.7), displayHeight/(3.28), 100, 50)
  b38=createSprite(displayWidth/(1.5),displayHeight/(3.28), 100, 50)
  b39=createSprite(displayWidth/(1.34), displayHeight/(3.28), 100, 50)
  b40=createSprite(displayWidth/(1.21), displayHeight/(3.28), 100, 50)
  
  blockGroup=new Group(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31, b32,b33, b34,b35,b36,b37,b38,b39,b40)
  Blocks=[b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31, b32,b33, b34,b35,b36,b37,b38,b39,b40]
  for(var i=0; i<Blocks.length; i++)
  {

Blocks[i].shapeColor=color(random(50,255),random(50,255),random(50,255))

  }
}

function draw() {
  
  background(0,0,0);

  console.log(Blocks)
  if(mousePressedOver(play))
  {

    ifPlay()
  }
  if(mousePressedOver(pause))
  {

  ifPause()

  }
  
  

  paddle.x=mouseX
  if(ball.isTouching(w2))
  {

    ball.x=displayWidth/1.5
    ball.y=displayHeight/2
   

  }
  for(var i=0; i<Blocks.length; i++){
   
    if(ball.isTouching(Blocks[i])) 
    {
        
        Blocks[i].destroy();
        console.log("popopopop")
        score++
        //x=this.velocityX
        //y=this.velocityY
        //ball.velocityX=-x
       // ball.velocityY=-y
    }
  }
 paddle.collide(w1)
 paddle.bounceOff(w3)

  ball.bounceOff(w1)
  ball.bounceOff(paddle)
  ball.bounceOff(w3)
  ball.bounceOff(w4)
  ball.bounceOff(b1);
  
 
  drawSprites();
  textSize(30)
  strokeWeight(10)
  fill('Black')
   text("Score:"+score, displayWidth/2,displayHeight/(35/2) )
}

function ifPlay()
{


ball.velocityX=-8
ball.velocityY=-8



}


function ifPause()
{

ball.velocityX=0
ball.velocityY=0

}

