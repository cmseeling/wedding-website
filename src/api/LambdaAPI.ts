import axios from 'axios';
import { Guest } from '../models/Guest';

const getGroupByGuestName = async (firstName: string, lastName: string): Promise<Guest[]> => {
  const response = await axios.post('/.netlify/functions/getGroupByGuestName', {firstName, lastName});
  return response.data;
};

const getGroupById = async (groupid: string): Promise<Guest[]> => {
  const response = await axios.post('/.netlify/functions/getGroupById', {groupid});
  return response.data;
};

const saveRsvps = async (rsvps: any[]) => {
  const response = await axios.post('/.netlify/functions/saveRsvps', rsvps);
}

export default {
  getGroupByGuestName,
  getGroupById,
  saveRsvps
};
