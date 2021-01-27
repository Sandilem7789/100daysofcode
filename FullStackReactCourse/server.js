const express = require("express");
const app = express();
app.use(express.static("./ch2_bootstrap"));

app.listen(3000, () => {
    console.log("App started on port 3000, press Ctrl-C to terminate..");
});