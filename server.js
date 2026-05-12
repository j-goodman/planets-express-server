const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Welcome to the solar system.")
})

app.get('/mercury', (req, res) => {
    res.send(`Mercury is the closest planet to the sun, and the smallest planet in the solar system. It's named for a Roman messenger-god.`)
})

app.get('/earth', (req, res) => {
    res.send(`Earth is the third planet from the sun. It has one moon. The earth's surface is mostly covered by oceans.`)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})