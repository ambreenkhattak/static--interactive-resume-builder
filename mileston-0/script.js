var toggleBtn = document.getElementById("toggle-btn");
var content = document.getElementById("content");
if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        if (content.style.display === "none") {
            content.style.display = "block";
        }
        else {
            content.style.display = "none";
        }
    });
}
