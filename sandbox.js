function animatedForm() {

	const arrows = document.querySelectorAll(".fa-arrow-down");

	arrows.forEach(arrow => {

		arrow.addEventListener("click", () => {
			const input = arrow.previousElementSibling;
			const parent = arrow.parentElement;
			const nextForm = parent.nextElementSibling;

			//check for validation
			if (input.type === "text" && validateUser(input)) {
				nextSlide(parent, nextForm);
			}
			else if (input.type === "email" && validateEmail(input)) {
				nextSlide(parent, nextForm);
			}
			else if (input.type === "password" && validateUser(input)) {
				nextSlide(parent, nextForm);
			}
			else {
				parent.style.animation = "shake 0.5s ease"
			}

			parent.addEventListener("animationend", () => {
				parent.style.animation = "";
			});

		});

	});

}

function validateUser(user) {
	if(user.value.length < 6) {
		console.log("not enough characters");
		error("rgb(189,87,87");
	}
	else {
		error("orange");
		return true;
	}
}

function validateEmail(email) {

	const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (validation.test(email.value)) {
		error("orange");
		return true;
	}
	else {
		error("rgb(189,87,87");
	}

}

function nextSlide(parent, nextForm) {
	parent.classList.add("innactive");
	parent.classList.remove("active");
	nextForm.classList.add("active");
}

function error(color) {
	document.body.style.backgroundColor = color;
}

animatedForm();

var media = document.getElementById("myvideo");
const playPromise = media.play();

if(playPromise !== null) {
	playPromise.catch(() => { media.play(); })
}