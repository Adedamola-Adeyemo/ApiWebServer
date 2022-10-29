const express = require('express');

const app = express();

const port = process.env.PORT;

app.listen(
    port,
    () => console.log(`Server running on ${port}`)
)

app.get("/", function (req, res) {
    res.json(
        { "slackUsername": 'Adedamola Adeyemo', "backend": Yes, "age": 25, "bio": 'Passionate about problem solving' }
    )
}
)
