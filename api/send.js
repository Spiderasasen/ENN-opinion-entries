//getting the key
const apiKey = process.env.RESEND_API_KEY;

export default function handler(req, res) {
    if (req.method === "POST") {
        //checking if the info was received
        const data = req.body;
        console.log("Received:", data);

        //making the email
        const { name, email, header, subheader, body, media } = data;
        const emailPayload = {
            from: "onboarding@resend.dev",
            to: "ddiaz11@elon.edu",
            subject: `New Opinion Submission from ${name}`,
            text:`
                User: 
                ${name}, ${email}
                
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

        return res.status(200).json({ message: "Email Sent!!"});
    }

    return res.status(405).json({ message: "Method not allowed" });
}
