var Timer = function(duration, countdown){
	this.duration = duration || 0;
	this.countdown = countdown || false;
	this.paused = false;
	this.tick;
	this.id;
};
Timer.prototype.start = function(){
	var obj = this;
	obj.paused = false;
	if(!obj.paused){
		obj.id = setInterval(function(){
			obj.duration += obj.countdown ? -1 : 1;
			obj.tick && obj.tick.apply(obj, [obj.timings()]);
		}, 1000);
	}
};
Timer.prototype.timings = function(){
	var obj = this;
	return {
		duration: obj.duration,
		seconds: obj.duration % 60,
		minutes: Math.floor(obj.duration / 60) % 60,
		hours: Math.floor(obj.duration / 3600)
	};
}
Timer.prototype.pause = function(){
	this.paused = true;
	clearInterval(this.id);
};
Timer.prototype.reset = function(){
	this.duration = 0;
	this.paused = false;
};