import { Encoder } from 'canvagif'
import express from 'express'

const app = express()

const addLineBreaks = (text: string, limit = 15) => {
    let newStr = ''
    let currentLineLength = 0
    const words = text.split(' ')
    for (const word of words) {
        if (currentLineLength + word.length > limit) {
            newStr += '\n'
            currentLineLength = 0
        }
        newStr += word + ' '
        currentLineLength += word.length + 1
    }
    return newStr
}

app.get('/attp', (req, res) => {
    console.log('Hit /attp!')
    console.log(req.query)
    const lines = addLineBreaks(req.query['text']?.toString() || '').split('\n')
    console.log(lines)
    const size = 500
    const colors: string[] = []

    for (let i = 0; i < 10; i++) {
        colors.push(`#${((Math.random() * 0xffffff) << 0).toString(16)}`)
    }

    const encoder = new Encoder(size, size).start()
    const context = encoder.getContext()

    const lineHeight = context.measureText('W').width * 4
    const totalHeight = lineHeight * lines.length
    const x = size / 2
    let y = x - totalHeight / 2

    context.font = '80px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'

    colors.forEach((color) => {
        context.fillStyle = color
        lines.forEach((line) => {
            context.fillText(line, x, y, size)
            y += lineHeight
        })
        encoder.updateFrame()
        y = x - totalHeight / 2
    })
    res.type('gif').end(encoder.finish())
})

app.listen(3000, async () => {
    console.log('Listening on port 3000')
})