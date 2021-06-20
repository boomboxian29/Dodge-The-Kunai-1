var bgImg;
var Naruto,Naruto2,Naruto3,Naruto4;
var NarutoIMG;
var Boruto,BorutoIMG;
var Kunai,KunaiIMG;

function preload() {
 bgImg=loadImage("images/Konohagaruke.jpg")
 NarutoIMG=loadImage("images/Narto-removebg-preview.png")
 
 BorutoIMG=loadImage("images/Boruto-removebg-preview.png")
 KunaiIMG=loadImage("images/Kunai.png")

}

function setup(){
    createCanvas(1000,800);
    Boruto=createSprite(200,700) 
    Naruto=createSprite(300,250,1,1)
    Naruto2=createSprite(500,300,1,1)
    Naruto3=createSprite(700,350,1,1)
    Naruto4=createSprite(100,250,1,1)
    Naruto.addImage(NarutoIMG)
   Naruto2.addImage(NarutoIMG)
   Naruto3.addImage(NarutoIMG)
   Naruto4.addImage(NarutoIMG)
   Boruto.addImage(BorutoIMG)
   
}

function draw() {

    background(bgImg);
    kunai()

    drawSprites();
}


function keyPressed(){
 if (keyCode===39){
 Boruto.x=Boruto.x+50 
 }
 else if(keyCode===37){
 Boruto.x=Boruto.x-50 
 }
  //For moving and changing animation write code here


}
function kunai(){
  if(frameCount%30===0){
  Kunai=createSprite(Math.round(random(10,600)),300,1,1)
  Kunai.addImage(KunaiIMG)
Kunai.scale=0.2;
Kunai.velocityY=10  
  }




}