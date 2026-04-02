 const usermodel = require('../Models/Usermodels')
 
 exports.createuser =(req, res)=>{
    try{
        const data = req.body;
        const {name, email, password}= data;
        console.log(data);
        const db = usermodel.create(data)
        res.status(200).send({status:true, msg:"Data Created Sucessfully", data:data})
    }
    catch(error){
        res.status(500).send({status:false, msg:"Data create failed", error:error.msg})
    }
 }