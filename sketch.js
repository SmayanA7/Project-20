var car,wall;
var spped,weight;
var wall2,wall3,wall4;
var car2,car3,car4;
var partion1,partion2,partion3;

function setup() {
   createCanvas(displayWidth,displayHeight);

   partion1 = createSprite(displayWidth/2,displayHeight/4,displayWidth,10);
   partion2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,10);
   partion3 = createSprite(displayWidth/2,displayHeight/4+displayHeight/2,displayWidth,10);

   speed = random(50,70);
   weight = random(400,1500);

   car = createSprite(displayWidth/2 - 700,displayHeight/4 - 100,50,20);
   car.velocityX = speed;
   car2 = createSprite(displayWidth/2 - 700,displayHeight/4 + 100,50,20);
   car2.velocityX = speed;
   car3 = createSprite(displayWidth/2 - 700,displayHeight/2 + 100,50,20);
   car3.velocityX = speed;
   car4 = createSprite(displayWidth/2 - 700,displayHeight/4 + displayHeight/2 + 100,50,20);
   car4.velocityX = speed; 

   wall = createSprite(displayWidth/2 + 650,displayHeight/4 - 100,20,50);
   wall2 = createSprite(displayWidth/2 + 650,displayHeight/4 + 100,20,50);
   wall3 = createSprite(displayWidth/2 + 650,displayHeight/2 + 100,20,50);
   wall4 = createSprite(displayWidth/2 + 650,displayHeight/4 + displayHeight/2 + 100,20,50);
}

function draw() {
   background("#000000");
   partion1.shapeColor = "#FFFFFF"
   partion2.shapeColor = "#FFFFFF"
   partion3.shapeColor = "#FFFFFF"

   car.shapeColor = "#FFFFFF"
   car2.shapeColor = "#FFFFFF"
   car3.shapeColor = "#FFFFFF"
   car4.shapeColor = "#FFFFFF"

   //wall.shapeColor = "#505050"

  
   if (wall.x-car.x < (car.width + wall.width)/2) 
  {
    car.velocityX = 0;
    car2.velocityX = 0;
    car3.velocityX = 0;
    car4.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if (deformation > 180) 
    {
        car.shapeColor = color(255,0,0);
        car2.shapeColor = color(255,0,0);
        car3.shapeColor = color(255,0,0);
        car4.shapeColor = color(255,0,0);
 
    }

    if (deformation < 180 && deformation > 100) 
    {
      
       car.shapeColor = (230,230,0);
       car2.shapeColor = (230,230,0);
       car3.shapeColor = (230,230,0);
       car4.shapeColor = (230,230,0);

    }

    if (deformation < 100)
    {

       car.shapeColor = color(0,255,0);
       car2.shapeColor = color(0,255,0);
       car3.shapeColor = color(0,255,0);
       car4.shapeColor = color(0,255,0);

    }
  }
 car.display();
 car2.display();
 car3.display();
 car4.display();
 partion1.display();
 partion2.display();
 partion3.display();
 wall.display();
 wall2.display();
 wall3.display();
 wall4.display();
//  speed,display();
//  weight.display();
}