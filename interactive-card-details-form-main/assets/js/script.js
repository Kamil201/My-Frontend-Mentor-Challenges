const createImageElement = (src, alt, className) => {
	const img = document.createElement("img");
	img.setAttribute('src', src);
	img.setAttribute('alt', alt);
	img.className = className;
	return img;
};

const createSpanElement = (text, className) => {
	const span = document.createElement("span");
	span.textContent = text;
	span.className = className;
	return span;
};


const renderHeaderElements = () => {
	const header = document.createElement("header");
	header.className = "card__header";

	header.appendChild(
		createImageElement(
			"./assets/images/bg-main-mobile.png",
			"bg-image",
			"card__bg"
		)
	);
	header.appendChild(
		createImageElement(
			"./assets/images/bg-card-back.png",
			"card back",
			"card__header card__header--back"
		)
	);
	header.appendChild(createSpanElement("000", "card__CVC-numbers"));
	header.appendChild(
		createSpanElement(
			"0000 0000 0000 0000",
			"card__heading card__heading--numbers"
		)
	);

	const cardInfo = document.createElement("div");
	cardInfo.className = "card__info";

	cardInfo.appendChild(
		createSpanElement("Jane Appleseed", "card__info card__info--name")
	);
	cardInfo.appendChild(
		createSpanElement("00/", "card__info card__info--month")
	);
	cardInfo.appendChild(createSpanElement("00", "card__info card__info--year"));
	cardInfo.appendChild(
		createImageElement(
			"./assets/images/card-logo.svg",
			"card logo",
			"card-logo"
		)
	);

	header.appendChild(cardInfo);

	header.appendChild(
		createImageElement(
			"./assets/images/bg-card-front.png",
			"card front",
			"card__header card__header--front"
		)
	);

	return header;
};

const renderApp = () => {
	const container = document.createElement("div");
	container.className = "card__content";
	const header = renderHeaderElements();

	container.appendChild(header);

	return container;
};

const init = (containerSelector) => {
	const container = document.querySelector(containerSelector);

	if (!container) return;

	const app = renderApp();

	container.appendChild(app);
};

init(".card");
