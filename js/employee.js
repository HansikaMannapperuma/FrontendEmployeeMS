getAllEmployees()
function saveEmployee(){
    let name=$('exampleFormControlInput2').val();
    let address=$('exampleFormControlInput3').val();
    let number=$('exampleFormControlInput4').val();
    $.ajax(e,{
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/saveEmployee",
        async:true,
        data:JSON.stringify({
            "empId":"",
            "empName":name,
            "empAddress":address,
            "empNumber":number

        }),
        success:function (data){
            alert("saved")
            getAllEmployees()
        },
        error:function (xhr,exception){
            alert("Error")
        }
    })
}

function updateEmployee(){
    let empId=$('exampleFormControlInput1').val();
    let name=$('exampleFormControlInput2').val();
    let address=$('exampleFormControlInput3').val();
    let number=$('exampleFormControlInput4').val();
    $.ajax(e,{
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/updateEmployee",
        async:true,
        data:JSON.stringify({
            "empId":id,
            "empName":name,
            "empAddress":address,
            "empNumber":number

        }),
        success:function (data){
            alert("updated")
            getAllEmployees()
        },
        error:function (xhr,exception){
            alert("Error")
        }
    })
}

function deleteEmployee(){
    let empId=$('exampleFormControlInput1').val();

    $.ajax(e,{
        method:"DELETE",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/deleteEmployee"+empId,
        async:true,
        success:function (data){
            alert("deleted")
            getAllEmployees()
        },
        error:function (xhr,exception){
            alert("Error")
        }
    })
}

function getAllEmployees(){
    $.ajax(e,{
        method:"GET",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/getAllEmployees",
        async:true,
        success:function (data){
            if (data.code=="00"){
                $('#empTable').empty();
                for (let emp of data.content){
                    let empId=emp.empId
                    let name=emp.empName
                    let address=emp.empAddress
                    let number=emp.empNumber

                    var row="<tr><td>${empId}</td><td>${name}</td><td>${address}</td>${number}<td></td></tr>";
                    $('#empTable').append(row);
                }
            }
            alert("deleted")
        },
        error:function (xhr,exception){
            alert("Error")
        }
    })
}