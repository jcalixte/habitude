import { Periodicity } from '@/data/constants/Periodicity.constant'
import {
  startOfDay,
  startOfWeek,
  startOfMonth,
  startOfYear,
  endOfDay,
  endOfWeek,
  endOfMonth,
  endOfYear
} from 'date-fns'

const getStartOfPeriodicity = (periodicity: Periodicity, date: Date) => {
  switch (periodicity) {
    case 'daily':
      return startOfDay(date)
    case 'weekly':
      return startOfWeek(date, {
        weekStartsOn: 1
      })
    case 'monthly':
      return startOfMonth(date)
    case 'yearly':
      return startOfYear(date)
  }
}

const getEndOfPeriodicity = (periodicity: Periodicity, date: Date) => {
  switch (periodicity) {
    case 'daily':
      return endOfDay(date)
    case 'weekly':
      return endOfWeek(date, {
        weekStartsOn: 1
      })
    case 'monthly':
      return endOfMonth(date)
    case 'yearly':
      return endOfYear(date)
  }
}

export const getRangeOfPeriodicity = (
  periodicity: Periodicity,
  date: Date
): [Date, Date] => [
  getStartOfPeriodicity(periodicity, date),
  getEndOfPeriodicity(periodicity, date)
]
