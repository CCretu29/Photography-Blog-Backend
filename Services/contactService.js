const Contact = require('../Modules/contact');

class ContactService {
  async createContact(contactData) {
    try {
      const contact = new Contact(contactData);
      return await contact.save();
    } catch (error) {
      throw new Error(`Error creating contact: ${error.message}`);
    }
  }

  async getAllContacts() {
    try {
      return await Contact.find().sort({ createdAt: -1 });
    } catch (error) {
      throw new Error(`Error fetching contacts: ${error.message}`);
    }
  }
}

module.exports = new ContactService();
