// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.background = "lightgreen";
});

document.getElementById("keypressInput").addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🎉 Secret double-click activated!");
});

// Interactive Elements
document.getElementById("colorChanger").addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

const images = [
  "https://via.placeholder.com/150?text=1",
  "https://via.placeholder.com/150?text=2",
  "https://via.placeholder.com/150?text=3",
];
let currentImage = 0;

document.getElementById("nextImage").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImage];
});

// Tabs
const tabs = document.querySelectorAll(".tabBtn");
const contents = document.querySelectorAll(".tabContent");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    contents.forEach((c) => c.classList.remove("active"));
    document.getElementById(`tab${tab.dataset.tab}`).classList.add("active");
  })
);

// Form Validation
const form = document.getElementById("myForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    feedback.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "Form submitted successfully!";
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", function () {
  const msg = this.value.length < 8
    ? "Password too short"
    : "Looking good!";
  feedback.textContent = msg;
});
