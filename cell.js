var Cell = function(x, y, width, height, color, sound) {
	this.x 			= 	x;
	this.y 			= 	y;
	this.width 		=	width;
	this.height 	= 	height;
	this.cellColor 	=	color;
	
	this.key 		= 	Object.keys(sound);
	this.sound		=	new Howl({src:[sound[this.key]]});
	this.key 		= 	Object.keys(sound)[0].charAt(0);

	this.playing	=	false;
	this.clicked 	=	false;
	this.onMeridian = 	false;
	this.solved 	= 	false;

	 // console.log(this.key);
	// this.display = function() {
	// 	fill(this._color);
	// 	rect(this._x, this._y, this._width, this._height);
	// }
	this.cellPlayingFalse = function() {
		// console.log("see it");
		if(this.playing = true) { this.playing =false};
	},



	this.checkClick = function(){
				if( mouseX > this.x && mouseX < this.x +80 && mouseY > this.y && mouseY < this.y +80) {
						this.playSoundAnimation();
						console.log("clicked");
						console.log(this.key);
				  		console.log(this.key);
				 		 console.log(this.onMeridian);
						this.clicked = true;
					//}
				}	

	},



	this.markAsMeridian = function() {
		this.onMeridian = true;
		this.cellColor = [10,10,80];
	},


	this.markAsSolved = function() {
		this.solved = true;
		this.cellColor = [23,225,239];

	},

	this.resetCell = function() {
		 // console.log("see reset");
		// this.onMeridian = false;
		this.solved = false;
		if (this.onMeridian===true) {
			this.cellColor = [10,10,80];
		}
		else {
		this.cellColor = [2,12,51];			
		}

	},

	this.playSound = function(){


			cell.playing = true;
			cell.sound.play();
				 // console.log(cell.cellPlayingFalse()); 	

				   setTimeout(cell.cellPlayingFalse.bind(cell),1000);
	},



	this.playSoundAnimation = function(){
		// console.log("play sound animation");
		this.cellColor = [180,180,120];
		if (this.solved) {
			setTimeout(this.markAsSolved.bind(this),300);
		}
		else {
			setTimeout(this.resetCell.bind(this),300);
		}
	}	


}