import { Group } from '@/models/Group';
import axios from 'axios';
import * as _ from 'lodash';

const getGroupByGuestName = async (guestName: string): Promise<Group> => {
  const response = await axios.post('/.netlify/functions/getGroupByGuestName', {guestName});
  return response.data;
};

const getGroupById = async (groupId: string): Promise<Group> => {
  const response = await axios.post('/.netlify/functions/getGroupById', {groupId});
  return response.data;
};

const saveRsvps = async (group: Group) => {
  const response = await axios.post('/.netlify/functions/saveRsvps', group);
  return response.data;
};

export default {
  getGroupByGuestName,
  getGroupById,
  saveRsvps,
};
