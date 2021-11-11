let user = {
    id: 1, username: "dschrute", password: "12345", firstname: "Dwight", lastname: "Schrute",
    phone: "570-555-1234", email: "dschrute@dundermifflin.com", isReviewer: true, isAdmin: false
};

const loaded = () => {
    document.getElementById("xid").value = user.id;
    document.getElementById("xusername").value = user.username;
    document.getElementById("xpassword").value = user.password;
    document.getElementById("xpassword2").value = user.password;
    document.getElementById("xfirstname").value = user.firstname 
    document.getElementById("xlastname").value= user.lastname;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xisReviewer").checked = user.isReviewer;
    document.getElementById("xisAdmin").checked = user.isAdmin;
 
 }

 const save = () => {
    let user = {}; //empty object
    user.id = +document.getElementById("xid").value;
    user.username = document.getElementById("xusername").value;
    user.password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if(user.password !== password2) {
        return;
    }
    user.firstname = document.getElementById("xfirstname").value;
    user.lastname = document.getElementById("xlastname").value;
    user.email = document.getElementById("xemail").value;
    user.phone = document.getElementById("xphone").value;
    user.isReviewer = document.getElementById("xisReviewer").checked;
    user.isAdmin = document.getElementById("xisAdmin").checked;
    console.log(user); //so we can make sure the user data is correct
    window.location.href="db-practice.html";
 }

 const chkPassword = () => {
    let password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if (password !== password2) {
        alert("Passwords don't match")
        password = document.getElementById("xpassword").value = "";
        password2 = document.getElementById("xpassword2").value = "";
    }
    
 }