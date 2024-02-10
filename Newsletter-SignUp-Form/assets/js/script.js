const newsletterEl = document.querySelector(".newsletter");
const successPopupEl = document.querySelector(".success-popup");
const newsletterFormEl = document.querySelector(".newsletter__form");
const errorMessage = document.querySelector(".newsletter__error-message");
const emailEl = document.getElementById("email");
const subscribeBtnEl = document.querySelector(".newsletter__subscribe-btn ");
const confirmationEmailEl = document.querySelector(
	".success-popup__confirmation-email"
);
const dismissBtnEl = document.querySelector(".success-popup__btn");

const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isValidEmail = (email) => {
	return emailRegex.test(email);
};

const formSubmit = (e) => {
	e.preventDefault();
	const email = emailEl.value.trim();

	if (isValidEmail(email)) {
		errorMessage.style.visibility = "hidden";
		confirmationEmailEl.innerText = email;
		successPopupEl.style.display = "block";
		newsletterEl.style.display = "none";
	} else {
		errorMessage.style.visibility = "visible";
		newsletterFormEl.classList.add("error");
		successPopupEl.style.display = "none";
	}
};

const closePopup = () => {
	successPopupEl.style.display = "none";
	if (window.innerWidth >= 450) {
		newsletterEl.style.display = "flex";
	} else {
		newsletterEl.style.display = "";
	}
};

const handleResize = () => {
	if (window.innerWidth < 450 && successPopupEl.style.display === "none") {
		newsletterEl.style.display = "";
	}
};

newsletterFormEl.addEventListener("submit", formSubmit);
dismissBtnEl.addEventListener("click", closePopup);
window.addEventListener("resize", handleResize);
