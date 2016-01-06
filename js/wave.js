var waveObj = function(){
	this.x = [];
	this.y = [];
	this.visible = [];
	this.r = [];
}
waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.visible[i] = false;
		this.r[i] = 0;
	}
}
waveObj.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		if(this.visible[i]){
			this.r[i] += 1;
			if(this.r[i]>50){
				this.visible[i] = false;
				break;
			} 
			var alpha = 1 - this.r[i]/50;
			ctx2.save();
			ctx2.beginPath();
			ctx2.lineWidth = 2;
			ctx2.shadowBlur = 10;
			ctx2.shadowColor = "#fff";
			
			ctx2.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx2.strokeStyle = "rgba(255,255,255,"+alpha+")";
			ctx2.stroke();
			ctx2.closePath();
			ctx2.restore();
		}
	}
}
waveObj.prototype.born = function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.visible[i]){
			//born
			this.visible[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 5;
			return;
		}
	}
}