import * as D from '../dates'
import { type TimeSheetEntry } from '../types'

const isEntryInDay = (date: Date, entry: TimeSheetEntry): boolean => {
  const { start, end } = entry
  const startOfDay = D.getStartOfDayDate(date)
  const endOfDay = D.getEndOfDayDate(date)

  return (
    (+start >= +startOfDay && (end === null || +end <= +endOfDay)) ||
    (+start < +startOfDay &&
      (end === null || (+end > +startOfDay && +end <= +endOfDay)))
  )
}

export default isEntryInDay
