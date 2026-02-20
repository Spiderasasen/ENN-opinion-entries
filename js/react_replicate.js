//getting the container and the loading system
const container = document.getElementById("editors_container");
const loader = document.getElementById("loading");

//making the display
loader.style.display = "block";
container.style.display = "none";

//fetches the api and starts praying that everything works
fetch("https://script.google.com/macros/s/AKfycbzL0q3bqZAHjgb7XGRltydzGtSqROkit0Q3J4jsyHmmzopF6qdf__TBdLdSbB_sG_A/exec")
    .then(res =>
    {
        if (!res.ok) throw new Error("Failed to fetch script: " + res.statusText);
        return res.json();
    })
    .then(editors => {
        console.log(editors);
        loader.style.display = "none";
        container.style.display = "block";
        renderEditors(editors);
    })
    .catch(err => console.log("Something went wrong", err));

//redering in all the eidtors
function renderEditors(editors) {
    //for each editor, create a card
    editors.forEach(editor => {
        const card = document.createElement("div");

        //creates the card div
        card.innerHTML = `
            <div class="editor-card">
                <h3>${editor.Name}</h3>
                <p>${editor.Description}</p>
                <p><strong>Email: ${editor.Email}</strong></p>
            </div>
        `;

        const innerCard = card.querySelector(".editor-card");

        //remembering the selected editor
        if(editor.Name === localStorage.getItem("selectedName")){
            card.classList.add("selected");
        }

        //grabs the info from local stroage to add it to the editor name, discription and emil
        card.addEventListener("click", () => {
            //removing the selected hue on all cards
            document.querySelectorAll(".editor-card").forEach(c => {
                c.classList.remove("selected");
            });

            //add all information into the right section
            innerCard.classList.add("selected");
            localStorage.setItem("selectedName", editor.Name);
            localStorage.setItem("selectedEmail", editor.Email);

            //showing me the selected console log
            console.log("Name: ", localStorage.getItem("selectedName"));
            console.log("Email: ", localStorage.getItem("selectedEmail"));
        });

        container.appendChild(card);
    })

}