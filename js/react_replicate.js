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