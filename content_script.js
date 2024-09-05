// content.js

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', applyStyles);
} else {
	applyStyles();
}

function applyStyles() {
	const content = document.getElementById("content")
	content.style.color = 'black';
	content.style.backgroundColor = 'white';
}