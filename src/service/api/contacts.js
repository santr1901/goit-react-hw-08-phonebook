// import axios from 'axios';

import instance from './authentication';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContact = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};
