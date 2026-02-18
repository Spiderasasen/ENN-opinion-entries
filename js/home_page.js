//making the vars
const header = document.getElementById("header");
const subheader = document.getElementById("subheader");
const body = document.getElementById("body");
const button = document.getElementById("sumbit_button");
const media = document.getElementById("media");
const name = document.getElementById("name");
const email = document.getElementById("email");

//function that will check if its empty
function isEmpty(document, placeholder){
    //checking if the document is empty
    if (document.value.trim() == ""){ //if it is, it will return true and will tell the user to enter a value
        alert (`Please enter ${placeholder}`);
        return true;
    }
    return false;
}


//if the items are not filled, then do not preceed to the next section
button.addEventListener("click", () => {
    //checking if everything is filled
    if ((isEmpty(name, "a name")) || (isEmpty(email, "an email")) || (isEmpty(header, "a header")) || (isEmpty(subheader, "a subheader")) || (isEmpty(body, "your opinion article")) || (isEmpty(media, "the media you will like to see")) ){
        window.location.href = "#";
    }
    //everything is filled, proseeding to the next window
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