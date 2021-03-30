const timeSinceEl = document.querySelector(".last-edit");
lastEdit = 1617142207943;
daysSince = (Date.now() - lastEdit) / 86400000;
let displayedDate;

if (daysSince < 1) {
    displayedDate = "Today";
} else if (1 < daysSince && daysSince < 2) {
    displayedDate = "Yesterday";
} else {
    displayedDate = `${Math.floor(daysSince)} Days Ago`;
}
timeSinceEl.textContent = displayedDate;

const section1 = document.querySelector(".section--1");
const section2 = document.querySelector(".section--2");
const section3 = document.querySelector(".section--3");
