//grabing elements from the webpage
const button = document.getElementById("button");

//grabbing elements from the local stroage
const submissionData = {
    "name": localStorage.getItem("name"),
    "email": localStorage.getItem("email"),
    "header": localStorage.getItem("header"),
    "subheader": localStorage.getItem("subheader"),
    "body": localStorage.getItem("body"),
    "media": localStorage.getItem("media")
}

//button job
button.addEventListener("click", () => {
    //telling the user who they selected
    alert(`We've sent your documents to Diaz: ddiaz11@elon.edu`);

    const response = fetch("/api/send", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({submissionData})
    });

    //clearing the storage and sending the user back to the home page
    localStorage.clear();
    console.log(localStorage);
    window.location.href = "index.html";
})

//basic local storage check
console.log(localStorage)