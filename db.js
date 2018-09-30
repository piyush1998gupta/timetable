var express = require('express');
var app = express();
//var popup = require('popups')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user : "timetable",
    password :"pgupta",
    database: "CollegeTable",
    multipleStatements: true
});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
connection.connect(function (err) {
    if (err)
        throw err;
    console.log("connected");

})



module.exports = {
    mysql,
    connection
}



const addquerys = require('./Routes/addquery')

app.use('/addquery',addquerys)

app.post('/myaction',(req,res)=>{
    var qcoursename,qteachername

    function quo (success){
        value = connection.query(
            "select CourseCode from AddCourse where CourseName = '"+req.body.qcoursename+"' ; select Teacher_Id from AddTeacher where Teacher_Name = '"+req.body.qteachername+"' " ,
            function (error, result, fields) {
                if (error) throw error;
               // console.log('The role is: ', result[0]);
                success (result);
            });
    }

    quo (function (role) {
         jk = JSON.parse(JSON.stringify(role))
        qcoursename = jk[0][0].CourseCode;
         qteachername = jk[1][0].Teacher_Id;
      //  console.log(jk[1][0].Teacher_Id);
        connection.query("INSERT INTO `MasterCseTable`(`Semester`, `Group_`, `Day`, `Start-Time`, `End-Time`, `RoomId`, `TeacherId`, `CourseCode`) VALUES ( '" + req.body.qsemesterselect +"','"+req.body.qclassgroup + "','"+req.body.qday+"','"+req.body.qstarttime+"','"+req.body.qendtime+"','"+req.body.qroom_no+"','"+qteachername+"','"+qcoursename+" ')",(err)=>{
            if (err) {
                //popup.alert("hello");
            }
            console.log("inserted")
        })

        /* do something useful with the role that came back from the query */
    })

})


    //



app.use("/", express.static(__dirname + "/public_static"));

    app.listen(8080,(err)=>{
    if(err)
    throw err;
    console.log("connected at port")
    })
