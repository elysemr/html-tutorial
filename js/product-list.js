
$().ready(() => { //anon function syntax alternative is function() {}
        console.log("jquery is ready.");

        $("#refresh").on("click", () => {
            getAllProducts();
        });

        getAllProducts();

    });
    

    const getAllProducts = () => {
        $.getJSON("http://localhost:1215/api/products")
            .done(
                res => { //res response/data being sent back
                    //res = collection of products
                    //want to display products in html
                    display(res); //an array of data that are the products
                    //inside done function is when you know data came back
                }
            )
            .fail(
                err => {console.error(err)
                }
            );
            }

            const display = (products) => {
                let tbody = $("#data");
                tbody.empty(); //so we don't duplicate displayed data
                for(let product of products) {
                    let tr = $("<tr></tr>");
                    let tdId = $(`<td>${product.id}</td>`);
                    tr.append(tdId);
                    tr.append($(`<td>${product.partNbr}</td>`)); //shortens double statement above
                    tr.append($(`<td>${product.name}</td>`));
                    tr.append($(`<td>${product.price.toFixed(2)}</td>`));
                    tr.append($(`<td>${product.unit}</td>`));
                    let tdAction = $("<td></td>");
                    tdAction.append($(`<a href="product-detail.html?id=${product.id}">Detail | </a>  `));
                    tdAction.append($(`<a href="product-edit.html?id=${product.id}">Edit</a>`));
                    tr.append(tdAction);
                    tbody.append(tr);
                }
            }