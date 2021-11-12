

const bool = (aBoolean) => {
    return aBoolean ? "YES" : "NO";

    }
    
    const remove = () => {
        console.log("Deleted data.");
    }

    const baseurl = "http://localhost:1215/api";
    //get ID off of url
    //http://localhost:5500/user-detail.html?id=1 <<what url is going to look like
    const getUrlId = () => {
        let url = window.location.href;
        console.log(url);
        let parts = url.split("?"); //breaks string into array, array forms after split char, 
                                    //split char erased
        console.log(parts);
        let kvpair = parts[1].split("=");
        console.log(kvpair);
        return +kvpair[1];
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

