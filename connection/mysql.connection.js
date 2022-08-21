const mysql=require('mysql');

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fincare'
})

connection.connect((err)=>{
    err?console.log(err.message):console.log("datatabse connected")
})

module.exports=connection;

