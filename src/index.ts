import { registerFont } from 'canvas'
import express from 'express'
import { attp, ttp } from './endpoints/ttp'
import { otp } from './endpoints/otp'

registerFont('./blogger sans-bold.ttf', { family: 'Blogger' })

const app = express()
app.get('/attp', attp)
app.get('/ttp', ttp)
app.get('/otp', otp)
app.listen(3000)
