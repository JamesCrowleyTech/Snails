"use strict";

const timeSinceEl = document.querySelector(".last-edit");
const lastEdit = 1617308182946;
const daysSince = (Date.now() - lastEdit) / 86400000;

const [section1, section2, section3] = document.querySelectorAll(".section");
const contentsSection = document.querySelector(".contents");

const introScroll = (options) => section1.scrollIntoView(options);
const habitatScroll = (options) => section2.scrollIntoView(options);
const dietScroll = (options) => section3.scrollIntoView(options);
const contentsScroll = (options) => contentsSection.scrollIntoView(options);

// prettier-ignore
const [navBtn1, navBtn2, navBtn3, navBtn4, contentsBtn1, contentsBtn2, contentsBtn3] = [
    ...document.querySelectorAll(".nav--btn"),
    ...document.querySelectorAll(".contents-link")];
const btnOptions = { behavior: "smooth" };
let displayedDate;

if (daysSince < 1) {
    displayedDate = "Today";
} else if (1 < daysSince && daysSince < 2) {
    displayedDate = "Yesterday";
} else {
    displayedDate = `${Math.floor(daysSince)} Days Ago`;
}
timeSinceEl.textContent = displayedDate;

navBtn1.addEventListener("click", () => introScroll(btnOptions));
navBtn2.addEventListener("click", () => habitatScroll(btnOptions));
navBtn3.addEventListener("click", () => dietScroll(btnOptions));
navBtn4.addEventListener("click", () => contentsScroll(btnOptions));

contentsBtn1.addEventListener("click", () => introScroll(btnOptions));
contentsBtn2.addEventListener("click", () => habitatScroll(btnOptions));
contentsBtn3.addEventListener("click", () => dietScroll(btnOptions));

