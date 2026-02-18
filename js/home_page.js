//making the vars
const header = document.getElementById("header");
const subheader = document.getElementById("subheader");
const body = document.getElementById("body");
const button = document.getElementById("sumbit_button");
const media = document.getElementById("media");
const name = document.getElementById("name");
const email = document.getElementById("email");

//if the items are not filled, then do not preceed to the next section
button.addEventListener("click", () => {
    if (header.value.trim() === ""){
        alert("Please enter a header!");
        window.location.href = "#";
    }
    else if (subheader.value.trim() === ""){
        alert("Please enter a subheader!");
        window.location.href = "#";
    }
    else if (body.value.trim() === ""){
        alert("Please enter a body!");
        window.location.href = "#";
    }
    else{
        //setting items into local storage
        localStorage.setItem("header", header.value);
        localStorage.setItem("subheader", subheader.value);
        localStorage.setItem("media", media.value);
        localStorage.setItem("body", body.value);
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);

        //going to the next screen
        window.location.href = "selecting_editor.html";
    }
})