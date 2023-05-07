const cart = JSON.parse(localStorage.getItem("add_to_cart"));

const uniqueID = JSON.parse(localStorage.getItem("uniqueID"));

function user_cart(e) {
    return e.user_id === uniqueID;
}

const cart_of_user = cart.filter(user_cart);

const table = document.querySelector(".table");

const table_caption = document.createElement("caption");
table.append(table_caption);

const table_h1 = document.createElement("h1");
table_h1.innerText = `Your Cart(${cart_of_user.length})`;
table_caption.append(table_h1);

let subtotal = 0;
let tax = 0;

for (let i = 0; i < cart_of_user.length; i++) {
    const table_r = document.createElement("tr");

    const td1 = document.createElement("td");
    table_r.append(td1);

    const cart_info = document.createElement("div");
    cart_info.setAttribute("class", "cart-info");
    td1.append(cart_info);

    const cart_img = document.createElement("img");
    cart_img.setAttribute("class", "cart-img");
    cart_img.setAttribute("src", cart_of_user[i].image);
    cart_img.setAttribute("width", "200px");
    cart_img.setAttribute("height", "200px");
    cart_info.append(cart_img);

    const detail = document.createElement("div");
    detail.setAttribute("class", "details");
    cart_info.append(detail);

    const prod_name = document.createElement("p");
    prod_name.innerText = cart_of_user[i].product_name;
    detail.append(prod_name);

    if (cart_of_user[i].category === "Cakes") {
        if (cart_of_user[i].size === 0) {
            const cake_size1 = document.createElement("small");
            cake_size1.innerText = "1/2Kg ";
            detail.append(cake_size1);
        } else if (cart_of_user[i].size === 1) {
            const cake_size2 = document.createElement("small");
            cake_size2.innerText = "1Kg ";
            detail.append(cake_size2);
        } else if (cart_of_user[i].size === 2) {
            const cake_size3 = document.createElement("small");
            cake_size3.innerText = "2Kg ";
            detail.append(cake_size3);
        }
    }

    const price = document.createElement("small");
    price.innerText = `Price: ${cart_of_user[i].price}`;
    detail.append(price);

    const remove = document.createElement("button");
    remove.setAttribute("class", "remove");
    remove.innerText = " " + "Remove";
    detail.append(remove);

    const td2 = document.createElement("td");
    td2.setAttribute("class", "quantity");
    td2.setAttribute("data-id", cart_of_user[i].product_cart_id);
    table_r.append(td2);

    const find = cart.find(
        (e) => e.product_cart_id === cart_of_user[i].product_cart_id
    );

    const inp = document.createElement("input");
    inp.setAttribute("class", "inp");
    inp.setAttribute("type", "number");
    inp.setAttribute("min", 1);
    inp.setAttribute("value", cart_of_user[i].quantity);
    td2.append(inp);

    const td3 = document.createElement("td");
    td3.setAttribute("class", "price");
    table_r.append(td3);

    const price2 = document.createElement("p");
    price2.innerText = `Price: ${cart_of_user[i].price * cart_of_user[i].quantity
        }`;
    td3.append(price2);

    document.querySelector("table.table").append(table_r);

    subtotal += cart_of_user[i].price * cart_of_user[i].quantity;
}

document.querySelector("#sub").innerText = `₹ ${subtotal}`;
tax = subtotal / 20;
document.querySelector("#tax").innerText = `₹ ${tax}`;
const total = subtotal + tax;
document.querySelector("#total").innerText = `₹ ${total}`;

const remove_item = document.querySelectorAll("button.remove");

remove_item.forEach(function (getID) {
    getID.addEventListener("click", function () {
        if (confirm("Are you sure?")) {
            const parent = this.parentNode.parentNode.parentNode.parentNode;

            const get_id = parent
                .querySelector(".quantity")
                .getAttribute("data-id");

            function find_data(e) {
                return e.product_cart_id === get_id;
            }

            const product_data = cart.find(find_data);

            const indexOfUser = cart.indexOf(product_data);

            cart.splice(indexOfUser, 1);

            localStorage.setItem("add_to_cart", JSON.stringify(cart));

            window.location.reload();
        }
    });
});

const quantity = document.querySelectorAll(".inp");

quantity.forEach(function (getQuantity) {
    getQuantity.addEventListener("click", function () {
        const parent = this.closest(".quantity");
        const quan = parent.querySelector(".inp").value;
        const uuid = parent.getAttribute("data-id");

        const update_cart = cart.filter((e) => e.product_cart_id === uuid);

        if (update_cart) {
            update_cart[0].quantity = parseInt(quan);
            localStorage.setItem("add_to_cart", JSON.stringify(cart));
        }
        window.location.reload();
    });
});