const date = new Date(),
	daysTag = document.querySelector(".days"),
	prevNextIcon = document.querySelectorAll(".left-arrow , .right-arrow");

let currYear = date.getFullYear(),
	currMonth = date.getMonth(),
	date1 = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector(".date p").innerHTML = date.toDateString(); //current date

const renderCalendar = () => {
	let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
		lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
		lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),
		lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
	let liTag = "";

	for (let i = firstDayOfMonth; i > 0; i--) {
		liTag += `<div class="prev-date">${lastDateOfLastMonth - i + 1}</div>`;
	}

	for (let i = 1; i <= lastDateOfMonth; i++) {
		//all the days of the current month
		let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "today" : "";
		liTag += `<div class="${isToday}">${i}</div>`;
	}

	for (let i = lastDayOfMonth; i < 6; i++) {
		liTag += `<div class="next-date">${i - lastDayOfMonth + 1}</div>`;
	}

	document.querySelector(".date h1").innerHTML = months[currMonth] + " " + [currYear]; // Showing current month
	daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
	icon.addEventListener("click", () => {
		// click event
		currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1; // active icons

		// currMonth < 0 --> buttons disabled
		// currMonth > 11 --> terug starten met jan etc
		// = maand naar nul, jaar +1
		/*if (currMonth < 0 || currMonth > 11) {
			date = new Date(currYear, currMonth);
			currYear = date.getFullYear();
			currMonth = date.getMonth();
		} else {
			date = new Date();
		}*/
		renderCalendar();
	});
});

daysTag.addEventListener("click", (e) => {
	console.log(e.target.innerHTML);
	document.querySelector(".date-appointment-onclick p").innerHTML = e.target.innerHTML + " " + months[currMonth] + " " + currYear;
});

const dropdowns = document.querySelectorAll(".location-choice");
dropdowns.forEach((dropdown) => {
	const select = dropdown.querySelector(".select");
	const caret = dropdown.querySelector(".caret");
	const menu = dropdown.querySelector(".menu");
	const options = dropdown.querySelector(".menu li");
	const selected = dropdown.querySelector(".selected");

	select.addEventListener("click", () => {
		select.classList.toggle("selected-clicked");
		caret.classList.toggle("caret-rotate");
		menu.classList.toggle("menu-open");
	});

	options.forEach((option) => {
		option.addEventListener("click", () => {
			selected.innerText = option.innerText;
			select.classList.remove("select-clicked");
			caret.classList.remove("caret-rotate");
			menu.classList.remove("menu-open");

			options.forEach((option) => {
				option.classList.remove("selected-city");
			});
			option.classList.add("selected-city");
		});
	});
});
