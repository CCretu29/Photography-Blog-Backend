const contactService = require('../Services/contactService');

class ContactController {
  async submitContact(req, res) {
    try {
      const newContact = await contactService.createContact(req.body);
      res.status(201).json({ message: 'Contact form submitted successfully', contact: newContact });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllContacts(req, res) {
    try {
      const contacts = await contactService.getAllContacts();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ContactController();
