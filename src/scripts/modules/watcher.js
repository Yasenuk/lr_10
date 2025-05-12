export class Watcher {
	constructor() {
		this.observer;
	}

	init(optioins = { root: null, rootMargin: "0px", threshold: 0.1 }) {
		// Init root element
		optioins.root = optioins.root
			? document.querySelector(`.${optioins.root}`)
			: null;

		// Init observer
		this.observer = new IntersectionObserver(
			(entries) => this.observerCallBack(entries),
			optioins
		);

		// Add class for root element
		this.observer.root?.classList.add("_watcher");

		// Init elemetns for watching
		this.watch();
	}

	watch() {
		// Get element with data-watch
		const watchElements = document.querySelectorAll("[data-watch]");
		watchElements.forEach((element) => {
			this.observer.observe(element);
		});
	}

	watchOne(target) {
		// For one watching
		if (target.dataset.watch !== "navigator") {
			this.observer.unobserve(target);
		}
	}

	observerCallBack(entries, observer) {
		entries.forEach((entry) => {
			const targetElement = entry.target;

			if (entry.isIntersecting) {
				targetElement.classList.add("_watched");

				this.watchOne(targetElement);
			} else {
				targetElement.classList.remove("_watched");
			}
		});
	}
}
