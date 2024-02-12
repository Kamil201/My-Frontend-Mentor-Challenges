const createDiv = (className) => {
	const div = document.createElement("div");
	div.className = className;
	return div;
};

const createImage = (className, src) => {
	const img = document.createElement("img");
	img.className = className;
	img.setAttribute("src", src);

	return img;
};

const createHeading = (tagName, className, text) => {
	const heading = document.createElement(tagName);
	heading.className = className;
	heading.innerText = text;

	return heading;
};

const createParagraph = (tagName, className, text) => {
	const paragraph = document.createElement(tagName);
	paragraph.className = className;
	paragraph.innerText = text;

	return paragraph;
};

const renderPopupContainer = () => {
	const container = createDiv("rating__popup");

	const img = createImage(
		"rating__thank-you",
		"./images/illustration-thank-you.svg"
	);

	const containerResult = document.createElement("div");
	containerResult.className = "rating__result";
	containerResult.innerText = "You selected ";

	const span = document.createElement("span");
	span.className = "rating__number";
	span.innerHTML = 0 + " of of 5";
	containerResult.appendChild(span);

	const h2 = createHeading("h2", "rating__thank-you-heading", "Thank You!");

	const p = createParagraph(
		"p",
		"rating__thank-you-massage",
		"We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
	);

	container.appendChild(img);
	container.appendChild(containerResult);
	container.appendChild(h2);
	container.appendChild(p);

	document.body.appendChild(container);
	return container;
};

// tu dodaj listeneraa !!!
const renderSubmitButton = (text) => {
	const button = document.createElement("button");
	button.className = "rating__submit-btn";
	button.innerText = text;

	return button;
};

const renderButtonsContainer = () => {
	const container = document.createElement("div");
	container.className = "rating__buttons";

	let numButtons = 5;

	for (let i = 1; i <= numButtons; i++) {
		const button = document.createElement("button");
		button.className = "rating__btn";
		button.setAttribute("data-rating", String(i));
		button.innerText = i;

		container.appendChild(button);
	}

	return container;
};

const renderTextRequest = (text) => {
	const p = document.createElement("p");
	p.className = "rating__request";
	p.innerText = text;

	return p;
};

const renderHeaderElement = () => {
	const header = document.createElement("header");

	const h2 = document.createElement("h2");
	h2.innerText = "How did we do?";
	h2.className = "rating__heading";
	header.appendChild(h2);

	return header;
};

const renderSpanAndImgElement = () => {
	const span = document.createElement("span");
	span.className = "rating__star-btn";

	const img = document.createElement("img");
	img.setAttribute("src", "./images/icon-star.svg");

	span.appendChild(img);
	return span;
};

const renderApp = () => {
	const container = document.createElement("div");
	const spanEl = renderSpanAndImgElement();
	const headerEl = renderHeaderElement();
	const pEl = renderTextRequest(
		"Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
	);
	const buttonList = renderButtonsContainer();
	const submitButtonEl = renderSubmitButton("Submit");

	const popupEl = renderPopupContainer();
	container.appendChild(spanEl);
	container.appendChild(headerEl);
	container.appendChild(pEl);
	container.appendChild(buttonList);
	container.appendChild(submitButtonEl);
	container.appendChild(popupEl);

	return container;
};

const init = (selector) => {
	const container = document.querySelector(selector);

	if (!container) return;

	const app = renderApp();

	container.prepend(app);
};

init(".rating__container");
