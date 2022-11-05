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

app.post("calculator/", (req,res)=>{

    const {operation, x, y} = req.body;

    const operations = {
        addition:'addition',
        subtraction: 'subtraction',
        multiplication:'multiplication'

    }


    if (operation === operations.addition){
        const result = x + y;
    }
    else if (operation === operations.subtraction){
        const result = x - y;
    }
    else{
        const result = x * y;
    }

    res.json(
        { "slackUsername": name, "result": result, "operation_type": operation.value }
    )
})
