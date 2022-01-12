const { check } = require("express-validator");
const ContactsController =require("../controllers/contactsController");
const contacts = new ContactsController();
const { validateFields,checkId }=require('../middleware/validate-fields');
class Contacts{
    constructor(router){
        this.router = router;
    }
    createContact(){
        this.router.post('/create',[
            check("firstName", "campo nombre requerido").notEmpty(),
            check("lastName", "campo apellido requerido").notEmpty(),
            check("email", "formato de correo incorrecto").isEmail(),
            check("email", "campo  correo requerido").notEmpty(),
            check("phone", "campo telefono requerido").notEmpty(),
            validateFields
        ],contacts.newContact);
    }
    getContact(){
        this.router.get('/list',contacts.getContact);
    }
    updateContact(){
        this.router.put('/update/:id',[
            check("id", "No es un id valido").isMongoId(),
            check('id','El usuario no existe').custom(checkId),
            validateFields
        ],contacts.updateContact);
    }
    deleteContact(){
        this.router.delete('/delete/:id',contacts.deleteContact);
    }
} 
 
module.exports = Contacts;