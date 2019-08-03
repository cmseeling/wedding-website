export interface GuestModel {
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

export interface Guest {
  Id: string;
  FirstName: string;
  LastName: string;
  GuestType: string;
  GroupId: string;
  Attending?: boolean;
  Brunch?: boolean;
  MenuChoice?: number;
  DietaryNeeds: string|null;
}
