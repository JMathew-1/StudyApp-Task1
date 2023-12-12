
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});




function handleStudentLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Get the username and password input
  var usernameInput = document.getElementById("Student-Username");
  var passwordInput = document.getElementById("Student-Password");
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Check if the entered username and password match predefined values
  if (username === "admin" && password === "abcd") {
    // Redirect to another page
    window.location.href = "dashboard.html";
  } else {
    // Display an error message if detail are wrong
    alert("Incorrect username or password");
  }
}



