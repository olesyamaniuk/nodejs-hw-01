import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const rawData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(rawData);

    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
      console.log(`Successfully removed the last contact from ${PATH_DB}`);
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.log('Error removing the last contact:', error);
  }
};

removeLastContact();
