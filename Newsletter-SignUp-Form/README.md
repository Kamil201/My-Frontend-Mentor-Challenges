
#  Newsletter-sign-up-form-with-success-message.
My challenge was to build out this newsletter form and get it looking as close to the design as possible from https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv. I tested my form validation skills, form submission and of course DOM manipulation.  

**Main features**:
- Add email and submit the form;
- See a success message with email after successfully submitting the form;
- See form validation messages if:
  The field is left empty
  The email address is not formatted correctly


## 💡 Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/Kamil201/Newsletter-sign-up-form-with-success-message.git
```

2. Change the working directory

```bash
cd Newsletter-sign-up-form-with-success-message
```

3. Open your index.html file in your web browser:

```bash
google chrome index.html
```
 
## 🤔 Solutions provided in the project

- I used email regex and saved it in a variable:
```
 const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
```

 &nbsp;

- Create a function which validate wheter the email is correct or not:

```
const isValidEmail = (email) => {
	return emailRegex.test(email);
};

```
 &nbsp;
 
- Then create a function submitting the form:

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


 &nbsp;

-During the project I was struggling with the "newsletter" section does change its style after closing the popup on screens with a width less than 450 pixels. The logic that I implemented was to checks the screen width and adjusts the display style accordingly. 
```
const closePopup = () => {
    successPopupEl.style.display = "none"; // Hide the popup

    if (window.innerWidth >= 450) {
        newsletterEl.style.display = "flex"; // If wide screen, set the "newsletter" section to flex
    } else {
        newsletterEl.style.display = ""; // If narrow screen, remove the display style to revert to default behavior
    }
}

window.addEventListener("resize", handleResize);
```
 &nbsp;



## 💭 Conclusions for future projects

I would like to improve form submission with many diffrent form sumbission variants.

## 🙋‍♂️ Feel free to contact me
e-mail: kamlew555@gmail.com

