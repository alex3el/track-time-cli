import * as C from '../color'
import * as U from '../utils'
import * as P from '../print'
import { TimeSheet, type TimeTrackerDB } from '../types'

const COMMAND_CONFIG = {
  command: 'sheets',
  describe: 'List all sheets'
}

interface SheetsCommandArgs {
  db: TimeTrackerDB
}

const handler = async (args: SheetsCommandArgs) => {
  const { db } = args
  const { activeSheetName, sheets } = db

  if (sheets.length === 0) {
    console.log(C.clText('No time sheets exist'))
    return
  }

  sheets.forEach((sheet: TimeSheet): void => {
    P.printSheetHeader(sheet, sheet.name === activeSheetName)
  })
}

export default {
  ...COMMAND_CONFIG,
  handler: U.cmdHandler(handler)
}
