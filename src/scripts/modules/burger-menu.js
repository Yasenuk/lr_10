export class BurgerMenu {
	constructor() {
		this.menues = [];
	}

	init() {
		const menues = document.querySelectorAll("[data-burger]");
		menues.forEach((menu) => {
			const close_btn = Array.from(menu.children).find((child) =>
				child.classList.contains("menu__close-button")
			);

			this.menues.push({
				burger: menu,
				close_btn
			});

			close_btn.addEventListener("click", () => this.open(menu));
		});
	}

	open(menu) {
		menu.classList.toggle("_open");
		document.body.classList.toggle("_locked");
	}
}
