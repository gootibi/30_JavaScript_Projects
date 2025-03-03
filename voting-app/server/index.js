const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const dataFile = path.join(__dirname, "data.json");

// Support POSTing form data with URL encoded
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/poll", async (req, res) => {
    let data = JSON.parse(await fs.readFile(dataFile, "utf8"));
    const totalVotes = Object.values(data).reduce((total, n) => total + n, 0);
    
    data = Object.entries(data).map(([label, votes]) => {
        return {
            label,
            percentage: (((votes * 100) / totalVotes) || 0).toFixed(0),
        };
    });
    console.log(data);

    res.json(data);
});

app.post("/poll", async (req, res) => {
    const data = JSON.parse(await fs.readFile(dataFile, "utf8"));
    data[req.body.add]++;

    await fs.writeFile(dataFile, JSON.stringify(data));

    res.end();
});

app.listen(3000, () => {
    console.log("Server is running on 3000 Port...")
});