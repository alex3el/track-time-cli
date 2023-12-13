import * as P from '../print'
import { type TimeSheet, type TimeSheetEntry } from '../types'

const printSheet = (
  sheet: TimeSheet,
  isActive?: boolean,
  printDateAgo?: boolean
): void => {
  const { activeEntryID, entries } = sheet

  P.printSheetHeader(sheet, isActive)

  entries.map((entry: TimeSheetEntry): void => {
    P.printSheetEntry(entry, entry.id === activeEntryID, '', printDateAgo)
  })
}

export default printSheet