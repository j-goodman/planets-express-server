const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Welcome to the solar system.")
})

app.get('/mercury', (req, res) => {
    res.json({
        "name": "Mercury",
        "position": 1,
        "description": "Mercury is the closest planet to the sun and the smallest planet in the solar system. A year on Mercury lasts only 88 Earth days."
    })
})

app.get('/venus', (req, res) => {
    res.json({
        "name": "Venus",
        "position": 2,
        "description": "Venus is the second planet from the sun and the hottest planet in the solar system."
    })
})

app.get('/earth', (req, res) => {
    res.json({
        "name": "Earth",
        "position": 3,
        "description": "Earth is the third planet from the sun and the only known planet with life. About 70% of Earth's surface is covered by water."
    })
})

app.get('/mars', (req, res) => {
    res.json({
        "name": "Mars",
        "position": 4,
        "description": "Mars is known as the Red Planet because of its reddish dust. It has the largest volcano in the solar system, Olympus Mons."
    })
})

app.get('/jupiter', (req, res) => {
    res.json({
        "name": "Jupiter",
        "position": 5,
        "description": "Jupiter is the largest planet in the solar system. It has a giant storm called the Great Red Spot."
    })
})

app.get('/saturn', (req, res) => {
    res.json({
        "name": "Saturn",
        "position": 6,
        "description": "Saturn is famous for its rings made of ice and rock. It has more than 140 known moons."
    })
})

app.get('/uranus', (req, res) => {
    res.json({
        "name": "Uranus",
        "position": 7,
        "description": "Uranus rotates on its side, making it unique among the planets. It appears blue because of methane gas in its atmosphere."
    })
})

app.get('/neptune', (req, res) => {
    res.json({
        "name": "Neptune",
        "position": 8,
        "description": "Neptune is the farthest known planet from the sun. It has some of the fastest winds in the solar system."
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})