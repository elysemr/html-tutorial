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

let VendorDb = [
    
    {
        id: 5, code: "APL", name: "Apple", address: "1 Infinite Loop", city: "Cupertino",
        state: "CA", zip: "95014", phone: null, email: "applecare@apple.com"
    },
    {
        id: 6, code: "MIC", name: "Microsoft", address: "One Microsoft Way", city: "Redmond",
        state: "WA", zip: "98052", phone: null, email: "heysteve@microsoft.com"
    },
    {
        id: 7, code: "AMZ", name: "Amazon", address: "410 Terry Ave North", city: "Seattle",
        state: "WA", zip: "98109", phone: "206-266-1000", email: "heyjeff@amazon.com"
    },
    {
        id: 8, code: "TAR", name: "Target", address: "1000 Nicollet Mall", city: "Minneapolis",
        state: "MI", zip: "55403", phone: "800-440-0680", email: "bullseye@target.com"
    },
    {
        id: 9, code: "BBUY", name: "Best Buy", address: "7601 Penn Avenue", city: "South Richfield",
        state: "MN", zip: "55423", phone: "888-237-8289", email: "yellowtag@bestbuy.com"
    },
    {
        id: 10, code: "COST", name: "Costco", address: "999 Lake Drive", city: "Issaquah",
        state: "WA", zip: "98027", phone: "425-313-8100", email: "buylots@costco.com"
    },
    {
        id: 11, code: "IKEA", name: "IKEA", address: "420 Alan Wood Road", city: "Conshohocken",
        state: "PA", zip: "19428", phone: null, email: "buildit@ikea.com"
    },
    {
        id: 12, code: "KRO", name: "Kroger", address: "1014 Vine St.", city: "Cincinnati",
        state: "OH", zip: "45202", phone: "800-576-4377", email: "getfresh@kroger.com"
    },
    {
        id: 13, code: "ADO", name: "Adobe", address: "345 Park Avenue", city: "San Jose", 
        state: "CA", zip: "95110", phone: "408-536-6000", email: "create@adobe.com"
    }
]


const userloaded = (users) => {
let usertbody = document.getElementById("usertbody");
usertbody.innerHTML = "";
for(let user of users)
{
    let tr = "<tr>";
    tr += `<td>${user.id}</td>`;
    tr += `<td>${user.username}</td>`;
    tr += `<td>${user.firstname} ${user.lastname}</td>`;
    tr += `<td>${user.email}</td>`;
    tr += `<td>${user.phone}</td>`;
    tr += `<td>${bool(user.isReviewer)}</td>`;
    tr += `<td>${bool(user.isAdmin)}</td>`;
    tr += `<td><a href="user-detail.html?id=${user.id}">Detail</a> | 
        <a href="user-edit.html?id=${user.id}">Edit</a></td>`;
    tr += "</tr>";
    usertbody.innerHTML += tr;
    
    //let tr = user.newUser();
    //usertbody.innerHTML += tr;
}

}
const vendorloaded = () => {
let vendortbody = document.getElementById("vendortbody");
vendortbody.innerHTML = "";
for(let vendor of VendorDb) {
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
tr += "</tr>";
vendortbody.innerHTML += tr;
}
}