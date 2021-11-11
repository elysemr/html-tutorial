


const loaded = () => {
    document.getElementById("xid").value = user.id;
    document.getElementById("xusername").value = user.username;
    document.getElementById("xfirstname").value = user.firstname 
    document.getElementById("xlastname").value= user.lastname;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xisReviewer").value = user.isReviewer ? "Yes" : "No";
    document.getElementById("xisAdmin").value = user.isAdmin ? "Yes" : "No";
 
 }

