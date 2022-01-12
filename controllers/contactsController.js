const ContactsSchema= require("../models/contactsModel"),
      responseSuccess = require("../helpers/response-sucess"),
      responseErrors = require("../helpers/response-errors");

class ContactsController{
    _constructor(){
        this.firstName;
        this.lastName;
        this.email;
        this.phone;
    }
    async newContact(req,res){
        const {firstName,lastName,email,phone}=req.body;
        let contactData ={firstName,lastName,email,phone}
        let contact=new ContactsSchema(contactData);
        const newContact = await contact.save(); 
        
        if (newContact) {
            return responseSuccess(res, 200,{msg:"Contacto creado",data:newContact});            
        }
    }
    async getContact(req,res){
        const getContact=await ContactsSchema.find();
        return responseSuccess(res, 200,{msg:"Lista de contactos",data:getContact});
    }
    async updateContact(req,res){
        const {firstName,lastName,email,phone}=req.body;
        const {id}=req.params;
        const updateContact=await ContactsSchema.findByIdAndUpdate(id,{firstName,lastName,email,phone}, { new: true });
        if (updateContact) {
            return responseSuccess(res, 200,{msg:"Contacto actualizado",data:updateContact});
        }
    }
    async deleteContact(req,res){
        const {id}=req.params;
        const deleteContact=await ContactsSchema.findByIdAndDelete(id);
        if (deleteContact) {
            return responseSuccess(res, 200,{msg:"Contacto eliminado",data:deleteContact});
        }
    }

}

module.exports= ContactsController;