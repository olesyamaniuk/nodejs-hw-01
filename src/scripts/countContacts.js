import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts.length;
};

(async () => {
    try {
        const count = await countContacts();
        console.log(`Total number of contacts: ${count}`);
    } catch (error) {
        console.error('Error counting contacts:', error);
    }
})();
