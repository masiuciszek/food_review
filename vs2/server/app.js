/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const app = express()
const fs = require('fs')

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

const port = 3000

app.get('/restaurants', (req, res) => {
  let data = loadData()
  res.json(data)
})

app.get('/images/:image', (req, res) => {
  res.sendFile(__dirname + '/shapes/' + req.params.image)
})

app.post('/review', (req, res) => {
  // addRestaurant(req.body.name, ...req.body)
  setTimeout(() => {
    res.json({ success: 'OK' })
  }, 2000)
})

app.listen(port, () => console.log(`Restaurant app listening on port ${port}!`))
