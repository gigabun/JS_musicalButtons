window.addEventListener('load', () => {
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll(".pads div");
	const visual = document.querySelector('.visual');
	const colors = [
		"#606bd3", 
		"#f2e2ff",
		"#50d394",
		"#e84a5f",
		"#c9c9ff",
		"yellow"
	];


	// sound 
	pads.forEach((pad, index) => {
		pad.addEventListener('click', function() {
			sounds[index].currentTime = 0;
			sounds[index].play();

			createBubbles(index);
		});
	});

	// function that makes buubles
	const createBubbles = (index) => {
		const bubble = document.createElement('div');
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = 'jump 1s ease';
		bubble.addEventListener('animationend', function() {
			visual.removeChild(this);
		})
	}
});