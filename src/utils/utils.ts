export const limitSplit = (text: string = '', limit = 6) => {
    // Declare variables
    const lines: string[] = []
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