import express from "express"
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors())

const port=process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/api", (req, res) => {
    const query = req.body.query;
    console.log(query)
    res.json({response: "Hello World  from api!"})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})