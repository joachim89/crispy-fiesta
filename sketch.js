let rays = 360;
let lines = [];
let length = 300;
let wallx = 2;
let wally = 2;
let wallh = 100;
let wallw = 100;

//RAYTRACEGREIER
function setup(){
	createCanvas(windowWidth,windowHeight);
	wallx = windowWidth/2;
	wally = windowHeight/2;		
	for(i=0;i<rays;i++){
		lines.push(new Line);
		
	}
	
	
}

class Line{
	constructor(){
		this.i;
		this.x;
		this.y;
	}
	make(){
		this.x = sin(this.i/(PI/2))*dist(mouseX,mouseY,wallx,wally);
		this.y = cos(this.i/(PI/2))*dist(mouseX,mouseY,wallx,wally);


		line(mouseX,mouseY,mouseX + this.x,mouseY + this.y);
		
	}
	intersect(){
		if(1==2){

		}
	}
}


function draw(){
	background(255);
	fill(0);
	ellipse(wallx,wally,10,10);
	
	for(i=0;i<rays;i++){
		lines[i].i = i;
		lines[i].make();
	}
	noFill();
	ellipse(mouseX,mouseY,dist(mouseX,mouseY,wallx,wally)*2);
	
}
 

