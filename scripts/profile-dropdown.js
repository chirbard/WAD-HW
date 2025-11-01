document.querySelectorAll(".profile-container").forEach((container) => {
  container.addEventListener("click", (e) => {
    const dropdown =
      container.querySelector(".profile-dropdown") ||
      document.querySelector(".profile-dropdown");
    if (!dropdown) return;

    const isHidden = window.getComputedStyle(dropdown).visibility === "hidden";
    dropdown.style.visibility = isHidden ? "visible" : "hidden";
  });
});
