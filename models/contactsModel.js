const { Schema, model } = require("mongoose");

/**
 *      "firstName": String,
        "lastName": String,
        "email": Strng,
        "phone": String,
 * 
 */

const ContactsSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Nombre requerido"],
    },
    lastName: {
        type: String,
        required: [true, "Apellido requerido"],
    },
    email: {
        type: String,
        required: [true, "Correo requerido"],
    },
    phone: {
        type: String,
        required: [true, "Telefono requerido"],
    },
});
//metodos personalizados
ContactsSchema.methods.toJSON = function () {
    let { __v,  _id, ...contact } = this.toObject();
    contact.uid = _id;
    return contact;
  };

module.exports= model("Contacts", ContactsSchema);
