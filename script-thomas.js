const date = new Date(),
	daysTag = document.querySelector(".days"),
	prevNextIcon = document.querySelectorAll(".left-arrow , .right-arrow"),
	eMail = document.querySelector(".submit"),
	prevIcon = document.querySelector(".left-arrow");

let currYear = date.getFullYear(),
	currMonth = date.getMonth(),
	lastMonth = date.getMonth() - 1,
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
		const previousClicked = icon.id === "prev";

		// TODO: replace by current month and year
		// TODO: face arrow back
		if (previousClicked && currMonth <= lastMonth && currYear == "2023") {
			console.log("clicked in the past");
			//prevIcon = stop;
			renderCalendar();
			console.log("stop execution");
			return;
		}

		currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1; // active icons

		if (currMonth > 11) {
			currMonth = 0;
			currYear += 1;
		}
		if (currMonth < 0) {
			currMonth = 11;
			currYear -= 1;
		}
		renderCalendar();
	});
});

daysTag.addEventListener("click", (e) => {
	document.querySelector(".date-appointment-onclick p").innerHTML = e.target.innerHTML + " " + months[currMonth] + " " + currYear;
});

eMail.addEventListener("click", (e) => {
	Swal.fire("Uw afspraak werd verzonden!", "Kijk regelmatig in uw mailbox om te weten of uw afspraak werd aanvaard", "success");
});
