//fetches the api and starts praying that everything works
fetch("https://script.google.com/macros/s/AKfycbzL0q3bqZAHjgb7XGRltydzGtSqROkit0Q3J4jsyHmmzopF6qdf__TBdLdSbB_sG_A/exec")
    .then(res =>
    {
        if (!res.ok) throw new Error("Failed to fetch script: " + res.statusText);
        return res.json();
    })
    .then(editors => {
        console.log(editors);
        renderEditors(editors);
    })
    .catch(err => console.log("Something went wrong", err));

//redering in all the eidtors
function renderEditors(editors) {
    const container = document.getElementById("editors_container");

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

        //grabs the info from local stroage to add it to the editor name, discription and emil
        card.addEventListener("click", () => {
            localStorage.setItem("selectedName", editor.Name);
            localStorage.setItem("selectedEmail", editor.Email);
        });

        container.appendChild(card);
    })

}