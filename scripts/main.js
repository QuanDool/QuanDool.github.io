const lines = document.querySelectorAll(".banner-introduction section p");
let characterIndex = 0;
let characterLength = 0;
let characterLists = [];

for (const line of lines) {
	const text = line.innerHTML;
	characterLength += text.length;
	line.innerHTML = "";
	for (const char of text) {
		const span = createCharacterSpan(char);
		line.append(span);
		characterLists.push(span);
	}
}

let currentCharacter = characterLists[characterIndex];
currentCharacter.style.borderColor = "black";
currentCharacter.style.animationPlayState = "running";
characterLists.forEach((character) => {
	const [typeAnimation] = character.getAnimations();
	typeAnimation.addEventListener("finish", () => {
		characterIndex += 1;
		currentCharacter.style.borderColor = "transparent";
		if (characterIndex === characterLength) return;
		currentCharacter = characterLists[characterIndex];
		currentCharacter.style.borderColor = "black";
		currentCharacter.style.animationPlayState = "running";
	});
});

characterLists[characterLength - 1].style.animation =
	"cursor 1s infinite alternate paused, type 0.1s paused";

function createCharacterSpan(character) {
	const span = document.createElement("span");
	span.innerHTML = character;
	span.style.borderRight = "2px solid transparent";
	span.style.animation = "type 0.5s paused";
	return span;
}
