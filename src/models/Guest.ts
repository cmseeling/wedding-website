export interface Guest {
  Id: string;
  FirstName: string;
  LastName: string;
  GuestType: string;
  GroupId: string;
  Attending: string;
  Brunch: string|null;
  MenuChoice: string|null;
  DietaryNeeds: string|null;
}
