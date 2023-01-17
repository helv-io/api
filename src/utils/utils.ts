import ffmpeg from 'fluent-ffmpeg'
import * as fs from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'

export const limitSplit = (text: string = '', limit = 10) => {
    // Declare variables
    const lines: string[] = []
    let line = ''

    // Split text into words
    const words = text.split(' ')

    // For each word
    for (const word of words) {
        // Test if the line plus the next word is past limit
        if ((line.length + word.length) > limit) {
            // Add the line to the array and reset the line
            lines.push(line.trim())
            line = ''
        }

        // Add the word to the line
        line += word + ' '

        // When the word is the last word in text
        if (words.indexOf(word) === words.length - 1) {
            // add the last line
            lines.push(line.trim())
        }
    }

    // return the lines
    return lines
}

export const gifToWebp = async (gif: Buffer, hash: number) => {
    const gifFile = path.join(tmpdir(), `${hash}.gif`)
    const webpFile = path.join(tmpdir(), `${hash}.webp`)
    await fs.writeFile(gifFile, gif)
    return new Promise<string>(async (resolve, reject) => {
        ffmpeg({ source: gifFile })
            .outputOptions(['-vcodec webp', '-loop 0', '-pix_fmt yuva420p'])
            .on('error', (error) => reject(error))
            .on('end', async () => {
                await fs.unlink(gifFile)
                resolve(webpFile)
            })
            .save(webpFile)
    })
}

export const hash = (text: string) => {
    let hash = 0
    let i: number
    let chr: number
    if (text.length === 0) return hash
    for (i = 0; i < text.length; i++) {
        chr = text.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0
    }
    return hash;
}