const alertButton = document.querySelector(".button-script");

alertButton.addEventListener("click", (e) => {
	Swal.fire("Perfect", "U krijgt zo dadelijk een mail", "success");
});
