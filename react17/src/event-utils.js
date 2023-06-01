
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Timed event2',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Timed event3',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Timed event4',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'event1',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'event2',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'event3',
    start: todayStr
  }
]

export function createEventId() {
  return String(eventGuid++)
}
