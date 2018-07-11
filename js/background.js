const colors = ["red"];
const numsquares = 3;

var containers = [document.getElementById('outertopic1'), document.getElementById('outertopic2'), document.getElementById('outertopic3')];

function Square(cont)
{
	let div = document.createElement("div");
	div.classList.add("square");
	div.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
	div.style.left = `${Math.floor(Math.random() * (cont.clientWidth-50))}px`;
	div.style.top = `${Math.floor(Math.random() * (cont.clientHeight-50))}px`;
	div.style.width = `${Math.random()*100+100}px`;
	div.style.height = div.style.width;

	this.dirx = (Math.random() > 0.5 ? 1 : -1);
	this.diry = (Math.random() > 0.5 ? 1 : -1);
	this.changeTime = Math.random()*300 + 600;
	this.toX = Math.floor(div.offsetLeft + this.dirx); 
	this.toY = Math.floor(div.offsetTop + this.diry); 
	cont.append(div);
	this.frame = function()
	{
		this.toX = Math.floor(div.offsetLeft + this.dirx); 
		this.toY = Math.floor(div.offsetTop + this.diry); 
		if(this.toX > cont.clientWidth-50 || this.toX < 50)
		{
			this.dirx == 1 ? this.dirx = -1 : this.dirx = 1;
			this.toX = (this.toX > cont.clientWidth-50 ? cont.clientWidth-50 : 50);
		}
		if(this.toY > cont.clientHeight-50 || this.toY < 50)
		{
			this.diry == 1 ? this.diry = -1 : this.diry = 1;
			this.toY = (this.toY > cont.clientHeight-50 ? cont.clientHeight-50 : 50); 
		}
		div.style.left = this.toX + 'px'; 
		div.style.top = this.toY + 'px';
	}
	this.changeDirection = function()
	{
		Math.random() < 0.5 ? 
		(this.dirx = Math.random() > 0.5 ? 1 : -1) : 
		(this.diry = Math.random() > 0.5 ? 1 : -1);
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