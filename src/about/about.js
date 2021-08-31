const path = window.location.pathname;
const pageName = path.replace(/\/|\..+/g, "");
if (pageName === "about") {
  const btnToggle = document.querySelector(".toggle-btn");
  btnToggle.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
  });

  
}
