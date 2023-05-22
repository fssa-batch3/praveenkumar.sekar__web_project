// product list

const prod_detail = JSON.parse(localStorage.getItem("prod_detail"));

// array.filter()

const Cakes = prod_detail.filter(function category(type) {
    return type.category === "Cakes";
});

const Breads = prod_detail.filter(function category(type) {
    return type.category === "Breads";
});

const breakfast_pastries = prod_detail.filter(function category(type) {
    return type.category === "Breakfast Pastry";
});
// for loops

for (let i = 0; i < Cakes.length; i++) {
    const div_prod = render(Cakes[i]);
    document.querySelector("div.products1").append(div_prod);
}

for (let i = 0; i < Breads.length; i++) {
    const div_prod = render(Breads[i]);
    document.querySelector("div.products2").append(div_prod);
}

for (let i = 0; i < breakfast_pastries.length; i++) {
    const div_prod = render(breakfast_pastries[i]);
    document.querySelector("div.products3").append(div_prod);
}

function render(object) {
    const find_default_price = object.price_details.find((e) => e.size === 0);
    const find_second_price = object.price_details.find((e) => e.size === 1);
    const find_third_price = object.price_details.find((e) => e.size === 2);

    // div_product
    const div_prod = document.createElement("div");
    div_prod.setAttribute("class", "product");
    console.log(div_prod);

    // h2
    const h2 = document.createElement("h2");
    h2.innerText = object.name;
    div_prod.append(h2);

    // p
    const price = document.createElement("p");
    price.innerText = `₹${find_default_price.price}`;
    div_prod.append(price);

    // img
    const prod_img = document.createElement("img");
    prod_img.setAttribute("src", object.image.src);
    prod_img.setAttribute("class", "img_size");
    prod_img.setAttribute("alt", object.name);
    div_prod.append(prod_img);

    const prod_a = document.createElement("a");
    prod_a.setAttribute(
        "href",
        `./product_detail.html?product_id=${object.product_id}`
    );
    div_prod.append(prod_a);

    const prod_button = document.createElement("button");
    prod_button.setAttribute("class", "prod_button");
    prod_button.innerText = "Learn more";
    prod_a.append(prod_button);

    return div_prod;
}