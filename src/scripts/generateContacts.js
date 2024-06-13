import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try{
        const data = [];
        for (let i = 0; i < number; i++) {
            data.push(createFakeContact());
        }
        const jsonFile = JSON.stringify(data, null, 2);
        try{
            await fs.access(PATH_DB);
            const existingData = await fs.readFile(PATH_DB, 'utf-8');
            const parseData = JSON.parse(existingData);
            const updateData = [...parseData, ...data];
            const updateJsonFile = JSON.stringify(updateData, null, 2);
            await fs.writeFile(PATH_DB, updateJsonFile, 'utf-8');
        }catch{
            await fs.writeFile(PATH_DB, jsonFile, 'utf-8');
        }
        console.log(`Successfully wrote ${number} contacts to ${PATH_DB}`);
    }catch(error){
        console.log('Error generating contacts:', error);
    }
};

generateContacts(5);
