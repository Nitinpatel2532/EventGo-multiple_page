
    
async function UserCollectInfo() {
    let UserInfo = await fetch("http://localhost:3000/ user_booking")
    let final_userInfo = await UserInfo.json()

    let userdata = final_userInfo.map((e) => `
                       
    <tr>
    <td> ${e.id}</td>
    <td> ${e.user_name} </td>
    <td> ${e.user_email} </td>
    <td> ${e.user_contact} </td>
     <td> ${e.user_age} </td>
    <td> ${e.movie_name} </td>
    <td> ${e.user_ticket_type} </td>
    <td> ${e.user_ticket_price} </td>
    <td> ${e.user_total_quantity} </td>
     <td> ${e.user_total_pay} </td>
     <td> <button onclick="delete_user_data('${e.id}') ">Delete</button>
<td> <button onclick="edit_user_data('${e.id}')"> Edit </button>
    </tr>

    `).join("")

    document.querySelector("#collect_user_info").innerHTML = userdata;
    
    // console.log(final_userInfo)

}
UserCollectInfo()

// delete Specific Data by Admin.........

function delete_user_data(id) {
    fetch(`http://localhost:3000/ user_booking/${id}`, {
        method:"DELETE"
    })
    .then(r=>alert("Deleted Sucessfully........"))
}


// Edit user specific data and reflect changes in database

async function edit_user_data(id) {
    let editdata = await fetch(`http://localhost:3000/ user_booking/${id}`)
    let edit = await editdata.json()

    let frm = `
    <label for="userid">UserId</label>
    <input type="text"  value="${edit.id}" id="userid" readonly> <br><br>

    <label for="userid">UserName</label>
    <input type="text"  value="${edit.user_name}" id="username"> <br><br>

    <label for="userid">UserEmail</label>
    <input type="text"  value="${edit.user_email}" id="useremail"> <br><br>

    <label for="userid">UserContact</label>
    <input type="text"  value="${edit.user_contact}" id="usercontact"> <br><br>

    <label for="userid">UserAge</label>
    <input type="text"  value="${edit.user_age}" id="userage"> <br><br>

    <label for="userid">Ticket_price</label>
      <input type="text"  value="${edit.user_ticket_price}" id="userticketprice" readonly> <br><br>

      <label for="userid">Ticket_type</label>
        <input type="text"  value="${edit.user_ticket_type}" id="usertickettype" readonly> <br><br>

        <label for="userid">ticket_quantity</label>
          <input type="text"  value="${edit.user_total_quantity}" id="userticketquantity" readonly> <br><br>

          <label for="userid">Total_Amount</label>
            <input type="text"  value="${edit.user_total_pay}" id="usertotalpay" readonly> <br><br>

            <label for="userid">MovieName</label>
            <input type="text"  value="${edit.movie_name}" id="usermoviename" readonly> <br><br>
    <input type="submit" name="" id="usersubmitbtn" onclick="updatedata('${edit.id}')">

    `
    document.querySelector("#edituserform").innerHTML = frm;
    // console.log(edit);
    
    
}

function updatedata(id) {
    let updated_data = {
        id: document.querySelector("#userid").value,
        user_name: document.querySelector("#username").value,
        user_email: document.querySelector("#useremail").value,
        user_contact: document.querySelector("#usercontact").value,
        user_age: document.querySelector("#userage").value,
        user_ticket_price: document.querySelector("#userticketprice").value,
        user_ticket_type: document.querySelector("#usertickettype").value,
        user_total_quantity: document.querySelector("#userticketquantity").value,
        user_total_pay: document.querySelector("#usertotalpay").value,
        movie_name: document.querySelector("#usermoviename").value       
    }
    fetch(`http://localhost:3000/ user_booking/${id}`, {
        method: "PUT",
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(updated_data)
    })
        .then(t => alert("update successfully"))
    
}



