const colors = ["red"];
const numBalls = 10;

var balls = [];
var containers = [document.getElementById('container')];

containers.forEach((container) =>
{
	for (let i = 0; i < numBalls; i++) {
		let ball = document.createElement("div");
		ball.classList.add("ball");
		ball.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
		ball.style.left = `${Math.floor(Math.random() * (container.clientWidth-50))}px`;
		ball.style.top = `${Math.floor(Math.random() * (container.clientHeight-50))}px`;
		//ball.style.transform = `scale(${Math.random()})`;
		ball.style.width = `${Math.random()*100+100}px`;
		ball.style.height = ball.style.width;
		ball.dirx = (Math.random() > 0.5 ? 1 : -1);
		ball.diry = (Math.random() > 0.5 ? 1 : -1);
		ball.changeTime = Math.random()*300 + 600;
		balls.push(ball);
		container.append(ball);
	}


	balls.forEach((el) => {
		setInterval(frame, 30);
		setInterval(changeDirection, el.changeTime, el, Math.floor(Math.random() < 0.5 ? 0 : 1));
		function frame()
		{
			let toX = Math.floor(el.offsetLeft + el.dirx * Math.random() + el.dirx); 
			let toY = Math.floor(el.offsetTop + el.diry * Math.random() + el.diry); 
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