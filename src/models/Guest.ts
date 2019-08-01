export interface Guest {
  id: string;
  firstname: string;
  lastname: string;
  guesttype: string;
  groupid: string;
  attending: string;
  brunch: string|null;
  menuchoice: string|null;
  dietaryneeds: string|null;
}
