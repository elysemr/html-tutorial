
let user = {};

const getUserByPK = () => {
    let id = getUrlId(); //function we just made in utility
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:1215/api/users/${id}`, true); //get by PK
    xhr.onload = () => {
        user = xhr.response;
        loaded();
    }
    xhr.send();
}

const loaded = () => {
    let url = getUrlId();

   document.getElementById("xid").innerHTML = user.id;
   document.getElementById("xusername").innerHTML = user.username;
   document.getElementById("xname").innerHTML = user.firstname + " " + user.lastname;
   document.getElementById("xemail").innerHTML = user.email;
   document.getElementById("xphone").innerHTML = user.phone;
   document.getElementById("xisReviewer").innerHTML = user.isReviewer ? "Yes" : "No";
   document.getElementById("xisAdmin").innerHTML = user.isAdmin ? "Yes" : "No";

}

//to avoid duplication above, create function to pass in id and value 

