const appContainer = document.querySelector(".rating__container");

const htmlTagsData = [
	{
		tagName: "span",
		class: "rating__star-btn",
		children: [
			{
				tagName: "img",
				attributes: { src: "./images/icon-star.svg", alt: "icon star" },
			},
		],
	},
	{
		tagName: "header",
		children: [
			{ tagName: "h2", class: "rating__heading", text: "How did we do?" },
		],
	},
	{
		tagName: "p",
		class: "rating__request",
		text: "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
	},
	{
		tagName: "div",
		class: "rating__buttons",
		children: [
			{
				tagName: "button",
				class: "rating__btn",
				"data-rating": "1",
				text: "1",
			},
			{
				tagName: "button",
				class: "rating__btn",
				"data-rating": "2",
				text: "2",
			},
			{
				tagName: "button",
				class: "rating__btn",
				"data-rating": "3",
				text: "3",
			},
			{
				tagName: "button",
				class: "rating__btn",
				"data-rating": "4",
				text: "4",
			},
			{
				tagName: "button",
				class: "rating__btn",
				"data-rating": "5",
				text: "5",
			},
		],
	},
	{ tagName: "button", class: "rating__submit__btn", text: "submit" },

    {tagName: "div",
    class: "rating__popup",
    children: [
      {
        tagName: "img",
        class: "rating__thank-you",
        attributes: {
          src: "/images/illustration-thank-you.svg",
          alt: "illustration-thank-you",
        },
      },
      {
        tagName: "div",
        class: "rating__result",
        text: "You selected ",
        children: [
          {
            tagName: "span",
            class: "rating__number",
            text: "0",
          },
          {
            tagName: "span",
            text: " out of 5",
          },
        ],
      },
      {
        tagName: "h2",
        class: "rating__thank-you-heading",
        text: "Thank you!",
      },
      {
        tagName: "p",
        class: "rating__thank-you-massage",
        text: "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!",
      },
    ],
  },


];



const renderPopupContainer = () => {
    const container = document.createElement('div')
    // container.style.backgroundColor="white"
    container.className = "rating__popup";
    
    const img = document.createElement('img')
    img.className = "rating__thank-you";
    img.setAttribute("src", "./images/illustration-thank-you.svg");

    const containerResult = document.createElement('div')
    containerResult.className = "rating__result";
    containerResult.innerText = "You selected "

    const span = document.createElement('span')
    span.className = "rating__number";
    span.innerHTML = 0 + " of of 5";
    containerResult.appendChild(span)

    const h2 = document.createElement ('h2')
    h2.className = 'rating__thank-you-heading';
    h2.innerText ='Thank You!'

    const p = document.createElement ('p')
    p.className = "rating__thank-you-massage";
    p.innerText= 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'

    container.appendChild(img)
    container.appendChild(containerResult)
    container.appendChild(h2)
    container.appendChild(p)
    
    document.body.appendChild(container)
    return container
} 


// tu dodaj listeneraa !!!
const renderSubmitButton = (text) =>{

    const button = document.createElement('button')
    button.className = "rating__submit-btn";
    button.innerText = text

    return button
}

const renderButtonsContainer = () => {
    const container = document.createElement('div')
    container.className = "rating__buttons";

    let numButtons = 5

    for (let i = 1; i <= numButtons; i++) {
			const button = document.createElement("button");
			button.className = "rating__btn";
			button.setAttribute("data-rating", String(i));
			button.innerText = i;

			container.appendChild(button);
		}

    return container
}


const renderTextRequest = (text) => {
    const p = document.createElement('p')
    p.className = "rating__request";
    p.innerText = text

    return p
}

const renderHeaderElement = () => {
    const header = document.createElement('header')

    const h2 = document.createElement('h2')
    h2.innerText = "How did we do?";
    h2.className = "rating__heading";
    header.appendChild(h2)

    return header

}

const renderSpanAndImgElement = () => {
    const span = document.createElement('span')
    span.className = "rating__star-btn";

    const img = document.createElement('img')
    img.setAttribute("src", "./images/icon-star.svg"); 

    span.appendChild(img)
    return span
}


const renderApp = () => {
    const container = document.createElement('div')
    const spanEl = renderSpanAndImgElement()
    const headerEl = renderHeaderElement()
    const pEl = renderTextRequest('Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!')
    const buttonList = renderButtonsContainer()
    const submitButtonEl = renderSubmitButton('Submit')
    
    const popupEl = renderPopupContainer()
    container.appendChild(spanEl)
    container.appendChild(headerEl)
    container.appendChild(pEl)
    container.appendChild(buttonList)
    container.appendChild(submitButtonEl)
    container.appendChild(popupEl)

    return container
}



const init = (selector) => {

    const container = document.querySelector(selector)

    if(!container) return

    const app = renderApp()

    container.prepend(app)
}

init(".rating__container");
