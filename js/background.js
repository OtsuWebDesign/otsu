const colors = ["red"];
const numBalls = 10;

var balls = [];
const container = document.getElementById('container');
for (let i = 0; i < numBalls; i++) {
	let ball = document.createElement("div");
	ball.classList.add("ball");
	ball.style.background = colors[Math.floor(Math.random() * colors.length)];
	ball.style.left = `${Math.floor(Math.random() * container.offsetWidth)}px`;
	ball.style.top = `${Math.floor(Math.random() * container.offsetHeight)}px`;
	ball.style.transform = `scale(${Math.random()})`;
	ball.style.width = `${Math.random()*100}px`;
	ball.style.height = ball.style.width;

	balls.push(ball);
	container.append(ball);
}


balls.forEach((el) => {
	setInterval(frame, 10);
	setInterval(changeDirection, 500, Math.floor(Math.random()));
	var directionX = directionY = (Math.random() > 0.5 ? 1 : -1);
	function frame()
	{
		var toX = Math.floor(el.offsetLeft + directionX * Math.random()); 
		var toY = Math.floor(el.offsetTop + directionY * Math.random()); 
		if(toX > container.offsetWidth || toX < 0)
		{
			directionX == 1 ? directionX = -1 : directionX = 1;
			toX = Math.floor(el.offsetLeft + Math.floor(directionX * Math.random()*10));
		}
		if(toY > container.offsetHeight || toY < 0)
		{
			directionY == 1 ? directionY = -1 : directionY = 1;
			toY = Math.floor(el.offsetTop + Math.floor(directionY * Math.random()*10)); 
		}
		el.style.left = toX + 'px'; 
		el.style.top = toY + 'px';
	}
	function changeDirection(xy)
	{
		xy == 0 ?
		directionX = Math.random() > 0.5 ? 1 : -1 :
		directionY = Math.random() > 0.5 ? 1 : -1;
	}
});