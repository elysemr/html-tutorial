$().ready(() => {
console.log("jquery is ready.");

getProductByPk();
$("#remove").on("click", () => {
    remove();
});
});

const getProductByPk = () => {
    let id = getUrlId();
    $.getJSON(`http://localhost:1215/api/products/${id}`)
        .done(
            res => {
                console.log(res);
                display(res);})
        .fail(
            err => {console.error(err)
            });
}


const display = (product) => {
    $("#xid").html(product.id);
    $("#xprtnbr").html(product.partNbr);          
    $("#xname").html(product.name);          
    $("#xprice").html(product.price.toFixed(2));          
    $("#xunit").html(product.unit);
    $("#xvendor").html(product.vendor.name);

}
