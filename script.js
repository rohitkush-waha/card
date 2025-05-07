const card = document.getElementById("credit-card");

const numberInput = document.getElementById("card-number-input");
const nameInput = document.getElementById("card-name-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvvInput = document.getElementById("cvv-input");

const numberDisplay = document.getElementById("card-number-display");
const nameDisplay = document.getElementById("card-holder-display");
const expiryDisplay = document.getElementById("card-expiry-display");
const cvvDisplay = document.getElementById("cvv-display");

numberInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "").slice(0, 16);
  value = value.replace(/(.{4})/g, "$1 ").trim();
  numberInput.value = value;
  numberDisplay.textContent = value.padEnd(19, "#");
});

nameInput.addEventListener("input", (e) => {
  nameDisplay.textContent = e.target.value.toUpperCase() || "Full Name";
});

monthInput.addEventListener("change", updateExpiry);
yearInput.addEventListener("change", updateExpiry);

function updateExpiry() {
  const mm = monthInput.value;
  const yy = yearInput.value.slice(-2);
  expiryDisplay.textContent = mm && yy ? `${mm}/${yy}` : "MM/YY";
}

cvvInput.addEventListener("focus", () => {
  card.classList.add("flipped");
});

cvvInput.addEventListener("blur", () => {
  card.classList.remove("flipped");
});

cvvInput.addEventListener("input", (e) => {
  cvvDisplay.textContent = e.target.value || "***";
});