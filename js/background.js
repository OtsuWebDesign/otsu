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

	this.dirx = (Math.random() > 0.5 ? 1 : -1);
	this.diry = (Math.random() > 0.5 ? 1 : -1);
	this.changeTime = Math.random()*300 + 600;
	cont.append(div);
	this.frame = function()
	{
		square.toX = Math.floor(div.offsetLeft + square.dirx); 
		square.toY = Math.floor(div.offsetTop + square.diry); 
		if(square.toX > cont.clientWidth-50 || square.toX < 50)
		{
			square.dirx == 1 ? square.dirx = -1 : square.dirx = 1;
			square.toX = (square.toX > cont.clientWidth-50 ? cont.clientWidth-50 : 50);
		}
		if(square.toY > cont.clientHeight-50 || square.toY < 50)
		{
			square.diry == 1 ? square.diry = -1 : square.diry = 1;
			square.toY = (square.toY > cont.clientHeight-50 ? cont.clientHeight-50 : 50); 
		}
		div.style.left = square.toX + 'px'; 
		div.style.top = square.toY + 'px';
	}
	this.changeDirection = function()
	{
		Math.random() < 0.5 ? 
		(square.dirx = Math.random() > 0.5 ? 1 : -1) : 
		(square.diry = Math.random() > 0.5 ? 1 : -1);
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