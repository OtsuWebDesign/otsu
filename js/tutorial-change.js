"use strict";
var system_options = document.getElementsByClassName("system-option");
for (let i = 0; i < system_options.length; i++) 
{
	system_options[i].addEventListener("click", function() 
	{
		let selected = document.getElementsByClassName("selected")[0];
		selected.classList.remove("selected");
		this.classList.add("selected");
		let instructions = document.getElementsByClassName('system-tut');
		for(let j=0; j<instructions.length; j++)
		{
			if(instructions[j].id == this.id+"-tut")
			{
				instructions[j].classList.add("selected");
				let answerHeight = instructions[j].scrollHeight + 200;
				document.getElementById("tutorial-answer").style.maxHeight = answerHeight + "px";
				document.getElementById("installtutorial").style.maxHeight = document.getElementById("installtutorial").scrollHeight + "px";
			}
			else
				instructions[j].classList.remove("selected");
		}
	});
}