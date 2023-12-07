const monggose = require('mongoose');

const dbConnect = async () => {
    try{
        await monggose.connect('mongoURL');
        console.log("DB Connected Successfully");
    }catch(err){
        console.log("DB Connection failed", err.message)
    }
}

dbConnect()
