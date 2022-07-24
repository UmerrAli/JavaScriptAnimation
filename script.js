x=500;
y=650;

dx1=200;
dy1=900;
dx2=400;
dy2=1150;
dx3=1000;
dy3=1000;

obj1=false;
obj2=false;
obj3=false;
inputRack=0;

function setup(){
    createCanvas(1200,1300);
    imageMode(CENTER);
}

function preload() {
    car1 = loadImage('car.png');
    car2 = loadImage('car2.png');
    car3 = loadImage('car3.png');
    car4 = loadImage('car4.png');
    rack = loadImage('rack.png');
    road = loadImage('road.png');
    diamond = loadImage('diamond.png');
}

function keyPressed() {
    if (keyCode === 65) {
        obj1=true;
    } 
    else if (keyCode === 66) {
        obj2=true;
    } 
    else if (keyCode === 67) {
        obj3=true;
    }
    if(keyCode === 49) {
        inputRack=1;
    }
    if (keyCode === 50) {
        inputRack=2;
    }
    if (keyCode === 51) {
        inputRack=3;
    }
    if (keyCode === 52) {
        inputRack=4;
    }
    if (keyCode === 53) {
        inputRack=5;
    }
    if (keyCode === 54) {
        inputRack=6;
    }
    if (keyCode === 55) {
        inputRack=7;
    }
    if (keyCode === 56) {
        inputRack=8;
    }
    if (keyCode === 57) {
        inputRack=9;
    }
    if (keyCode === 58) {
        inputRack=10;
    }
}     

function draw(){
    background(255,255,0);
    image(road,600,900,800,500);
    image(rack,600,300,200,600);
    image(diamond,dx1,dy1,50,50);
    image(diamond,dx2,dy2,50,50);
    image(diamond,dx3,dy3,50,50);
  
    
    if(x>200 && x<600 && y===650){
        image(car1,x,y,300,150);
        x = x - 2;
    }
    if(x===200 && y<1150){
        image(car2,x,y,150,300);
        y = y + 2;
        if(y>900-100 && obj1===true){
            dx1=x;
            dy1=y+100;
        }
    }
    if(x<1000 && y===1150){
        image(car3,x,y,300,150);
        x = x + 2;
        if(obj1===true){
            dx1=x+100;
            dy1=y;
        }
        if(obj2===true && x>400-100){
            dx2=x+100;
            dy2=y;
        }
    }
    if(x===1000 && y>650){
        image(car4,x,y,150,300);
        y = y-2;
        if(obj1===true){
            dx1=x;
            dy1=y-100;
        }
        if(obj2===true){
            dx2=x;
            dy2=y-100;
        }
        if(obj3===true && y<1000+100){
            dx3=x;
            dy3=y-100;
        }
    }
    if(x>600 && x<=1000 && y===650){
        image(car1,x,y,300,150);
        x = x - 2;
        if(x>600 && obj1===true){
            dx1=x-100;
            dy1=y;
        }
        if(x>600 && obj2===true){
            dx2=x-100;
            dy2=y;
        }
        if(x>600 && obj3===true){
            dx3=x-100;
            dy3=y;
        }
    }
    if(x===600 && y===650){
       image(car4,x,y,150,300);
       if(obj1==true){
        if(inputRack===1 && dy1>570){
            dx1=600;
            dy1--;
        }
        if(inputRack===2 && dy1>510){
            dx1=600;
            dy1--;
        }
        if(inputRack===3 && dy1>450){
            dx1=600;
            dy1--;
        }
        if(inputRack===4 && dy1>390){
            dx1=600;
            dy1--;
        }
        if(inputRack===5 && dy1>330){
            dx1=600;
            dy1--;
        }
        if(inputRack===6 && dy1>270){
            dx1=600;
            dy1--;
        }
        if(inputRack===7 && dy1>210){
            dx1=600;
            dy1--;
        }
        if(inputRack===8 && dy1>150){
            dx1=600;
            dy1--;
        }
        if(inputRack===9 && dy1>90){
            dx1=600;
            dy1--;
        }
        if(inputRack===10 && dy1>30){
            dx1=600;
            dy1--;
        }    
       }
       else if(obj2==true){
        if(inputRack===1 && dy2>570){
            dx2=600;
            dy2--;
        }
        if(inputRack===2  && dy2>510){
            dx2=600;
            dy2--;
        }
        if(inputRack===3  && dy2>450){
            dx2=600;
            dy2--;
        }
        if(inputRack===4  && dy2>390){
            dx2=600;
            dy2--;
        }
        if(inputRack===5  && dy2>330){
            dx2=600;
            dy2--;
        }
        if(inputRack===6  && dy2>270){
            dx2=600;
            dy2--;
        }
        if(inputRack===7  && dy2>210){
            dx2=600;
            dy2--;
        }
        if(inputRack===8  && dy2>150){
            dx2=600;
            dy2--;
        }
        if(inputRack===9 && dy2>90){
            dx2=600;
            dy2--;
        }
        if(inputRack===10 && dy2>30){
            dx2=600;
            dy2--;
        } 
       }
       else if(obj3==true){
        if(inputRack===1 && dy3>570){
            dx3=600;
            dy3--;
        }
        if(inputRack===2 && dy3>510){
            dx3=600;
            dy3--;
        }
        if(inputRack===3 && dy3>450){
            dx3=600;
            dy3--;
        }
        if(inputRack===4 && dy3>390){
            dx3=600;
            dy3--;
        }
        if(inputRack===5 && dy3>330){
            dx3=600;
            dy3--;
        }
        if(inputRack===6 && dy3>270){
            dx3=600;
            dy3--;
        }
        if(inputRack===7 && dy3>210){
            dx3=600;
            dy3--;
        }
        if(inputRack===8 && dy3>150){
            dx3=600;
            dy3--;
        }
        if(inputRack===9 && dy3>90){
            dx3=600;
            dy3--;
        }
        if(inputRack===10 && dy3>30){
            dx3=600;
            dy3--;
        } 
       }
       }
    }

