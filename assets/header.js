let origin = window.location.origin;

console.log(origin);

let before_login = ` 
<header>
       <div class="container">
<img src="../../assets/Images/v1033-a-15-a-removebg-preview - Copy.svg" width="100px" alt="logo">
<nav>
    <ul>
        <li><a href="${origin}/index.html">Home</a></li>
        <li><a href="${origin}/pages/products/product_list.html">Products</a></li>
        <li><a href="${origin}/pages/Log%20in%20and%20Sign%20up/Log%20in.html">Log In</a></li>
        <li><a href="${origin}/pages/Log%20in%20and%20Sign%20up/Log%20in.html"><img src="../../assets/Images/icon-cart.svg" alt="cart"></a></li>
    </ul>
</nav>
</header>`;

let after_login = `
<header>
        <div class="container">
<img src="../../assets/Images/v1033-a-15-a-removebg-preview - Copy.svg" width="100px" alt="logo">
<nav>
    <ul>
        <li><a href="${origin}/index.html">Home</a></li>
        <li><a href="${origin}/pages/products/product_list.html">Products</a></li>
        <li><a href="${origin}/pages/Cart/cart.html"><img src="../../assets/Images/icon-cart.svg" alt="cart"></a></li>
        <li><a href="${origin}/pages/Profile/profile.html"><img src="../../assets/Images/profile.svg" width="26px"
                    alt="profile"></a></li>
    </ul>
</nav>
</header>`

let user_login_id = JSON.parse(localStorage.getItem('uniqueID'));

console.log(user_login_id);

if (user_login_id) {
    document.body.insertAdjacentHTML("afterbegin", after_login);

    let log_out = document.getElementById("logOut")

    log_out?.addEventListener("click",() => {
        if(confirm("Are you sure you want to log out")) {
        localStorage.removeItem('uniqueID');
        document.body.innerHTML = before_login;
    }
})
}

else {
    document.body.insertAdjacentHTML("afterbegin", before_login);

    let log_out = document.getElementById("logOut")

    log_out?.removeEventListener("click",() => document.body.innerHTML = after_login);
    localStorage.removeItem('uniqueID');
}
