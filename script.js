const sidebar = document.querySelector(".sidebar");
const toggleBnt = document.querySelector(".toggle-btn");

toggleBnt.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
