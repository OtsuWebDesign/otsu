const numcubes = 3;
var containers = [document.getElementById('outertopic1'), document.getElementById('outertopic2'), document.getElementById('outertopic3')];

function Cube(cont)
{
	let viewport = document.createElement("div");
	viewport.classList.add("viewport");
	viewport.style.left = `${Math.floor(Math.random() * (cont.clientWidth-100))}px`;
	viewport.style.top = `${Math.floor(Math.random() * (cont.clientHeight-100))}px`;

	viewport.innerHTML = '<div class="cube"><div class="side"> </div><div class="side"> </div><div class="side"></div> <div class="side"> </div> <div class="side"> </div><div class="side"> </div> </div>';
	cont.append(viewport);

	this.dirx = (Math.random() > 0.5 ? 1 : -1);//choose (randomly) initial direction
	this.diry = (Math.random() > 0.5 ? 1 : -1);
	this.changeTime = Math.random()*300 + 600;//randomly assign changePosition interval

	let cube = this;
	this.move = function()
	{
		cube.toX = Math.floor(viewport.offsetLeft + cube.dirx); //set where to move (where it is + 1px in chosen direction)
		cube.toY = Math.floor(viewport.offsetTop + cube.diry); 
		if(cube.toX > cont.clientWidth-100 || cube.toX < 100) //check if not running out of container in x
		{
			cube.dirx == 1 ? cube.dirx = -1 : cube.dirx = 1; //if yes, change direction
			cube.toX = (cube.toX > cont.clientWidth-100 ? cont.clientWidth-100 : 100); //change move to new direction
		}
		if(cube.toY > cont.clientHeight-100 || cube.toY < 100)//check if not running out of container in y
		{
			cube.diry == 1 ? cube.diry = -1 : cube.diry = 1;
			cube.toY = (cube.toY > cont.clientHeight-100 ? cont.clientHeight-100 : 100); 
		}
		viewport.style.left = cube.toX + 'px'; //move element
		viewport.style.top = cube.toY + 'px';
	}
	this.rotate = function()
	{

	}
	this.frame = function()
	{
		cube.move();
		cube.rotate();
	}
	this.changeDirection = function()
	{
		Math.random() < 0.5 ? //choose (randomly) which direction change (x or y)
		(cube.dirx = Math.random() > 0.5 ? 1 : -1) :	//choose (randomly) direction (right or left)
		(cube.diry = Math.random() > 0.5 ? 1 : -1);	//(down or up)
	}
}

containers.forEach((container) =>
{
	for (let i = 0; i < numcubes; i++) 
	{
		let cube = new Cube(container);
		setInterval(cube.frame, 30);
		setInterval(cube.changeDirection, cube.changeTime);
	}
});