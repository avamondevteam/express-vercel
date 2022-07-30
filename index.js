const express = require("express");
const app = express();
var cors = require('cors')
const product = require("./api/product");
const update = require("./api/update");

app.use(cors({
    origin: '*'
}));

app.use(express.json({ extended: false }));

app.use("/api/product", product);

app.use("/api/update", update);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
