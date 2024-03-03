const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const navListEl = document.getElementById('nav-list');
const overlayEl = document.getElementById('overlay');

openMenuBtn.addEventListener('click', function () {
	navListEl.classList.remove('hidden');
	overlayEl.classList.add('overlay');
});

closeMenuBtn.addEventListener('click', function () {
	navListEl.classList.add('hidden');
	overlayEl.classList.remove('overlay');
});
