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
    const { operation, x, y} = req.body

    let resu;
    
    switch(operation){
        case "Addition":
            resu = x+y;
            break;

        case "Subtraction":
            resu = x-y;
            break;

        case "Multiplication":
            resu = x*y;
            break;
        default:
            resu = x+y;
    }

    res.status(200).json({ slackUsername: name, result: resu, operation_type: operation});
  }
);


app.listen(
    port,
    () => console.log(`Server running on ${port}`)
)



