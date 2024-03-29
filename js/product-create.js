$().ready(() =>{
    console.log("jQuery is ready.");
    $("input, select").css("border-radius", "8px");

    getVendors();
})


const getVendors = () => {
    $.getJSON(`${baseurl}/vendors`)
    .done(res => {
        console.log(res);
        loadVendors(res);
    })
    .fail(err=> {
        console.error(err);
    });
}

const loadVendors = (vendors) => {
    let select = $("#vendors");
    select.empty();
    for(let v of vendors) {
        select.append( $(`<option value="${v.id}">${v.name}</option>`)).prop("selectedIndex", -1);
    }
}

const saveProduct = () => {
    let product = {
        id: 0,
        partNbr: $("#xprtnbr").val(),
        name: $("#xname").val(),
       price: +$("#xprice").val(),
        unit: $("#xunit").val(),
        vendorId: +$("select").val()
    }
    console.log("Product:", product)
    create(product);
}

const create = (product) => {
    $.ajax({
        method: "POST", 
        url: `${baseurl}/products`,
        data: JSON.stringify(product),
        contentType: "application/json"
    
    })
    .done(res => {
        console.log("Product Created", res);
        window.location.href = "product-list.html";
    })
    .fail(err => {
        console.error(err);
    });
}
