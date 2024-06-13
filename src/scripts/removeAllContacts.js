import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
        console.log(`Successfully removed all contacts from ${PATH_DB}`);
    } catch (error) {
        console.log('Error removing all contacts:', error);
    }
};

removeAllContacts();
