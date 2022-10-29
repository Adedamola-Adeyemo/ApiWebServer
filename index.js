const express = require('express');

const app = express();

const port = process.env.PORT;

app.listen(
    port,
    () => console.log(`Server running on ${port}`)
)
const name = 'Adedamola Adeyemo';
const backend = true;
const age = 25;
const bio = 'Passionate about problem solving';

app.get("/", function (req, res) {
    res.json(
        { "slackUsername": name, "backend": backend, "age": age, "bio": bio }
    )
}
)
