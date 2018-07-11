const colors = ["red"];
const numBalls = 10;

var balls = [];
const container = document.getElementById('container');
for (let i = 0; i < numBalls; i++) {
	let ball = document.createElement("div");
	ball.classList.add("ball");
	ball.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
	ball.style.left = `${Math.floor(Math.random() * (container.clientWidth-50))}px`;
	ball.style.top = `${Math.floor(Math.random() * (container.clientHeight-50))}px`;
	//ball.style.transform = `scale(${Math.random()})`;
	ball.style.width = `${Math.random()*100+100}px`;
	ball.style.height = ball.style.width;

	balls.push(ball);
	container.append(ball);
}


balls.forEach((el) => {
	setInterval(frame, 30);
	setInterval(changeDirection, 500, Math.random() > 0.5 ? 1 : 0);
	let directionX = directionY = (Math.random() > 0.5 ? 1 : -1);
	function frame()
	{
		let toX = Math.floor(el.offsetLeft + directionX * Math.random() + directionX); 
		let toY = Math.floor(el.offsetTop + directionY * Math.random() + directionY); 
		if(toX > container.clientWidth-50 || toX < 50)
		{
			directionX == 1 ? directionX = -1 : directionX = 1;
			toX = (toX > container.clientWidth-50 ? container.clientWidth-50 : 50);
		}
		if(toY > container.clientHeight-50 || toY < 50)
		{
			directionY == 1 ? directionY = -1 : directionY = 1;
			toY = (toY > container.clientHeight-50 ? container.clientHeight-50 : 50); 
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