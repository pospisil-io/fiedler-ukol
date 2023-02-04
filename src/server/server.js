const express = require('express')
const app = express()
const port = 8000

app.route('/')
    .get((req, res) => {
        res.sendFile('')
    })

app.listen(port, () => {
    console.log(`Data server running on port ${port}`);
})