//getting the key
const apiKey = process.env.RESEND_API_LEY;

export default async function handler(req, res) {
    if (req.method === "POST") {
        //checking if the info was received
        const data = req.body;
        console.log("Received:", data);

        //making the email
        const { name, email, header, subheader, body, media } = data;
        const emailPayload = {
            from: "onboarding@resend.dev",
            to: "spiderasasen@gmail.com",
            subject: `New Opinion Submission from ${name}`,
            text:`
                User: 
                ${name}; ${email}
                
                Header for the Opinion Submission Article 
                ${header},
                
                Subheader for the Opinion Submission Article 
                ${subheader},
                
                Media ${name} would like to have included in the Article: 
                ${media}
                
                Main Draft:
                ${body}
            `
        }

        //sending the email
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(emailPayload),
        })

        const result = await response.json();

        //if an error happens when the email is being sent
        if (!response.ok) {
            return res.status(500).json({message: "An Error has occurred", error: result });
        }

        return res.status(200).json({ message: "Email Sent!!", id: result.id});
    }

    //not allowed to be entered
    return res.status(405).json({ message: "Method not allowed" });
}
