import express from "express";

const app = express();

app.get("/", (req, res) => {
    req.body;
    res.send("welcome to express with typescript & webpack & babel");
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
