//  compare data (username or password) with local storage that is stored by signup page.
// if data is matches then reach on another page else show error..

check_data = () => {

    let uname = document.querySelector("#username1").value
    let upassword = document.querySelector("#password1").value

    // get all data from local storage in its original form......
    
    let signup_data = JSON.parse(localStorage.getItem("Data"))

    if (uname != signup_data.username || upassword != signup_data.password) {
        alert("Incorrect Username or password !")
        return false;
    } else {
        return true;
    }
    
 console.log(signup_data)
    


    
}
