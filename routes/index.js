const express = require("express"),
  router = express.Router(),
  Contacts = require("./contact.routes"),
  contacts = new Contacts(router);

const contactsRoutes = () => {
  contacts.createContact()
  contacts.getContact()
  contacts.updateContact()
  contacts.deleteContact()  
  return router;
};


module.exports = {
  contactsRoutes
}; 
