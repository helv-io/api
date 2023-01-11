import { registerFont } from 'canvas'
import express from 'express'
import { attp, ttp } from './endpoints/ttp'

registerFont('./font/blogger sans-bold.ttf', { family: 'Blogger' })

const app = express()
app.get('/attp', attp)
app.get('/ttp', ttp)
app.listen(3000, console.log)