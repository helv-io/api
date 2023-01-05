import { Encoder } from 'canvagif'
import express from 'express'

const app = express()

const limitSplit = (text: string = '', limit = 15) => {
    // Declare variables
    const lines = []
    let line = ''

    // Split text into words
    const words = text.split(' ')

    // For each word
    for (const word of words) {
        // Test if the line is past limit
        if (line.length > limit) {
            // Add the line to the array and reset the line 
            lines.push(line.trim())
            line = ''
        }
        // Add the line and keep working on it
        line += word + ' '
    }
    // Add the last (partial) line and return it
    lines.push(line)
    return lines
}

app.get('/attp', (req, res) => {
    console.log('Hit /attp!')
    console.log(req.query)

    // Get text from request query
    const text = <string>req.query.text
    const lines = limitSplit(text)
    console.log('lines', lines)
    const size = 500
    const colors = ['#FFA07A', '#FFFFE0', '#98FB98', '#ADD8E6', '#F08080']

    const encoder = new Encoder(size, size).setFrameRate(10).start()
    const context = encoder.getContext()

    const lineHeight = context.measureText('W').width * 8
    const totalHeight = lineHeight * (lines.length - 1)
    const x = size / 2
    let y = x - totalHeight / 2

    context.font = '90px Arial'
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
