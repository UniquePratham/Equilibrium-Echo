// script.js
const scrollingBlocks = document.querySelectorAll(".scrolling-block");

scrollingBlocks.forEach((block) => {
  block.addEventListener("transitionend", () => {
    block.style.transition = "none";
    block.style.transform = "translateX(0)";
    void block.offsetWidth; // Trigger a reflow to ensure the new transform is applied immediately
    block.style.transition = "transform 20s linear";
  });
});

const map = L.map("map").setView([22.572645, 88.363892], 50); // Set your latitude and longitude

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

L.marker([latitude, longitude])
  .addTo(map)
  .bindPopup("Your Location")
  .openPopup();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitBtn");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(form);

    // Send form data to PHP file using Fetch API
    fetch("submit.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("Response received:", response);
        return response.text();
      })
      .then((data) => {
        console.log("Data received:", data);
        if (data === "success") {
          console.log("Form submitted successfully");
          form.reset();
          successMessage.classList.remove("hidden");
          submitButton.disabled = true;
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  });
});
