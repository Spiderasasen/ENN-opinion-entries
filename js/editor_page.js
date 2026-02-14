//grabing elements from the webpage
const button = document.getElementById("button");

//grabbing elements from the local stroage
const header = localStorage.getItem("header");
const subheader = localStorage.getItem("subheader");
const media = localStorage.getItem("media");
const body = localStorage.getItem("body");

//button job
button.addEventListener("click", () => {
    alert("clicked!")
    localStorage.clear();
    console.log(localStorage);
    window.location.href = "index.html";
})

//basic local storage check
console.log(localStorage)