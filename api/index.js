import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 5050;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,PATCH,DELETE');
    next();
});

app.post("/todos", (req, res) => {
    if (req.body.id === 1 || !req.body) {
        return res.status(422).send({ message: "Invalid value" })
    }

    try {
        return res.status(201).send({ ...req.body, method: "POST" });
    } catch (err) {
        return res.status(500).send({
            message: "An unexpected error has occurred, please try again later",
            err,
        }).end()
    }
});


app.put("/todos", (req, res) => {
    try {
        return res.status(200).send({ ...req.body, method: "PUT" });
    } catch (err) {
        return res.status(500).send({
            message: "An unexpected error has occurred, please try again later",
            err,
        }).end()
    }
});

app.patch("/todos", (req, res) => {
    try {
        return res.status(200).send({ ...req.body, method: "PATCH" });
    } catch (err) {
        return res.status(500).send({
            message: "An unexpected error has occurred, please try again later",
            err,
        }).end()
    }
});

app.delete("/todos", (req, res) => {
    try {
        return res.status(200).send({ ...req.body, method: "DELETE" });
    } catch (err) {
        return res.status(500).send({
            message: "An unexpected error has occurred, please try again later",
            err,
        }).end()
    }
});

app.get("/todos", (req, res) => {
    res.send([
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
    ]);
});

app.use((req, res) => {
    res.status(404).send({ message: "Not found", });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
