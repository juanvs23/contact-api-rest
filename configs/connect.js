const mongoose = require('mongoose');

const connectionDB = async () => {
    try {
        const connected = await mongoose.connect('mongodb+srv://juanvs23:juan123!@coffe-test.n2yqc.mongodb.net/phonebook?retryWrites=true&w=majority');
        if(connected){
            console.log('Database connected');
        }
    } catch (error) {
        throw new Error("Falla al tratar de conectar la base de datos");
    }
}

module.exports= connectionDB;