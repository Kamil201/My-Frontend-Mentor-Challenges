
const generateInput = (type, className, placeholder, maxLength) => {
	const input = document.createElement("input");
	input.setAttribute("type", type);
	input.setAttribute("class", className);
	input.setAttribute("placeholder", placeholder);
	input.setAttribute("maxlength", maxLength);
	return input;
};

const generateLabel = (attribute, text) => {
	const label = document.createElement("label");
	label.setAttribute("for", attribute);
	label.innerText = text;
	return label;
};

const generateDiv = (className) => {
	const div = document.createElement("div");
	div.className = className;
	return div;
};

const generateParagraph = (className) => {
	const paragraph = document.createElement("p");
	paragraph.className = className;
	return paragraph;
};

const createErrorMessage = (message, className) => {
	const errorMessage = document.createElement("p");
	errorMessage.innerText = message;
	errorMessage.className = className;

	return errorMessage;
};
const createInputElement = (type, placeholder, className) => {
	const input = document.createElement("input");
	input.setAttribute("type", type);
	input.setAttribute("placeholder", placeholder);
	input.className = className;

	return input;
};

const createLabelElement = (attribute, text) => {
	const label = document.createElement("label");
	label.setAttribute("for", attribute);
	label.innerText = text;
	return label;
};

const createDivElement = (className) => {
	const div = document.createElement("div");
	div.className = className;

	return div;
};

const renderFormElements = () => {
	const form = document.createElement("form");
	form.className = "card__form";
	form.setAttribute("action", "#");

	const cardHolderDiv = createDivElement("card__holder");
	const cardHolderLabel = createLabelElement(
		"CardholderName",
		"Cardholder Name"
	);
	const input = createInputElement(
		"text",
		" e.g. Jane Appleseed",
		"card__input"
	);
	const error = createErrorMessage("error", "card__error-message");
	cardHolderDiv.appendChild(cardHolderLabel);
	cardHolderDiv.appendChild(input);
	cardHolderDiv.appendChild(error);
	form.appendChild(cardHolderDiv);

	const cardNumberDiv = generateDiv("card__number");
	const cardNumberLabel = generateLabel("number", "Card Number");
	const cardNumberInput = generateInput(
		"text",
		"card__input card__input--number",
		"e.g. 1234 5678 9123 0000",
		"19"
	);
	const cardNumberErrorMessage = generateParagraph("card__error-message");

	cardNumberDiv.appendChild(cardNumberLabel);
	cardNumberDiv.appendChild(cardNumberInput);
	cardNumberDiv.appendChild(cardNumberErrorMessage);

	form.appendChild(cardNumberDiv);

	
	const cardDateExpLabel = generateLabel("date", "Exp. Date (MM/YY) CVC");
	const cardDateDiv = generateDiv("card__date");

	const cardDateExpDiv = generateDiv("card__date card__date--exp");
	const cardDateExpInput = generateInput(
		"text",
		"card__input card__input--month",
		"MM",
		"2"
	);
	const cardDateExpErrorMessage = generateParagraph("card__error-message");

	cardDateExpDiv.appendChild(cardDateExpInput);
	cardDateExpDiv.appendChild(cardDateExpErrorMessage);

	const cardDateYearsDiv = generateDiv("card__date card__date--years");
	const cardDateYearsInput = generateInput(
		"text",
		"card__input card__input--year",
		"YY",
		"4"
	);
	const cardDateYearsErrorMessage = generateParagraph("card__error-message");

	cardDateYearsDiv.appendChild(cardDateYearsInput);
	cardDateYearsDiv.appendChild(cardDateYearsErrorMessage);

	const cardDateCodeDiv = generateDiv("card__date card__date--code");
	const cardDateCodeLabel = generateLabel("", "CVC");
	const cardDateCodeInput = generateInput(
		"text",
		"card__input card__input--code",
		"e.g. 123",
		"3"
	);
	const cardDateCodeErrorMessage = generateParagraph("card__error-message");

	cardDateCodeDiv.appendChild(cardDateCodeLabel);
	cardDateCodeDiv.appendChild(cardDateCodeInput);
	cardDateCodeDiv.appendChild(cardDateCodeErrorMessage);

	cardDateDiv.appendChild(cardDateExpDiv);
	cardDateDiv.appendChild(cardDateYearsDiv);
	cardDateDiv.appendChild(cardDateCodeDiv);

	form.appendChild(cardDateExpLabel);
	form.appendChild(cardDateDiv);

	const confirmButton = document.createElement("button");
	confirmButton.className = "card__btn";
	confirmButton.innerText = "Confirm";
	form.appendChild(confirmButton);

	return form;
};

const createImageElement = (src, alt, className) => {
	const img = document.createElement("img");
	img.setAttribute("src", src);
	img.setAttribute("alt", alt);
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
	const form = renderFormElements();
	container.appendChild(header);
	container.appendChild(form);

	return container;
};

const init = (containerSelector) => {
	const container = document.querySelector(containerSelector);

	if (!container) return;

	const app = renderApp();

	container.appendChild(app);
};

init(".card");
