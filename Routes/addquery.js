const route = require('express').Router()

const {connection} = require('../db')

route.get('/roomid',(req,res)=>{

    connection.query("select * from  AddRoom",(err,data)=>{
        if(err)
            throw err;
        res.send(data);
    })
})
route.get('/teachername',(req,res)=>{

    connection.query("select * from  AddTeacher",(err,data)=>{
        if(err)
            throw err;
        res.send(data);
    })
})
route.get('/coursename',(req,res)=>{

    connection.query("select * from  AddCourse",(err,data)=>{
        if(err)
            throw err;
        res.send(data);
    })
})



module.exports = route;