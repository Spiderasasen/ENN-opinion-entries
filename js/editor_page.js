//grabing elements from the webpage
const button = document.getElementById("button");

//grabbing elements from the local stroage
const header = localStorage.getItem("header");
const subheader = localStorage.getItem("subheader");
const media = localStorage.getItem("media");
const body = localStorage.getItem("body");
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");

// getting the forms section
const formURL = "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=bTIYuh9x4kqGgWEVSTp6UwZTuf1pk8tDqwbdQB_E9NNUOVVJMUFJN1ZWNkNQNjVMN0VTUFhVSlU2Ry4u"
const data = new FormData();

//button job
button.addEventListener("click", () => {
    //telling the user who they selected
    alert(`We've sent your documents to Diaz: ddiaz11@elon.edu`);

    //pasting the info to the form
    data.append("name", name);
    data.append("email", email);
    data.append("header", header);
    data.append("subheader", subheader);
    data.append("media", media);
    data.append("body", body);

    fetch(formURL, {
       method: "POST",
       body: data,
    });

    //clearing the storage and sending the user back to the home page
    localStorage.clear();
    console.log(localStorage);
    window.location.href = "index.html";
})

//basic local storage check
console.log(localStorage)