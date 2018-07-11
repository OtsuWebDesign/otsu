const colors = ["red"];
const numsquares = 3;

var squares = [];
var containers = [document.getElementById('outertopic1'), document.getElementById('outertopic2'), document.getElementById('outertopic3')];

containers.forEach((container) =>
{
	for (let i = 0; i < numsquares; i++) {
		let square = document.createElement("div");
		square.classList.add("square");
		square.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
		square.style.left = `${Math.floor(Math.random() * (container.clientWidth-50))}px`;
		square.style.top = `${Math.floor(Math.random() * (container.clientHeight-50))}px`;
		//square.style.transform = `scale(${Math.random()})`;
		square.style.width = `${Math.random()*100+100}px`;
		square.style.height = square.style.width;
		square.dirx = (Math.random() > 0.5 ? 1 : -1);
		square.diry = (Math.random() > 0.5 ? 1 : -1);
		square.changeTime = Math.random()*300 + 600;
		squares.push(square);
		container.append(square);
	}


	squares.forEach((el) => 
	{
		setInterval(frame, 30);
		setInterval(changeDirection, el.changeTime, el, Math.floor(Math.random() < 0.5 ? 0 : 1));
		function frame()
		{
			let toX = Math.floor(el.offsetLeft + (el.dirx * Math.random() + el.dirx)); 
			let toY = Math.floor(el.offsetTop + (el.diry * Math.random() + el.diry)); 
			if(toX > container.clientWidth-50 || toX < 50)
			{
				el.dirx == 1 ? el.dirx = -1 : el.dirx = 1;
				toX = (toX > container.clientWidth-50 ? container.clientWidth-50 : 50);
			}
			if(toY > container.clientHeight-50 || toY < 50)
			{
				el.diry == 1 ? el.diry = -1 : el.diry = 1;
				toY = (toY > container.clientHeight-50 ? container.clientHeight-50 : 50); 
			}
			el.style.left = toX + 'px'; 
			el.style.top = toY + 'px';
		}
	});

});
function changeDirection(element, xy)
{
	xy == 0 ?
	element.dirx = Math.random() > 0.5 ? 1 : -1 :
	element.diry = Math.random() > 0.5 ? 1 : -1;
}