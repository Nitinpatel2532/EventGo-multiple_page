// form validation styling field with js

let name2 = document.querySelector("#username1");
let email2 = document.querySelector("#email1");
let contact2 = document.querySelector("#Contact1");
let password2 = document.querySelector("#password1");
let repasswod2 = document.querySelector("#repassword");

document.querySelector("#username1").addEventListener("focus", () => {
    name2.style.backgroundColor = "lime";
})
document.querySelector("#username1").addEventListener("blur", () => {
    name2.style.backgroundColor = "";
})


document.querySelector("#email1").addEventListener("focus", () => {
    email2.style.backgroundColor = "lime";
})
document.querySelector("#email1").addEventListener("blur", () => {
    email2.style.backgroundColor = "";
})


document.querySelector("#Contact1").addEventListener("focus", () => {
    contact2.style.backgroundColor = "lime";
})
document.querySelector("#Contact1").addEventListener("blur", () => {
    contact2.style.backgroundColor = "";
})

document.querySelector("#password1").addEventListener("focus", () => {
    password2.style.backgroundColor = "lime";
})
document.querySelector("#password1").addEventListener("blur", () => {
    password2.style.backgroundColor = "";
})

document.querySelector("#repassword").addEventListener("focus", () => {
    repasswod2.style.backgroundColor = "lime";
})
document.querySelector("#repassword").addEventListener("blur", () => {
    repasswod2.style.backgroundColor = "";
})
    

// check user data is valid or not.......

const store_data = () => {

    let name1 = document.querySelector("#username1").value;
let email1 = document.querySelector("#email1").value;
let contact1 = document.querySelector("#Contact1").value;
let password1 = document.querySelector("#password1").value;
    let repasswod1 = document.querySelector("#repassword").value;

   

    if (name1 == "" || email1 == "" || contact1 == "" || password1 == "" || repasswod1 == "") {
        alert("All fields are mandoratory...");
        return false;
    } else if (!(email1.match(/[@.]/))) {
        alert("Email is not valid..")
        document.querySelector("#email1").focus();
        return false;
    } else if (contact1.length < 10 || contact1.length > 10) {
        alert("Contact length must be of 10 digit..")
        document.querySelector("#Contact1").focus()
       
        return false;
    } else if (isNaN(contact1)) {
        alert("Only numbers are allowed")
        document.querySelector("#Contact1").focus()
        return false;
    } else if (password1.length < 8) {
        alert("please create strong password (max-8 digit)")
        document.querySelector("#password1").focus()
        return false;
    }
    else if (password1 != repasswod1) {
        alert("password must be same...");
        document.querySelector("#password1").focus()
        return false;
    }

    else {

        let user_data = {
            username:name1,
            email:email1,
            contact: contact1,
            password: password1,
            repasswod:repasswod1
        }
        let bool = confirm("Do you want to save this information in browser local storage.")
        if (bool == true) {

            // if condition is true store in local storage.......
            localStorage.setItem("Data",JSON.stringify(user_data))
        }
    }

    return true;
    }
    

   