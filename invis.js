const port = 3000;
express = require("express");
app = express();



app.get("/", (req, res) => {
    res.send("Jarl Igmund demands your service");
});

app.get("/home", (req, res) => {
    res.send("Undrstone Keep, Markarth, The Reach");
});


app.listen(port, () => {
    console.log(`Express on port ${port}`);
});