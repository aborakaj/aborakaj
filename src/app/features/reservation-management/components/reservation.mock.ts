export interface ReservationMock {
  id: string;
  startTime: string;
  endTime: string;
  userId: string;
  spaceId: string;
  bookingTitle: string;
  createdBy: string;
}

export interface Space {
  id: string;
  name: string;
  capacity: number;
  location: string;
  action: string;
  floorId: string;
}

export interface TimeSlot {
  time: string;
  disabled: boolean;
}

export const reservationMock: ReservationMock[] = [
  {
    id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    startTime: '2024-04-23T09:00:00.000Z',
    endTime: '2024-04-23T15:00:00.000Z',
    userId: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
    spaceId: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    bookingTitle: 'Daily Standup',
    createdBy: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
  },
  {
    id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    startTime: '2024-04-24T13:00:00.000Z',
    endTime: '2024-04-24T14:00:00.000Z',
    userId: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
    spaceId: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    bookingTitle: 'Daily Standup',
    createdBy: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
  },
];

export const spacesMock: Space[] = [
  {
    id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    name: 'Intern Room',
    capacity: 5,
    location: 'Next to play area',
    action: 'AVAILABLE',
    floorId: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
  },
  {
    id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    name: 'Executive Boardroom',
    capacity: 12,
    location: 'Top Floor',
    action: 'BOOKED',
    floorId: '8fb2cde4-8bfc-41f8-ac6e-4b985d9e2a9b',
  },
  {
    id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    name: 'Small Meeting Room',
    capacity: 4,
    location: 'Second Floor - North Wing',
    action: 'AVAILABLE',
    floorId: 'a3cddf11-e8b4-4d7e-a918-e14b3f6a4f03',
  },
  {
    id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    name: 'Meeting Room -2',
    capacity: 8,
    location: 'Third Floor',
    action: 'AVAILABLE',
    floorId: 'bbcb1c76-45ab-4e93-bc88-af9f89f50a3f',
  },
  {
    id: 'cdcc9416-1ca4-42f0-9444-eeff951f2c3e',
    name: 'Creative Lounge',
    capacity: 10,
    location: 'Fourth Floor - South Wing',
    action: 'BOOKED',
    floorId: 'f1c4f024-ef3b-4b53-9d8b-422d3f690c18',
  },
];

export const timesMock: TimeSlot[] = [
  {
    time: '08:00',
    disabled: false,
  },
  {
    time: '08:30',
    disabled: false,
  },
  {
    time: '09:00',
    disabled: false,
  },
  {
    time: '09:30',
    disabled: false,
  },
  {
    time: '10:00',
    disabled: false,
  },
  {
    time: '10:30',
    disabled: false,
  },
  {
    time: '11:00',
    disabled: false,
  },
  {
    time: '11:30',
    disabled: false,
  },
  {
    time: '12:00',
    disabled: false,
  },
  {
    time: '12:30',
    disabled: false,
  },
  {
    time: '13:00',
    disabled: false,
  },
  {
    time: '13:30',
    disabled: false,
  },
  {
    time: '14:00',
    disabled: false,
  },
  {
    time: '14:30',
    disabled: false,
  },
  {
    time: '15:00',
    disabled: false,
  },
  {
    time: '15:30',
    disabled: false,
  },
  {
    time: '16:00',
    disabled: false,
  },
  {
    time: '16:30',
    disabled: false,
  },
  {
    time: '17:00',
    disabled: false,
  },
  {
    time: '17:30',
    disabled: false,
  },
  {
    time: '18:00',
    disabled: false,
  },
];
