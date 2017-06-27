
// var container1 = new Container({
// 	x : 100,
// 	y : 100,
// 	width : 100,
// 	height : 320,
// 	color : [30,100,100],
// 	numCells : 4

// });

// var cell1 = new CellRow({
// 	x : 100,
// 	y : 100,
// 	width : 80,
// 	height : 80,
// 	color : [200,200,200],
// 	numSquares : 4

// })
var containers = []
var width=620;
var height=600;

var playHead_x = 10;
var playHeadPaused = false;
var playHeadColor = [40,40,80,100];
var soundPath = "audio/2017clapOS-DG3__1.mp3";

function setup() {
	 
	//background(0);
	createCanvas(620,600);
	background(30,100,100);
	strokeWeight(10);
	stroke('red');
	line(0,height/2,width,height/2);
	strokeWeight(3);
	stroke(30,100,100);
	for (var i = 0; i<5;i++) {
		containers[i] = new Container(50+(i*100),100,100,320,[30,100,100],4,soundPath);
	}

	// container1 = new Container(100,100,100,500,);
	containers.forEach(function(container){
		container.initCells();
		container.display();
	});
	// cell1.display();


setInterval(movePlayhead,50);

}

function draw() {



}


function mouseClicked() {
	// containers[0].playSound();
}

function mouseDragged() {
playHeadPaused = true;	
background(30,100,100);
	strokeWeight(10);
	stroke('red');
	line(0,height/2,width,height/2);
	strokeWeight(3);
	stroke(30,100,100);

containers.forEach(function(container) {
		container.checkClick();
		if(container.draggable) {
			console.log("trig movecells");
			container.move();
		container.moveCells();
		}
	})

	containers.forEach(function(container) {	
		container.display();

	})
		strokeWeight(20);
	stroke(200,30,30,100);
	stroke(playHeadColor);
	line(playHead_x,0,playHead_x,height);
}

function mouseReleased() {
	playHeadPaused = false;
	containers.forEach(function(container) {
		container.draggable = false;
	})
	
}

function movePlayhead() {
var activeColumn;
	if(!playHeadPaused) {

	if( playHead_x < width) {playHead_x = playHead_x +10} else {playHead_x = 10};

	background(30,100,100);
	strokeWeight(10);
	stroke('red');
	line(0,height/2,width,height/2);

	stroke(30,100,100);

		containers.forEach(function(container) {	
		 activeColumn = container.checkPlayhead(playHead_x);
		
		// container.display();
		
		})

	containers.forEach(function(container,index) {
	if(index === activeColumn ) {
		
		container.checkCellVertical();
	}
	else {
		container.makeWhite();
	}
	})

	

	containers.forEach(function(container) {

		container.display();
		
		})



	strokeWeight(20);
	stroke(playHeadColor);
	line(playHead_x,0,playHead_x,height);	


	}
}

