
let vendor = {};

const getVendorByPk = () => {
    let id = getUrlId();
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:1215/api/vendors/${id}`, true);
    xhr.onload = () => {
        vendor = xhr.response;
        loaded();
    }
    xhr.send;
}

const loaded = () => {
document.getElementById("xid").innerHTML = vendor.id;
document.getElementById("xcode").innerHTML = vendor.code;
document.getElementById("xname").innerHTML = vendor.name;
document.getElementById("xaddress").innerHTML = vendor.address;
document.getElementById("xcity").innerHTML = vendor.city;
document.getElementById("xstate").innerHTML = vendor.state;
document.getElementById("xzip").innerHTML = vendor.zip;
document.getElementById("xphone").innerHTML = vendor.phone;
document.getElementById("xemail").innerHTML = vendor.email;

}