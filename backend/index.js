import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Nothing to find here... or is that so?")
})

app.get("/books", (req, res) => {
    db.query("SELECT * FROM book", (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO book (`book`, `pages`, `price`) VALUES (?)";
    const values = [
        req.body.book,
        req.body.pages,
        req.body.price,
    ];

    db.query(q, [values], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {console.log("Connected to backend!")})