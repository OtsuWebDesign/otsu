const colors = ["red"];
const numsquares = 3;

var containers = [document.getElementById('outertopic1'), document.getElementById('outertopic2'), document.getElementById('outertopic3')];

function Square(cont)
{
	let div = document.createElement("div");
	let square = this;
	div.classList.add("square");
	div.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
	div.style.left = `${Math.floor(Math.random() * (cont.clientWidth-50))}px`;
	div.style.top = `${Math.floor(Math.random() * (cont.clientHeight-50))}px`;
	div.style.width = `${Math.random()*100+100}px`;
	div.style.height = div.style.width;

	this.dirx = (Math.random() > 0.5 ? 1 : -1);//choose (randomly) initial direction
	this.diry = (Math.random() > 0.5 ? 1 : -1);
	this.changeTime = Math.random()*300 + 600;//randomly assign changePosition interval
	cont.append(div);
	this.move = function()
	{
		square.toX = Math.floor(div.offsetLeft + square.dirx); //set where to move (where it is + 1px in chosen direction)
		square.toY = Math.floor(div.offsetTop + square.diry); 
		if(square.toX > cont.clientWidth-50 || square.toX < 50) //check if not running out of container in x
		{
			square.dirx == 1 ? square.dirx = -1 : square.dirx = 1; //if yes, change direction
			square.toX = (square.toX > cont.clientWidth-50 ? cont.clientWidth-50 : 50); //change move to new direction
		}
		if(square.toY > cont.clientHeight-50 || square.toY < 50)//check if not running out of container in y
		{
			square.diry == 1 ? square.diry = -1 : square.diry = 1;
			square.toY = (square.toY > cont.clientHeight-50 ? cont.clientHeight-50 : 50); 
		}
		div.style.left = square.toX + 'px'; //move element
		div.style.top = square.toY + 'px';
	}
	this.rotate = function()
	{
		
	}
	this.frame = function()
	{
		square.move();
		square.rotate();
	}
	this.changeDirection = function()
	{
		Math.random() < 0.5 ? //choose (randomly) which direction change (x or y)
		(square.dirx = Math.random() > 0.5 ? 1 : -1) :	//choose (randomly) direction (right or left)
		(square.diry = Math.random() > 0.5 ? 1 : -1);	//(down or up)
	}
}

containers.forEach((container) =>
{
	for (let i = 0; i < numsquares; i++) 
	{
		var square = new Square(container);
		setInterval(square.frame, 30);
		setInterval(square.changeDirection, square.changeTime);
	}
});