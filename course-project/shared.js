const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector(
	'.modal .modal__actions .modal__action--negative'
);
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const closeModal = () => {
	// modal.style.display = 'none';
	// backdrop.style.display = 'none';

	modal.classList.remove('open');
	backdrop.classList.remove('open');
};

selectPlanButtons.forEach((button) => {
	button.addEventListener('click', () => {
		// backdrop.style.display = 'block';
		// modal.style.display = 'block';

		modal.classList.add('open');
		backdrop.classList.add('open');
	});
});

backdrop.addEventListener('click', () => {
	// mobileNav.style.display = 'none';

	mobileNav.classList.remove('open');
	closeModal();
});

modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
	// mobileNav.style.display = 'block';
	// backdrop.style.display = 'block';

	mobileNav.classList.add('open');
	backdrop.classList.add('open');
});
