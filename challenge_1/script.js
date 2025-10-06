document.getElementById("ham-icon").onclick = function () {
  const nav = document.querySelector("header nav ul");
  const hamIcon = document.getElementById("ham-icon");
  const isOpen = nav.classList.contains("open");

  if (isOpen) {
    nav.classList.remove("open");
    hamIcon.classList.remove("ham-open");
  } else {
    nav.classList.add("open");
    hamIcon.classList.add("ham-open");
  }
};
