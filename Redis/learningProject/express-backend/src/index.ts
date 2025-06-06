import express from "express"
import { createClient } from "redis";
const app = express();
const client = createClient()
app.use(express.json());

client.on('error', (err) => console.log('Redis Client Error', err));

app.post("/submit", async(req, res)=>{
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;

    try {
        await client.connect();
        console.log("client connect");
        
        await client.lPush("problems", JSON.stringify({ code, language, problemId }));
        // Store in the database
        res.status(200).send("Submission received and stored.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
});

app.listen(3000);