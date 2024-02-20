// Funkcja pomocnicza do tworzenia elementu z atrybutami i dziećmi
const createElement = (tagName, attributes = {}, children = []) => {
	const element = document.createElement(tagName);

	for (const [key, value] of Object.entries(attributes)) {
		element.setAttribute(key, value);
	}

	children.forEach((child) => element.appendChild(child));

	return element;
};

// Funkcje do tworzenia konkretnych elementów
const createInput = (type, className, placeholder, maxLength) => {
	return createElement("input", {
		type,
		class: className,
		placeholder,
		maxlength: maxLength,
	});
};

const createLabel = (forAttribute, text) => {
	return createElement("label", { for: forAttribute }, [
		document.createTextNode(text),
	]);
};

const createDiv = (className, children = []) => {
	return createElement("div", { class: className }, children);
};

const createParagraph = (className, text) => {
	return createElement("p", { class: className }, [
		document.createTextNode(text),
	]);
};

const createErrorMessage = (tagName, className, text) => {
	const errorMessage = createElement(tagName, { class: className }, [
		document.createTextNode(text),
	]);

	return errorMessage;
};

const isValidName = (name) => {
	return name.trim() !== "";
};

const isValidNumber = (number) => {
	return /^\d{4} \d{4} \d{4} \d{4}$/.test(number);
};

const isValidMonth = (month) => {
	return /^(0[1-9]|1[0-2])$/.test(month);
};

const isValidYear = (year) => {
	return /^\d{4}$/.test(year);
};

const isValidCode = (code) => {
	return /^\d{3}$/.test(code);
};

const checkIsAnyFieldEmpty = () => {
	const inputs = [
		cardInputNameEl,
		cardInputNumberEl,
		cardInputMonthEl,
		cardInputCodeEl,
		cardInputYearEl,
	];
	const isAnyInputEmpty = inputs.some((input) => input.value.trim() === "");

	isAnyInputEmpty
		? (inputs.forEach((input) => input.parentElement.classList.add("error")),
		  cardErrorMessageName.innerText = "Can't be blank",
		  cardErrorMessageNumber.innerText = "Can't be blank",
		  cardErrorMessageMonth.innerText = "Can't be blank",
		  cardErrorMessageYear.innerText = "Can't be blank",
		  cardErrorMessageCode.innerText = "Can't be blank")
		: null;
	
};

const formSubmit = () => {
	checkIsAnyFieldEmpty()
}

const renderFormElements = () => {
	const form = createElement("form", { class: "card__form", action: "#" });

	const cardHolderDiv = createDiv("card__holder", [
		createLabel("CardholderName", "Cardholder Name"),
		createInput(
			"text",
			"card__input card__input--name",
			"e.g. Jane Appleseed",
			"20"
		),
		createErrorMessage("p", "card__error-message--name", ""),
	]);

	const cardNumberDiv = createDiv("card__number", [
		createLabel("number", "Card Number"),
		createInput(
			"text",
			"card__input card__input--number",
			"e.g. 1234 5678 9123 0000",
			"19"
		),
		createParagraph("card__error-message--number", ""),
		createParagraph("card__success-message", ""),
	]);

	const cardDateExpLabel = createLabel("date", "Exp. Date (MM/YY) CVC");
	const cardDateDiv = createDiv("card__date", [
		createDiv("card__date card__date--exp", [
			createInput("text", "card__input card__input--month", "MM", "2"),
			createErrorMessage("p", "card__error-message--month", ""),
		]),
		createDiv("card__date card__date--years", [
			createInput("text", "card__input card__input--year", "YY", "4"),
			createErrorMessage("p", "card__error-message--year", ""),
		]),
		createDiv("card__date card__date--code", [
			createLabel("", "CVC"),
			createInput("text", "card__input card__input--code", "e.g. 123", "3"),
			createErrorMessage("p", "card__error-message--code", ""),
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

	// form.addEventListener("submit", checkIsAnyFieldEmpty);
	form.addEventListener("submit", formSubmit);
	// confirmButton.addEventListener("click", formValidate);

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

	if (!container) {
		throw new Error(`Container with selector ${containerSelector} not found`);
	}

	const app = renderApp();

	container.appendChild(app);
};

// Inicjalizacja aplikacji
init(".card");

// Dodawanie listenerów do zmiany informacji na karcie
const cardFormEl = document.querySelector(".card__form");
const cardHolderEl = cardFormEl.querySelector(".card__holder");
const CVCNumbersEl = document.querySelector(".card__CVC-numbers");
const cardNumbers = document.querySelector(".card__heading--numbers");
let cardInfoNameEl = document.querySelector(".card__info--name");
let cardInfoMouthEl = document.querySelector(".card__info--month");
let cardInfoYearEl = document.querySelector(".card__info--year");
const cardInputNameEl = cardFormEl.querySelector(".card__input--name");
const cardInputNumberEl = cardFormEl.querySelector(".card__input--number");
const cardInputMonthEl = cardFormEl.querySelector(".card__input--month");
const cardInputCodeEl = cardFormEl.querySelector(".card__input--code");
const cardInputYearEl = cardFormEl.querySelector(".card__input--year");

const cardErrorMessageName = document.querySelector(".card__error-message--name");

const cardErrorMessageNumber = document.querySelector(
	".card__error-message--number"
)

const cardErrorMessageMonth = document.querySelector(
	".card__error-message--month"
)

const cardErrorMessageYear = document.querySelector(
	".card__error-message--year"
)

const cardErrorMessageCode = document.querySelector(
	".card__error-message--code"
)

cardInputNameEl.addEventListener("input", (e) => {
	const inputHolderName = e.target.value;
	cardInfoNameEl.textContent = inputHolderName;
});

cardInputNumberEl.addEventListener("input", (e) => {
	const holderNumber = e.target.value;
	cardNumbers.textContent = holderNumber;
});

cardInputMonthEl.addEventListener("input", (e) => {
	const expMonth = e.target.value + "/";
	console.log(expMonth);
	cardInfoMouthEl.textContent = expMonth;
});

cardInputYearEl.addEventListener("input", (e) => {
	const expYear = e.target.value;
	console.log(e.target.value);
	cardInfoYearEl.textContent = expYear;
});

cardInputCodeEl.addEventListener("input", (e) => {
	const CVCCode = e.target.value;
	CVCNumbersEl.textContent = CVCCode;
});
