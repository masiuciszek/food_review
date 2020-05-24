/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const app = express()
const fs = require('fs')

const port = 3000
// let testing = require('./review.json')
// console.log(testing)
// let newuser = {
//   name: 'boris',
// }
// testing.push(newuser)
// console.log(testing)

app.use(express.json())

const loadData = () => {
  try {
    let contentData = fs.readFileSync('data.json')
    let dataToString = JSON.parse(contentData.toString())
    return dataToString
  } catch (err) {
    console.log(err.message)
    return []
  }
}

const saveRestaurant = (data) => {
  const newRestaurantData = JSON.stringify(data)
  fs.writeFileSync('data.json', newRestaurantData)
}

const addRestaurant = (name, body) => {
  const currentData = loadData()
  const duplicate = currentData.find((r) => r.name === name)
  if (!duplicate) {
    currentData.push({
      name,
      body,
    })
    console.log('data saved to db')
    saveRestaurant(currentData)
  } else {
    console.log('data already exists')
  }
}

app.get('/restaurants', (req, res) => {
  let data = loadData()
  res.json(data)
})

app.get('/images/:image', (req, res) => {
  res.sendFile(__dirname + '/shapes/' + req.params.image)
})

app.post('/review', async (req, res) => {
  setTimeout(() => {
    fs.writeFileSync('review.json', JSON.stringify(req.body), { flag: 'a+' })
    console.log(req.body)
    res.json({ success: true, message: 'saved to the database', data: req.body })
  }, 2000)
})

app.listen(port, () => console.log(`Restaurant app listening on port ${port}!`))
