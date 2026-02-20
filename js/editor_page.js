//grabing elements from the webpage
const button = document.getElementById("button");

//grabbing elements from the local stroage
const submissionData = {
    "name": localStorage.getItem("name"),
    "email": localStorage.getItem("email"),
    "header": localStorage.getItem("header"),
    "subheader": localStorage.getItem("subheader"),
    "body": localStorage.getItem("body"),
    "media": localStorage.getItem("media"),
    "editor_email": localStorage.getItem("selectedEmail"),
    "editor_name": localStorage.getItem("selectedName"),
}

//button job
button.addEventListener("click", async() => {

    const response = await fetch("/api/send", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(submissionData)
    });

    const result = await response.json();
    console.log("Server response:", result);

    //telling the user who they selected
    alert(`Your submission has been sent to ${submissionData.editor_name} (${submissionData.editor_email})\n They’ll reach out to you when they’re ready to begin reviewing your draft.`);

    //clearing the storage and sending the user back to the home page
    localStorage.clear();
    console.log(localStorage);
    window.location.href = "index.html";
})

//basic local storage check
console.log(localStorage)