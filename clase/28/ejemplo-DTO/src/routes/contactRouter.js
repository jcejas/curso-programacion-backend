import {Router} from 'express';
import Contacts from '../dao/mongo/contactsMongo.js';
import ContactDTO from '../dao/DTOs/contactDTO.js';

const router = Router();
const contactsService = new Contacts();

router.get('/', async (req, res) => {
    const contacts = await contactsService.get();
    res.send({
        status: 'success',
        payload: contacts
    });
});

router.post('/', async (req, res) => {
    const contact = new ContactDTO(req.body);
    const result = await contactsService.insert(contact);
    res.send({
        status: 'success',
        payload: result
    });
});

export default router;