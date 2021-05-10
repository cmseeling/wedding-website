export default interface Reservation {
  Id: number;
  DocumentId: string;
  FirstName: string;
  LastName: string;
  GroupId: string;
  GuestType: string;
  Attending: boolean;
  Brunch: boolean;
  MenuChoice: string;
  DietaryNeeds: string;
  DocType: string;
}
