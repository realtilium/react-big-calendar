import React from 'react'
import Month from './Month'
import Week from './Week'
import Day from './Day'
import Agenda from './Agenda'
import WorkWeek from './WorkWeek'
import { dequal } from 'dequal'

function withStatics(Wrapped, Source) {
  ;['title', 'navigate', 'range'].forEach((k) => {
    if (Source[k]) Wrapped[k] = Source[k]
  })
  return Wrapped
}

function normalizeDay(date) {
  if (!(date instanceof Date)) return date
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

const areEqual = (prev, next) => {
  return (
    dequal(prev.events, next.events) &&
    dequal(prev.backgroundEvents, next.backgroundEvents) &&
    normalizeDay(prev.date) === normalizeDay(next.date)
  )
}

export default {
  month: withStatics(React.memo(Month, areEqual), Month),
  week: withStatics(React.memo(Week, areEqual), Week),
  day: withStatics(React.memo(Day, areEqual), Day),
  agenda: withStatics(React.memo(Agenda, areEqual), Agenda),
  work_week: withStatics(React.memo(WorkWeek, areEqual), WorkWeek),
}
