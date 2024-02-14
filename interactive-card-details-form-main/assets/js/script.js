const createElement = (tagName, attributes = {}, children = []) => {
	const tag = document.createElement(tagName);

	for (const [key, value] of Object.entries(attributes)) {
	
		tag.setAttribute(key, value);
	}

	children.forEach((child) => tag.appendChild(child));
	return tag;
};

const createInput = (tagName, className, placeholder, maxLength) => {
	return createElement("input", {
	tagName,
		class: className,
		placeholder,
		maxlength: maxLength,
	});
};

const createLabel = (forAttribute, text) => {
	return createElement("label", { for: forAttribute }, [document.createTextNode(text),]);
};

const createDiv = (className, children = []) => {
	return createElement("div", { class: className }, children);
};

const createParagraph = (className, text) => {
	return createElement("p", { class: className }, [
		document.createTextNode(text),
	]);
};

const createErrorMessage = (message, className) => {
	return createParagraph(className, message);
};

const renderFormElements = () => {
	const form = createElement("form", { class: "card__form", action: "#" });

	const cardHolderDiv = createDiv("card__holder", [
		createLabel("CardholderName", "Cardholder Name"),
		createInput("text", "card__input", "e.g. Jane Appleseed"),
		createErrorMessage("error", "card__error-message"),
	]);

	const cardNumberDiv = createDiv("card__number", [
		createLabel("number", "Card Number"),
		createInput(
			"text",
			"card__input card__input--number",
			"e.g. 1234 5678 9123 0000",
			"19"
		),
		createParagraph("card__error-message", ""),
	]);

	const cardDateExpLabel = createLabel("date", "Exp. Date (MM/YY) CVC");
	const cardDateDiv = createDiv("card__date", [
		createDiv("card__date card__date--exp", [
			createInput("text", "card__input card__input--month", "MM", "2"),
			createErrorMessage("card__error-message", ""),
		]),
		createDiv("card__date card__date--years", [
			createInput("text", "card__input card__input--year", "YY", "4"),
			createErrorMessage("card__error-message", ""),
		]),
		createDiv("card__date card__date--code", [
			createLabel("", "CVC"),
			createInput("text", "card__input card__input--code", "e.g. 123", "3"),
			createErrorMessage("card__error-message", ""),
		]),
	]);

	const confirmButton = createElement("button", { class: "card__btn" }, [
		document.createTextNode("Confirm"),
	]);

	form.append(
		cardHolderDiv,
		cardNumberDiv,
		cardDateExpLabel,
		cardDateDiv,
		confirmButton
	);

	return form;
};

const createImageElement = (src, alt, className) => {
	return createElement("img", { src, alt, class: className });
};

const createSpanElement = (text, className) => {
	return createElement("span", { class: className }, [
		document.createTextNode(text),
	]);
};

const renderHeaderElements = () => {
	const header = createElement("header", { class: "card__header" }, [
		createImageElement(
			"./assets/images/bg-main-mobile.png",
			"bg-image",
			"card__bg"
		),
		createImageElement(
			"./assets/images/bg-card-back.png",
			"card back",
			"card__header card__header--back"
		),
		createSpanElement("000", "card__CVC-numbers"),
		createSpanElement(
			"0000 0000 0000 0000",
			"card__heading card__heading--numbers"
		),
		createDiv("card__info", [
			createSpanElement("Jane Appleseed", "card__info card__info--name"),
			createSpanElement("00/", "card__info card__info--month"),
			createSpanElement("00", "card__info card__info--year"),
			createImageElement(
				"./assets/images/card-logo.svg",
				"card logo",
				"card-logo"
			),
		]),
		createImageElement(
			"./assets/images/bg-card-front.png",
			"card front",
			"card__header card__header--front"
		),
	]);

	return header;
};

const renderApp = () => {
	const container = createElement("div", { class: "card__content" }, [
		renderHeaderElements(),
		renderFormElements(),
	]);

	return container;
};

const init = (containerSelector) => {
	const container = document.querySelector(containerSelector);

	if (!container) return;

	container.appendChild(renderApp());
};

init(".card");