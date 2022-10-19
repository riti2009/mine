var slytherin, draco
var death1, kill1
var death2, kill2
var death3, kill3
var death4, kill4
var death5, kill5
var death6, kill6
var death7, kill7
var death8, kill8
var death9, kill9
var death10, kill10
var death11, kill11
var bgimg
var gamestate = 'intro'
var edges

function preload(){

    slytherin = loadImage('draco.png');

    death1 = loadImage('1.png');
    death2 = loadImage('2.png');
    death3 = loadImage('3.png');
    death4 = loadImage('4.png');
    death5 = loadImage('5.png');
    death6 = loadImage('6.png');
    death7 = loadImage('7.png');
    death8 = loadImage('8.png');
    death9 = loadImage('9.png');
    death10 = loadImage('10.png');
    death11 = loadImage('11.png');

    bgimg = loadImage('malfoy.webp');

}

function setup(){

    createCanvas(1200, 600);
    edges = createEdgeSprites();

    draco = createSprite(600, 540);
    draco.addImage(slytherin);
    draco.scale = 0.3

}

function draw(){

    background(bgimg);
    if (gamestate == 'intro'){

       textSize(30);
       fill('white');
       text('Death Eaters On The Loose', 400, 50);
       textSize(20);
       text('Try to hit death eaters with the green spells', 400, 100);
       text('to kill, but try not to get hit yourself.', 400, 125);
       text('If you get hit with a red one, u lose points.', 400, 150);
       text('You will have limited green spells, so choose wisely', 400, 175);
       text('when to use.', 400, 200);
       text('Press right and left arrow keys to move.', 400, 225);
       text('Up for red, down for green spells', 400, 250);
       textSize(30);
       text('Press the space bar to continue...', 400, 300);
       
       if (keyDown('space')){

        gamestate = 'play';
        clear()

       }

    }
    
    if (gamestate == 'play'){
         
       
       //slytherin.collide(edges);

       drawSprites()
    }









}

function keyPressed(){
    if (gamestate == 'play'){

        if (keyCode == 37){
            slytherin.x -= 4;
           }
           
           if (keyCode == 39){
            slytherin.x += 4;
           }
    
    }
}



