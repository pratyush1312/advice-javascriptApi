let para = document.querySelector(".para");
let button = document.querySelector(".button");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice", {})
    .then((res) => {
      return res.json();
    })
    .then((data) => (para.innerHTML = data.slip.advice))
    .catch((error) => console.log("Error"));
});
