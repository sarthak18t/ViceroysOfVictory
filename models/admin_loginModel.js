const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
        name :{
            type : String,
            required : true,
        },
        email :{
            type: String,
            required : true,
            trim : true,
            validate(value){
                const email = value;
                const validateEmail_1 ="@iiitvadodara.ac.in";
                const validateEmail_2 ="@iiitv.ac.in";
                if(email.includes(validateEmail_1) ||
                email.includes(validateEmail_2)){
                    console.log("Email valid");
                }
                else{
                    throw new Error("Email not valid");
                }
            }
        },
        password : {
            type : String,
            required : true,
        },
        tokens : [
            {
                tokens : String,
            }
        ],
})

adminSchema.methods.toJSON = function (){
    const admin = this;
    const adminObj = admin.toObject();
    delete adminObj.tokens;
    return adminObj
}

const adminModel = mongoose.model("admin",adminSchema);

module.exports = adminModel