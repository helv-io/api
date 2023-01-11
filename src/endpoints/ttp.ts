import { Encoder } from 'canvagif'
import { Request, Response } from 'express'
import { limitSplit } from '../utils/utils'

const IMAGE_SIZE = 512
const FONT = 'Blogger'
const FONT_SIZE = 100
const TEXT_ALIGN = 'center'
const TEXT_BASELINE = 'middle'
const LINE_WIDTH = 2
const BLACK = '#000000'
const WHITE = '#FFFFFF'
const COLORS = ['#FFA07A', '#FFFFE0', '#98FB98', '#ADD8E6', '#F08080', '#EEE8AA', '#90EE90', '#87CEFA', '#FFB6C1', '#FFC0CB']

export const ttp = (req: Request, res: Response) => {
    // Get text from request query
    const text = <string>req.query.text
    const lines = limitSplit(text)
    const maxLines = 8

    let fontSize = FONT_SIZE
    if (lines.length > maxLines) {
        fontSize = FONT_SIZE * (maxLines / lines.length)
    }

    const encoder = new Encoder(IMAGE_SIZE, IMAGE_SIZE).setFrameRate(10).start()
    const context = encoder.getContext()

    const lineHeight = fontSize * 1.2
    const totalHeight = lineHeight * (lines.length - 1)
    const x = IMAGE_SIZE / 2
    let y = x - totalHeight / 2

    context.font = `${fontSize}px ${FONT}`
    context.textAlign = TEXT_ALIGN
    context.textBaseline = TEXT_BASELINE

    context.fillStyle = WHITE
    context.strokeStyle = BLACK
    context.lineWidth = LINE_WIDTH

    lines.forEach((line) => {
        context.fillText(line, x, y, IMAGE_SIZE)
        context.strokeText(line, x, y, IMAGE_SIZE)
        y += lineHeight
    })
    encoder.updateFrame()
    y = x - totalHeight / 2
    res.type('gif').end(encoder.finish())
}

export const attp = (req: Request, res: Response) => {

    // Get text from request query
    const text = <string>req.query.text
    const lines = limitSplit(text)
    const maxLines = 8

    let fontSize = FONT_SIZE
    if (lines.length > maxLines) {
        fontSize = FONT_SIZE * (maxLines / lines.length)
    }

    const encoder = new Encoder(IMAGE_SIZE, IMAGE_SIZE).setFrameRate(10).start()
    const context = encoder.getContext()

    const lineHeight = fontSize * 1.2
    const totalHeight = lineHeight * (lines.length - 1)
    const x = IMAGE_SIZE / 2
    let y = x - totalHeight / 2

    context.font = `${fontSize}px ${FONT}`
    context.textAlign = TEXT_ALIGN
    context.textBaseline = TEXT_BASELINE
    context.strokeStyle = BLACK
    context.lineWidth = LINE_WIDTH

    COLORS.forEach((color) => {
        context.fillStyle = color
        lines.forEach((line) => {
            context.fillText(line, x, y, IMAGE_SIZE)
            context.strokeText(line, x, y, IMAGE_SIZE)
            y += lineHeight
        })
        encoder.updateFrame()
        y = x - totalHeight / 2
    })
    res.type('gif').end(encoder.finish())
}