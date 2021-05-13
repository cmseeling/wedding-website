import Reservation from './Reservation';

export interface Group {
  Id: number;
  GuestType: string;
  Addressees: string[];
  Attendees: Reservation[];
  DocType: string;
}
