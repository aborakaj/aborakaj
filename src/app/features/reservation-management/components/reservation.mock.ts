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
    id: '27112a85-4165-4dc4-83d9-bb4e8022344c',
    startTime: '2024-04-29T09:00:00.000Z',
    endTime: '2024-04-29T15:00:00.000Z',
    userId: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
    spaceId: 'f832d410-1709-4ffb-bd19-86e4fb4a9e50',
    bookingTitle: 'Daily Standup',
    createdBy: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
  },
  {
    id: 'f86a7a1b-1f11-4ce6-8fb7-d0c44cc415bc',
    startTime: '2024-04-30T09:00:00.000Z',
    endTime: '2024-04-30T11:00:00.000Z',
    userId: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
    spaceId: 'e1e164c2-851c-4803-b7cf-a382434f05ea',
    bookingTitle: 'Daily Standup',
    createdBy: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
  },
  {
    id: '3ebc0366-a887-474a-93d4-1998ffa0cb4f',
    startTime: '2024-04-30T12:00:00.000Z',
    endTime: '2024-04-30T13:00:00.000Z',
    userId: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
    spaceId: '1cb9b6c3-eaea-4ffd-86e4-1af47bdad064',
    bookingTitle: 'Daily Standup',
    createdBy: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
  },
];

export const spacesMock: Space[] = [
  {
    id: 'e1e164c2-851c-4803-b7cf-a382434f05ea',
    name: 'Intern Room',
    capacity: 5,
    location: 'Next to play area',
    action: 'AVAILABLE',
    floorId: 'ayfc9416-1ca4-42f0-9444-eeff951f2c3e',
  },
  {
    id: 'f832d410-1709-4ffb-bd19-86e4fb4a9e50',
    name: 'Executive Boardroom',
    capacity: 12,
    location: 'Top Floor',
    action: 'BOOKED',
    floorId: '8fb2cde4-8bfc-41f8-ac6e-4b985d9e2a9b',
  },
  {
    id: '1cb9b6c3-eaea-4ffd-86e4-1af47bdad064',
    name: 'Small Meeting Room',
    capacity: 4,
    location: 'Second Floor - North Wing',
    action: 'AVAILABLE',
    floorId: 'a3cddf11-e8b4-4d7e-a918-e14b3f6a4f03',
  },
  {
    id: '9c968041-c132-40e3-aab0-6591f4e05f7e',
    name: 'Meeting Room -2',
    capacity: 8,
    location: 'Third Floor',
    action: 'AVAILABLE',
    floorId: 'bbcb1c76-45ab-4e93-bc88-af9f89f50a3f',
  },
  {
    id: '1e3810ec-6922-4e24-bae6-9a25bb16cc61',
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
