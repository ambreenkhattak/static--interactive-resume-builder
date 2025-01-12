const toggleBtn = document.getElementById("toggle-btn") as HTMLButtonElement;
const content = document.getElementById("content") as HTMLDivElement;

if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}
  
  



