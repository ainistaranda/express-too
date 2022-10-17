import express from 'express' // always
import people from './data.js'
const PORT = 3033

const app = express() //always
// give it tools to read the data parsers (use json parser)
// when we get data in we expect it in json format, if left out const newPerson = req.body wont work
app.use(express.json())

app.get('/people', (req, res) => {
    res.send(people)
})

app.post('/people', (req, res) => {
    const newPerson = req.body
    people.push(newPerson)
    res.send(people)
})



app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}...`))