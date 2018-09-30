
$(function () {
var roomtype;
    // $("#qroomtype").change(()=>
    // {
    //      roomtype = $("#qroomtype").val();
    //     console.log(roomtype);
    //     return roomtype;
    // }
    // ).then( (x)=>{
    //     get('/addquery/roomid',(data)=>{
    //     console.log(data);
    //
    //     for(i=0;i<data.length;i++){
    //         if(data[i].Room_Type == x){
    //             console.log("ghs")
    //         $("#qroom_no").append(
    //             $("<option>").text(data[i].Room_ID)
    //         )
    //     }
    //     }
    //
    // })},(reason)=>{
    //         console.log("reject")
    //     }
    // )

    $('#dataentry').submit(function() {
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),

            success: function(data) {
                $('#result').html(data);
            }
        })
        return false;
    });


        $.get('/addquery/roomid',(data)=>{
        console.log(data);

        for(i=0;i<data.length;i++){

            $("#qroom_no").append(
                $("<option>").text(data[i].Room_ID)
            )
        }


    })





    // $.get('/addquery/roomid',(data)=>{
    //    console.log(data);
    //
    //     for(i=0;i<data.length;i++){
    //         $("#qroom_no").append(
    //             $("<option>").text(data[i].Room_ID)
    //         )
    //     }
    // })
    $.get('/addquery/coursename',(data)=>{
     //   console.log(data);

        for(i=0;i<data.length;i++){
            $("#qcoursename").append(
                $("<option>").text(data[i].CourseName)
            )
        }
    })

    $("#qadd").click(()=>{
        console.log('button clicked')
        $.post('/myaction',(data)=>{
            console.log(data);
        })
    })

    $.get('/addquery/teachername',(data)=>{


        for(i=0;i<data.length;i++){
            $("#qteachename").append(
                $("<option>").text(data[i].Teacher_Name)
            )
        }
    })


})
// function get(idname) {
//     var sed = document.getElementById(idname);
//     console.log(sed.value);
// }