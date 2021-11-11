
let users = []

const getAllUsers = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://localhost:1215/api/users", true);
    xhr.onload = () => {
        user = xhr.response;
        loaded(user); //what happens when data comes back from response (array of obj and users)
        //stores array in users and then passes users into loaded function
    }
    xhr.send();
}

const loaded = (users) => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let user of users) {
    let tr = "<tr>";
    tr += `<td>${user.id}</td>`;
    tr += `<td>${user.username}</td>`;
    tr += `<td>${user.firstname}</td>`;
    tr += `<td>${user.lastname}</td>`;
    tr += `<td>${user.email}</td>`;
    tr += `<td>${user.phone}</td>`;
    tr += `<td>${user.isReviewer}</td>`;
    tr += `<td>${user.isAdmin}</td>`;
    tr += `<td><a href="user-detail.html?id=${user.id}">Detail</a> | <a href="user-edit.html?id=${user.id}">Edit<a/></td>`;
    tr += "</tr>";
    tbody.innerHTML += tr;
} 
}



/* class User {
id;
username;
password;
firstname;
lastname;
email;
phone;
isReviewer;
isAdmin;
constructor(id, username, password, firstname, lastname, email, phone, isReviewer, isAdmin) {

    this.id = id;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.isReviewer = isReviewer;
    this.isAdmin = isAdmin;
} */
   /* newUser() {
        let tr = "<tr>";
        tr += `<td>${this.id}</td>`;
        tr += `<td>${this.username}</td>`;
        tr += `<td>${this.password}</td>`;
        tr += `<td>${this.firstname}</td>`;
        tr += `<td>${this.lastname}</td>`;
        tr += `<td>${this.email}</td>`;
        tr += `<td>${this.phone}</td>`;
        tr += `<td>${this.isReviewer}</td>`;
        tr += `<td>${this.isAdmin}</td>`;
        tr += "</tr>";
        return tr;
    } 
  */  
 