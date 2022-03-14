const express = require('express')
const admin = require('firebase-admin')
const { getAuth } = require('firebase-admin/auth')

const serviceAccount = require('./config/credentials.json')
const app = express()
const PORT = 2000

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

app.get('/', (req, res) => {
  const uid = 'kajame'

  getAuth()
    .createCustomToken(uid)
    .then((token) => {
      return res.json({ ok: true, token })
    })
    .catch((error) => {
      console.log('Error creating custom token:', error)
      return res.json({ ok: false })
    })
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})