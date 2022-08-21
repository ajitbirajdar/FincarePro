const bcrypt=require('bcrypt');
const connection=require('../connection/mysql.connection');

module.exports ={
   getAll:(req, res) =>{
      connection.query('select * from dept where status =0',(err,result)=>{
         if(err){
             res.send({error:true,message:err.message})
         } else{
            res.send({error:false,data:result})
         }
      })
   },
   searchDept:(req, res) =>{
      let id=req.params.id;
      connection.query(`select * from dept where status =0 and  id=${id}`,(err,result)=>{
         if(err){
             res.send({error:true,message:err.message})
         } else{
            res.send({error:false,data:result})
         }
      })
   },
   createDept:(req,res)=>{
    
      const salt = bcrypt.genSaltSync(10);
      const hashCode = bcrypt.hashSync(req.body.Code, salt);


      connection.query(`INSERT INTO dept(Id, Name, Address, Code, Status, Descp) VALUES (0,'${req.body.Name}','${req.body.Address}','${hashCode}','${req.body.Status}','${req.body.Descp}')`,(err,result)=>{
         if(err){
            res.send({error:true,message:err.message})
        } else{
         if(result.affectedRows>0){
            res.send({error:false,message:"recored created"})
           }else{
            res.send({error:false,message:"recored not created"})
           }
        
        } 
      })
   },

   updateDept:(req,res)=>{
      let id=req.params.id;
      connection.query(`UPDATE dept SET Address='${req.body.Address}' Descp='${req.body.Descp}' WHERE Id=${id} `,(err,result)=>{
         if(err){
            res.send({error:true,message:err.message})
        } else{

         if(result.affectedRows>0){
            res.send({error:false,message:"recored  Updated"})
           }else{
            res.send({error:false,message:"recored  not Updated"})
           }
        } 
      })
   },

   ActiveORdeactiveDept:(req,res)=>{
      let id=req.params.id;
      let status=req.body.Status;//0 / 1
      connection.query(`UPDATE dept SET Status=${status} WHERE Id=${id} `,(err,result)=>{
         if(err){
            res.send({error:true,message:err.message})
        } else{
           if(result.affectedRows>0){
            res.send({error:false,message:"recored status Updated"})
           }else{
            res.send({error:false,message:"recored status not Updated"})
           }
        } 
      })
   }
}
