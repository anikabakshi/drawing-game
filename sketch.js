var ball;
var database,bpos,xyposition;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    bpos=database.ref("ball/position");
    bpos. on("value",read_position);
}

function draw(){
    //background();
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
   // ball.y = ball.y + y;
   database.ref("ball/position").set({
      x:position.x+x,
      y:position.y+y
   })
}

function read_position(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
