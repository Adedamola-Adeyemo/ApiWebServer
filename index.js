const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT;

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

app.post("/calculate", (req, res) => {
    const operation = req.params.operation;
    const x = req.params.x;
    const y = req.params.y;

    const result = x+y;

    res.json({ slackUsername: name, result: result, operation_type: operation.value });
  }
);


app.listen(
    port,
    () => console.log(`Server running on ${port}`)
)



