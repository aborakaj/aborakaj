let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export interface Reservation {
  id: string;
  title?: string;
  start: string;
  end?: string;
  display?: string;
  isEditable?: boolean;
  eventDisplay?: string;
  extendedProps?: {
    comment?: string;
    roomName: string;
  };
}

export const EVENTS: Reservation[] = [
  {
    id: createEventId(),
    title: 'Romeo Llangozi',
    start: TODAY_STR + 'T15:00:00',
    end: TODAY_STR + 'T17:00:00',
    extendedProps: {
      comment: 'Additional info ',
      roomName: 'HR Office',
    },
  },
  {
    id: createEventId(),
    title: 'Test User',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T13:00:00',
    isEditable: false,
    extendedProps: {
      comment: 'Additional info ',
      roomName: 'HR Office',
    },
  },
  {
    id: createEventId(),
    title: 'Ariel Borici',
    start: TODAY_STR + 'T11:00:00',
    end: TODAY_STR + 'T12:00:00',
    extendedProps: {
      comment: 'Additional info ',
      roomName: 'Design Office',
    },
  },
  {
    id: createEventId(),
    title: 'Fabio Hysollari',
    start: TODAY_STR + 'T10:00:00',
    end: TODAY_STR + 'T12:00:00',
    display: 'list-item',
    extendedProps: {
      comment: 'Additional info ',
      roomName: 'Design Office',
    },
  },
  {
    id: createEventId(),
    title: 'Berti User',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00',
    isEditable: false,
    extendedProps: {
      comment: 'Additional info ',
      roomName: 'Design Office',
    },
  },
  {
    id: createEventId(),
    title: 'Ariel Borici',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T01:00:00',
    extendedProps: {
      comment: 'Additional info ',
      roomName: 'HR Office',
    },
  },
];

export function createEventId() {
  return String(eventGuid++);
}
