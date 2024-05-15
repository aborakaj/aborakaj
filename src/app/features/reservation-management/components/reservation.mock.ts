import { setHours, setMinutes, format, addMinutes } from "date-fns";

export interface ReservationMock {
  id: string;
  startTime: Date;
  endTime: Date;
  userId: string;
  spaceId: string;
  bookingTitle?: string;
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
  time: Date;
  label: string;
  disabled: boolean;
}

export const reservationMock: ReservationMock[] = [
  {
    id: '27112a85-4165-4dc4-83d9-bb4e8022344c',
    startTime: new Date('2024-05-14T09:00:00.000Z'),
    endTime: new Date('2024-05-14T15:00:00.000Z'),
    userId: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
    spaceId: 'f832d410-1709-4ffb-bd19-86e4fb4a9e50',
    bookingTitle: 'Daily Standup',
    createdBy: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
  },
  {
    id: 'f86a7a1b-1f11-4ce6-8fb7-d0c44cc415bc',
    startTime: new Date('2024-05-15T09:00:00.000Z'),
    endTime: new Date('2024-05-15T11:00:00.000Z'),
    userId: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
    spaceId: 'e1e164c2-851c-4803-b7cf-a382434f05ea',
    bookingTitle: 'Team Meeting',
    createdBy: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
  },
  {
    id: '3ebc0366-a887-474a-93d4-1998ffa0cb4f',
    startTime: new Date('2024-05-16T12:00:00.000Z'),
    endTime: new Date('2024-05-16T13:00:00.000Z'),
    userId: 'ewdd3416-1ca4-42f0-9444-eeff951f2c3e',
    spaceId: '1cb9b6c3-eaea-4ffd-86e4-1af47bdad064',
    bookingTitle: 'Client Call',
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

export const generateTimeSlots = (): TimeSlot[] => {
  const startHour = 8;
  const endHour = 18;
  const intervalMinutes = 30;
  let currentTime = setHours(new Date(), startHour);
  currentTime = setMinutes(currentTime, 0);

  const timesMock: TimeSlot[] = [];
  while (currentTime.getHours() < endHour || (currentTime.getHours() === endHour && currentTime.getMinutes() === 0)) {
    const timeLabel = format(currentTime, 'HH:mm');
    timesMock.push({
      time: new Date(currentTime),
      label: timeLabel,
      disabled: false
    });
    currentTime = addMinutes(currentTime, intervalMinutes);
  }

  return timesMock;
};

export const timesMock = generateTimeSlots();
