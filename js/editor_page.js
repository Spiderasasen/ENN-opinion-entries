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
const formURL = "https://forms.cloud.microsoft/r/0zR72B8BX2"
const data = new FormData();

//button job
button.addEventListener("click", () => {
    //telling the user who they selected
    alert(`We've sent your documents to Diaz: ddiaz11@elon.edu`);

    //pasting the info to the form
    data.append("ref2766886f134736b1ef77209e07ab8e", name);
    data.append("r8660ce3e70024eecb1113610024644fa", email);
    data.append("r0ede07dc5f834029835167ab08cb3b57", header);
    data.append("r2fabf1bf790749b8bdc8229b406c18d3", subheader);
    data.append("r05c51efa2d1f469393e6c99460cdfe02", media);
    data.append("r2734d2c7944b49749b76267f98b2e980", body);

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