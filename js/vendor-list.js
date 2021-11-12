
let vendors = []

const getAllVendors = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://localhost:1215/api/vendors", true);
    xhr.onload = () => {
        vendor = xhr.response;
        loaded(vendor);
    }
    xhr.send();
}

const loaded = (vendors) => {
let tbody = document.getElementById("tbody");
tbody.innerHTML = "";
for(let vendor of vendors) {
    let tr = "<tr>";
    tr += `<td>${vendor.id}</td>`;
tr += `<td>${vendor.code}</td>`;
tr += `<td>${vendor.name}</td>`;
tr += `<td>${vendor.address}</td>`;
tr += `<td>${vendor.city}</td>`;
tr += `<td>${vendor.state}</td>`;
tr += `<td>${vendor.zip}</td>`;
tr += `<td>${vendor.phone}</td>`;
tr += `<td>${vendor.email}</td>`;
tr += `<td><a href="vendor-detail.html?id=${vendor.id}">Detail</a> | <a href="vendor-edit.html?id=${vendor.id}">Edit</a></td>`;
tr += "</tr>";
tbody.innerHTML += tr;
}
}


/* class Vendor {
    id;
    code;
    name;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(id, code, name, address, city, state, zip, phone, email) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
          
    } */
   /* newVendor() {
        let tr = "<tr>";
        tr += `<td>${this.id}</td>`;
        tr += `<td>${this.code}</td>`;
        tr += `<td>${this.name}</td>`;
        tr += `<td>${this.address}</td>`;
        tr += `<td>${this.city}</td>`;
        tr += `<td>${this.state}</td>`;
        tr += `<td>${this.zip}</td>`;
        tr += `<td>${this.phone}</td>`;
        tr += `<td>${this.email}</td>`;
        tr += "</tr>";
        return tr;
    } 
    
} */