"use strict";

// *** Selecting Elements ***
const body = document.querySelector("body");
const headingPrimary = document.querySelector(".heading__primary");
const sliderImages = document.querySelector(".slider__images");
const slider = document.querySelector(".slider");
const slideImages = document.querySelectorAll(".slide");

const sliderButtons = document.querySelector(".slider__buttons");
const nextBtn = document.querySelectorAll(".next__btn");
const prevBtn = document.querySelectorAll(".prev__btn");

// *** CSS styles ***

// *** Styling options for body element ***
const bodyOptions = {
	position: "relative",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0, 0.9)",
	margin: "0 30px",
};

// *** Styling options for heading ( h1 ) ***
const headingOptions = {
	position: "absolute",
	top: "50px",
	fontSize: "clamp(10px, 10vw, 100px)",
	wordBreak: "keep-all",
	padding: "10px",
	color: "#f1f1f1",
	overflow: "hidden",
	background:
		"linear-gradient( to right, rgba(0, 0, 0, 0.9), #fff, rgba(0, 0, 0, 0.9) ), no-repeat 150%",
	backgroundClip: "text",
	webkitTextFillColor: "transparent",
	animation: "textAnim 4s linear infinite",
};

const mediaQueryHeading = window.matchMedia("(max-width: 1250px)");

const mediaQueryFunc = (e) => {
	if (e.matches) {
		headingPrimary.style.fontSize = "clamp(40px, 6vw, 100px)";
	}
};

mediaQueryHeading.addEventListener("change", mediaQueryFunc);
mediaQueryFunc(mediaQueryHeading);

// *** Styling options for slider images container ***
const sliderImagesOptions = {
	width: "800px",
	height: "auto",
	position: "relative",
	overflow: "hidden",
	boxShadow: "0 0 2px rgba(0,0,0,0.7)",
};

// *** Styling options for individual slide images ***
const slideImagesOptions = {
	flex: "0 0 100%",
	height: "auto",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

// *** Styling options for slider container ***
const sliderOptions = {
	position: "relative",
	display: "flex",
	flexDirection: "row",
	transition: "all .5s ease-in-out",
};

// *** Styling options for slider buttons container ***
const sliderButtonsOptions = {
	width: "100%",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	display: "flex",
	justifyContent: "space-between",
};

// *** Styling options for Next and Prev buttons ***
const sliderButtonOptions = {
	padding: "10px",
	transition: "all .3s ease",
	cursor: "pointer",
};

//  *** Applying CSS styles to elements ***

// *** Applying styles to slider images container ***
Object.entries(sliderImagesOptions).forEach(([styleKey, styleValue]) => {
	sliderImages.style[styleKey] = styleValue;
});

// *** Applying styles to individual slide images ***
Object.entries(slideImagesOptions).forEach(([styleKey, styleValue]) => {
	slideImages.forEach((slideImg) => {
		slideImg.style[styleKey] = styleValue;
	});
});

// *** Applying styles to slider container ***
Object.entries(sliderOptions).forEach(([styleKey, styleValue]) => {
	slider.style[styleKey] = styleValue;
});

// *** Applying styles to body element ***
Object.entries(bodyOptions).forEach(([styleKey, styleValue]) => {
	body.style[styleKey] = styleValue;
});

// *** Applying styles to heading ( h1 ) ***
Object.entries(headingOptions).forEach(([styleKey, styleValue]) => {
	headingPrimary.style[styleKey] = styleValue;
});

const animStyles = document.createElement("style");
console.log(animStyles);
animStyles.innerHTML = `
@keyframes textAnim {
	0% { background-position: -200%; background-size: 200% }
	100% { background-position: 200%; background-size: 200% }
}
`;

document.head.appendChild(animStyles);

// *** Applying styles to slider buttons container ***
Object.entries(sliderButtonsOptions).forEach(([styleKey, styleValue]) => {
	sliderButtons.style[styleKey] = styleValue;
});

// *** Applying styles to Next and Prev buttons ***
Object.entries(sliderButtonOptions).forEach(([styleKey, styleValue]) => {
	nextBtn.forEach((btn) => (btn.style[styleKey] = styleValue));
	prevBtn.forEach((btn) => (btn.style[styleKey] = styleValue));
});

//  *** Functionality ***

// *** Hover effect for Next and Prev buttons ***
nextBtn.forEach((btn) => {
	btn.addEventListener("mouseenter", () => {
		btn.style.opacity = "0.6";
	});

	btn.addEventListener("mouseleave", () => {
		btn.style.opacity = "1";
	});
});

prevBtn.forEach((btn) => {
	btn.addEventListener("mouseenter", () => {
		btn.style.opacity = "0.6";
	});

	btn.addEventListener("mouseleave", () => {
		btn.style.opacity = "1";
	});
});

// *** Click Effect ***

// *** Function to update slider position ***
const updateSlide = () =>
	(slider.style.transform = `translateX(-${index * 100}%)`);

let index = 0;

// *** Event listener for Next buttons ***
nextBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		index = index === slideImages.length - 1 ? 0 : index + 1;
		updateSlide();
	});
});

// *** Event listener for Prev buttons ***
prevBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		index = index === 0 ? slideImages.length - 1 : index - 1;
		updateSlide();
	});
});
