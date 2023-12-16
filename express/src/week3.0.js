const express = require("express");
const app = express();
const zod = require("zod");

const userNameSchema = zod.string();
const password = zod.string().min(5)

app.get("/health", (req, res) => {
const userName = req.headers.userName;
const password = req.headers.password;
const kidneyId = req.query.kidneyId;
if (userName)

if (userName !== "sagun" && password !== "password") {
    res.status(400).json({
        msg: "Something worng witht he input"
    })
}

    if (kidneyId === 1) {
        res.json({
            msg: "your Kidney is fine"
        })
    } else {
        res.json({
            msg: "kidneyId is not upto the mark"
        })
    }

})

app.listen(3000, () => {
    console.log("app is listening to 3000")
})