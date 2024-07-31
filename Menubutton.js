let btn = document.querySelector("#show");
let list = document.querySelector("#list");

btn.addEventListener("click", () => {
  list.classList.toggle("xs:top-24");

  // Simplified logic to toggle between "xs:top-20" and "xs:top-[-100%]"
  if (list.classList.contains("xs:top-24")) {
    list.classList.remove("xs:top-[-100%]");
  } else {
    list.classList.add("xs:top-[-100%]");
  }
});
