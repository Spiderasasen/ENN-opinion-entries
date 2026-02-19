//getting the key
const apiKey = process.env.RESEND_API_KEY;

export default function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        console.log("Received:", data);
        console.log(apiKey)
        return res.status(200).json({ message: "Success", received: data });
    }

    //not allowed to be entered
    return res.status(405).json({ message: "Method not allowed" });
}
