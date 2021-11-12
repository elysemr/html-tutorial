






const display = (product) => {
    $("#xid").val(product.id);
    $("#xprtnbr").val(product.prtNbr);
    $("#xname").val(product.name);
    $("#xprice").val(product.price);
    $("#xunit").val(product.unit);

}