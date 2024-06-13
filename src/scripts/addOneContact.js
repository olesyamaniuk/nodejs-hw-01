import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {

        try{
            const existingData = await fs.readFile(PATH_DB, 'utf-8');
            const parseData = JSON.parse(existingData);
            const updateData = createFakeContact();
            parseData.push(updateData);
            const updateJsonFile = JSON.stringify(parseData, null, 2);
            await fs.writeFile(PATH_DB, updateJsonFile, 'utf-8');
            console.log(`Successfully added one contact and saved tp ${PATH_DB}`);
        }catch(error){
        console.log('Error adding one contact:', error);
    }
};

addOneContact();
