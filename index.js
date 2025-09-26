// Get elements
const form = document.getElementById("country-form");
const destinationInput = document.getElementById("destination");
const budgetInput = document.getElementById("budget");
const styleSelect = document.getElementById("style");

const countryName = document.getElementById("country-name");
const capital = document.getElementById("capital");
const region = document.getElementById("region");
const tip = document.getElementById("tip");
const image = document.getElementById("image");
const message = document.getElementById("message");
const detailsSection = document.getElementById("country-details");

let countriesData = [];

// Fetch data from db.json
fetch("http://localhost:3000/countries")
  .then((res) => res.json())
  .then((data) => {
    countriesData = data;
  });

// Event 1: Live preview of typed destination
destinationInput.addEventListener("input", () => {
  countryName.textContent = destinationInput.value || "Select a country";
});

// Event 2: Change background color based on style
styleSelect.addEventListener("change", () => {
  const style = styleSelect.value;
  if (style === "adventure") {
    detailsSection.style.backgroundColor = "#e1f5fe"; // light blue
  } else if (style === "chill") {
    detailsSection.style.backgroundColor = "#e8f5e9"; // light green
  } else if (style === "luxury") {
    detailsSection.style.backgroundColor = "#fff3e0"; // light gold
  }
});

// Event 3: Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const destination = destinationInput.value.trim().toLowerCase();
  const budget = budgetInput.value;
  const style = styleSelect.value;

  // Use find() to check if country exists
  let foundCountry = countriesData.find(function (c) {
    return c.name.toLowerCase() === destination;
  });

  if (foundCountry) {
    // Show details
    countryName.textContent = foundCountry.name;
    capital.textContent = foundCountry.capital;
    region.textContent = foundCountry.region;
    tip.textContent = foundCountry.tip;
    image.src = foundCountry.image;

    message.textContent = `Trip planned to ${foundCountry.name} with a budget of ${budget} and style: ${style}`;
    message.style.color = "green";
  } else {
    // Not found
    countryName.textContent = "Select a country";
    capital.textContent = "";
    region.textContent = "";
    tip.textContent = "";
    image.src = "";

    message.textContent = "Sorry, destination not found!";
    message.style.color = "red";
  }
});
