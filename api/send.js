export default function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        console.log("Received:", data);
        return res.status(200).json({ message: "Success", received: data });
    }

    return res.status(405).json({ message: "Method not allowed" });
}
