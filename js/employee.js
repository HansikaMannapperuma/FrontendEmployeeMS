getAllEmployees();
function saveEmployee(){
    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();
    $.ajax({
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
    let empId=$('#exampleFormControlInput1').val();
    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();
    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/updateEmployee",
        async:true,
        data:JSON.stringify({
            "empId":empId,
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
    let empId=$('#exampleFormControlInput1').val();

    $.ajax({
        method:"DELETE",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/deleteEmployee/"+empId,
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
    $.ajax({
        method:"GET",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/getAllEmployees",
        async:true,
        success:function (data){
            if (data.code==="00"){
                $('#empTable').empty();
                for (let emp of data.context){
                    let empId=emp.empId
                    let name=emp.empName
                    let address=emp.empAddress
                    let number=emp.empNumber

                    let row=`<tr><td>${empId}</td><td>${name}</td><td>${address}</td><td>${number}</td></tr>`;
                    $('#empTable').append(row);
                }
            }

        },
        error:function (xhr,exception){
            alert("Error")
        }
    })
}
$(document).ready(function () {
    $(document).on('click', '#empTable tr', function () {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);

    })
})