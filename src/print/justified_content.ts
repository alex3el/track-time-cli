import stripANSI from 'strip-ansi'

import log from '../log'

type ColumnWidths = Record<number, number>

const printJustifiedContent = (rows: Array<string[]>) => {
  const columnWidths: ColumnWidths = {}

  rows.forEach((columns: string[]) => {
    columns.forEach((value: string, i: number) => {
      const currentWidth = columnWidths[i] ?? 1

      columnWidths[i] = Math.max(currentWidth, stripANSI(value).length + 1)
    })
  })

  rows.forEach((columns: string[]) => {
    const resultString = columns
      .map((value: string, i: number) => {
        const width = columnWidths[i]
        const valueWidth = stripANSI(value).length
        const charsToPad = Math.max(0, width - valueWidth)

        let result = value

        for (let i = 0; i < charsToPad; i += 1) {
          result += ' '
        }

        return result
      })
      .join(' ')

    log(resultString)
  })
}

export default printJustifiedContent