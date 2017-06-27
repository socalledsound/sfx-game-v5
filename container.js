var Container = function(x,y,width,height,color,numCells) {
	this._x = x;
	this._y = y;
	this._width = width;
	this._height = height;
	this._color = color;
	this.numCells = numCells;
	this.draggable = false;
	this.cells=[];
	this.currentColumn = 0;

	this.initCells = function() {
			for ( var i=0; i<this.numCells; i++) {
				this.cells[i] = new Cell();
			}
	},


	this.display = function() {
		var that = this;
		fill(this._color);
		rect(this._x, this._y, this._width, this._height);
		// console.log(this.cells);
			this.cells.forEach(function(cell,index){
				// console.log(cell.cellColor);
				// console.log(index);
				fill(cell.cellColor);
			rect(that._x+(that._width/20), (that._y)+((that._height/that.numCells)*index), that._width*0.9, that._height*.25);
			}) 
			
		

	},

	this.checkClick = function() {
		if(this.checkRect(mouseX, mouseY,this._x,this._y,this._width,this._height)) {
				this.draggable = true;
				console.log(this.draggable);
		}
	},

	this.checkRect = function() {
		
		return (mouseX > this._x && mouseX < this._x + this._width && mouseY > this._y && mouseY < this._y + this._height)		
	},

	this.unClick = function() {
		this.draggable = false;
	},

	this.move = function() {
		console.log(mouseY);
		if(this._y > 0 && this._y < (600 - this._height)) {
		this._y = mouseY;
		};

		if (this._y < 10) {this._y=10};

		if (this._y > (600 - this._height)) {this._y = (600 - this._height)};
		this.settleInGrid();
		
	},

	this.settleInGrid = function() {
		if(this._y > 0 && this._y < 90 ) 	{this._y = 20};
		if(this._y > 90 && this._y <180 ) 	{this._y = 100};
		if(this._y > 180 && this._y <270 ) 	{this._y = 180};
		if(this._y > 270 && this._y <360 ) 	{this._y = 260};
	},

	this.checkPlayhead = function(x) {
		var currentColumn;
		if (x <40) { currentColumn = 5};
		if (x > 30 && x < 145) {currentColumn = 0};
		if (x >140 && x < 245) {currentColumn = 1};
		if (x >240 && x < 365) {currentColumn = 2};
		if (x >360 && x < 450) {currentColumn = 3};
		if (x >450 && x < 555) {currentColumn = 4};
		if (x >530) {currentColumn = 5};
		 console.log(currentColumn);

		return currentColumn;
		
	},

	this.makeRed = function() {

		this.cells.forEach(function(cell,index){
		// this.checkRedLine();	
		cell.cellColor = [200,0,0];
		});
	},

	this.makeWhite = function() {

		this.cells.forEach(function(cell,index){
		// this.checkRedLine();	
		cell.cellColor = [200,200,200];
		});
	},

	checkRedLine = function() {
		this.cells.forEach(function(cell,index){
			if (this.cell) {

			}
		})	
	}


}


var Cell = function() {
	this.cellColor=[200,200,200];

	// this.display = function() {
	// 	fill(this._color);
	// 	rect(this._x, this._y, this._width, this._height);
	// }

}


var CellRow = function(options) {
	this._x = options.x;
	this._y = options.y;
	this._containerWidth = options.width;
	this._containerHeight = options.height;
	this._color = options.color;
	this._numSquares = options.numSquares;



	this.display = function() {
		
		for (var i=0; i <this._numSquares; i++) {
			fill(this._color);
			rect(this._x+10, (this._y)*(i+1)-(20*i), this._containerWidth, this._containerHeight);


		}
		

	},

		this.move = function() {
		console.log(mouseY);
		this._startY = mouseY;
	}	

}