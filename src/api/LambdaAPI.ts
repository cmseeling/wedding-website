import axios from 'axios';

const getGroup = async (firstName: string, lastName: string) => {
  const response = await axios.post('/.netlify/functions/getGroup', {firstName, lastName});
  return response.data;
};

const saveRsvps = async (rsvps: any[]) => {
  const response = await axios.post('/.netlify/functions/saveRsvps', rsvps);
}

export default {
  getGroup,
  saveRsvps
};
