const express = require("express");
const router = require("./routers/router");

const PORT = 3000;

const app = express();

app.use(router);
app.set("view engine", "ejs");

app.all("*", (req, res, nex) => {
    res.render("error");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
