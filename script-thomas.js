const date = new Date(),
	daysTag = document.querySelector(".days"),
	prevNextIcon = document.querySelectorAll(".left-arrow , .right-arrow");

let currYear = date.getFullYear(),
	currMonth = date.getMonth();

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
