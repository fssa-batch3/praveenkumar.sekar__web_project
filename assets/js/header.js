const main_source = window.location.origin;

const before_login = ` 
<header>
       <div class="container">
<img src="../../assets/Images/v1033-a-15-a-removebg-preview - Copy.svg" width="100px" alt="logo">
<nav>
    <ul>
        <li><a href="${main_source}/index.html">HOME</a></li>
        <li><a href="${main_source}/pages/products/product_list.html">PRODUCTS</a></li>
        <li><a href="${main_source}/pages/Log%20in%20and%20Sign%20up/Log%20in.html">LOG IN</a></li>
        <li><a href="${main_source}/pages/Log%20in%20and%20Sign%20up/Log%20in.html"><img src="../../assets/Images/icon-cart.svg" alt="cart"></a></li>
    </ul>
</nav>
</header>`;

const after_login = `
<header>
        <div class="container">
<img src="../../assets/Images/v1033-a-15-a-removebg-preview - Copy.svg" width="100px" alt="logo">
<nav>
    <ul>
        <li><a href="${main_source}/index.html">HOME</a></li>
        <li><a href="${main_source}/pages/products/product_list.html">PRODUCTS</a></li>
        <li><a href="${main_source}/pages/Cart/cart.html"><span class="item"></span><img src="../../assets/Images/icon-cart.svg" alt="cart"></a></li>
        <li><a href="${main_source}/pages/Profile/profile.html"><img src="../../assets/Images/profile.svg" width="26px"
                    alt="profile"></a></li>
    </ul>
</nav>
</header>`;

const user_login_id = JSON.parse(localStorage.getItem("uniqueID"));

if (user_login_id) {
    document.body.insertAdjacentHTML("afterbegin", after_login);

    const log_out = document.getElementById("logOut");

    log_out?.addEventListener("click", () => {
        if (window.confirm("Are you sure you want to log out")) {
            localStorage.removeItem("uniqueID");
            document.body.innerHTML = before_login;
        }
    });
} else {
    document.body.insertAdjacentHTML("afterbegin", before_login);

    const log_out = document.getElementById("logOut");

    log_out?.removeEventListener(
        "click",
        () => (document.body.innerHTML = after_login)
    );
    localStorage.removeItem("uniqueID");
}

let cartCounter = document.querySelector(".item")

function cartCount() {
    const userEmail = JSON.parse(localStorage.getItem("uniqueID"));
    const cartData = JSON.parse(localStorage.getItem("add_to_cart")) || [];
    const userCart = cartData.filter((item) => item.user_id == userEmail)
    console.log(userCart)
    if (userCart.length !== 0) { return cartCounter.innerHTML = userCart.length }
    else {
        return cartCounter.style.display = "none";
    }

}

cartCount()






