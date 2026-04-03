 const usermodel = require('../Models/Usermodels')
 const {validemail, validname, validpassword} = require('../AllVelidation/authValidation')
 
 exports.createuser =async(req, res)=>{
    try{
        const data = req.body;
        const {name, email, password}= data;
        if(!name){
            return status(400).send({status:false, msg:'Name is reqired'})
        }
        if(validname(!name)){
            return status(400).send({status:false, msg:'Correct the name formate'})
        }
        if(!email){
            return status(400).send({status:false, msg:'Email is reqired'})
        }
        if(validemail(!email)){
            return status(400).send({status:false, msg:'Correct the email formate'})
        }
        if(!password){
            return status(400).send({status:false, msg:'Password is reqired'})
        }
        if(validpassword(!password)){
            return status(400).send({status:false, msg:'Correct the password formate'})
        }
        console.log(data);
        const db = await usermodel.create(data)
        res.status(200).send({status:true, msg:"Data Created Sucessfully", data:data})
    }
    catch(error){
        res.status(500).send({status:false, msg:"Data create failed", error:error.msg})
    }
 }