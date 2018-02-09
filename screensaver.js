var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var stop_button = document.getElementById("stop");
var expand_button = document.getElementById("expand");
var bounce_button = document.getElementById("bounce");
var requestID;

var animate_expand = function(){
	
	stopAnimate();
	
	var expand = true;
	var rad = 1;
	
	var expand_question = function(e){
		if (rad == canvas.height/2 || rad == canvas.width/2 || rad == 0){
			expand = !expand;
		}
	};

	var expand_dong = function(){

		ctx.clearRect(0,0, canvas.width, canvas.height);

		if (expand) {
		ctx.beginPath();
		ctx.arc(canvas.width/2, canvas.height/2, rad, 0, 2 * Math.PI);
		ctx.stroke();
		rad += 1;
		}

		else if (!expand){
		ctx.beginPath();
		ctx.arc(canvas.width/2, canvas.height/2, rad, 0, 2 * Math.PI);
		ctx.stroke();
		rad -= 1;
		}

		expand_question();
		requestID = window.requestAnimationFrame(expand_dong);	

	};
	
	expand_dong();

};

var animate_bounce = function(){
	
	stopAnimate();
	
	var x = (canvas.width/2) + 10;
	var y = canvas.height/2;
	var deltaX = 2;
	var deltaY = 2;
	
	
	var change_direction = function(){
		if (x + 20 == canvas.width || x - 20 == 0){
			deltaX = -1 * deltaX;
		}
		if (y + 20 == canvas.height || y - 20 == 0){
			deltaY = -1 * deltaY;
		}
	};

	var bouncey_boy = function(){
		
		ctx.clearRect(0,0, canvas.width, canvas.height);
		
		ctx.beginPath();
		ctx.arc(x, y, 20, 0, 2 * Math.PI);
		ctx.stroke();
		
		console.log(x);
		
		x += deltaX;
		y += deltaY;
		
		change_direction();
		
		requestID = window.requestAnimationFrame(bouncey_boy);	

	};
	
	bouncey_boy();

};

var stopAnimate = function(){
	window.cancelAnimationFrame(requestID);
}

stop_button.addEventListener('click', stopAnimate);
expand_button.addEventListener('click', animate_expand );
bounce_button.addEventListener('click', animate_bounce );