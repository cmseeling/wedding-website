import axios from 'axios';
import * as _ from 'lodash';
import { Guest, GuestModel } from '../models/Guest';

const getGroupByGuestName = async (firstName: string, lastName: string): Promise<Guest[]> => {
  const response = await axios.post('/.netlify/functions/getGroupByGuestName', {firstName, lastName});
  const guests: Guest[] = _.map(response.data, convertToClientObject);
  return guests;
};

const getGroupById = async (groupid: string): Promise<Guest[]> => {
  const response = await axios.post('/.netlify/functions/getGroupById', {groupid});
  const guests: Guest[] = _.map(response.data, convertToClientObject);
  return guests;
};

const saveRsvps = async (rsvps: Guest[]) => {
  const dbData = _.map(rsvps, convertToDbObject);
  const response = await axios.post('/.netlify/functions/saveRsvps', dbData);
};

const convertToClientObject = (dbObject: GuestModel): Guest => {
  const guest: Guest = {
    Id: dbObject.Id,
    FirstName: dbObject.FirstName,
    LastName: dbObject.LastName,
    GuestType: dbObject.GuestType,
    GroupId: dbObject.GroupId,
    Attending: dbObject.Attending === 'Yes' ? true : dbObject.Attending === 'No' ? false : undefined,
    Brunch: dbObject.Brunch === 'Yes' ? true : dbObject.Brunch === 'No' ? false : undefined,
    DietaryNeeds: dbObject.DietaryNeeds,
  };

  switch (dbObject.MenuChoice) {
    default:
      guest.MenuChoice = undefined;
  }

  return guest;
};

const convertToDbObject = (clientObject: Guest): GuestModel => {
  const dbObject: GuestModel = {
    Id: clientObject.Id,
    FirstName: clientObject.FirstName,
    LastName: clientObject.LastName,
    GuestType: clientObject.GuestType,
    GroupId: clientObject.GroupId,
    Attending: clientObject.Attending === undefined ? 'No Response' : clientObject.Attending ? 'Yes' : 'No',
    MenuChoice: null,
    Brunch: clientObject.Brunch === undefined ? null : clientObject.Brunch ? 'Yes' : 'No',
    // protect against too long of a string
    DietaryNeeds: clientObject.DietaryNeeds ? clientObject.DietaryNeeds.substr(0, 200) : null,
  };

  switch (clientObject.MenuChoice) {
    default:
      dbObject.MenuChoice = null;
  }

  return dbObject;
};

export default {
  getGroupByGuestName,
  getGroupById,
  saveRsvps,
};
