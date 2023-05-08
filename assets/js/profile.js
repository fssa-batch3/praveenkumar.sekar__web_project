// profile page

const user_profile = `<div class="head">
<h2>ACCOUNT DETAILS</h2>
<a href="./profile_edit.html">
    <button>EDIT</button>
</a>
</div>
<div class="profile_details">
<div>
    <h4>FIRST NAME</h4>
    <p id="first_name"></p>
</div>
<div>
    <h4>LAST NAME</h4>
    <p id="last_name"></p>
</div>
<div>
    <h4>EMAIL</h4>
    <p id="email"></p>
</div>
<div>
    <h4>PHONE</h4>
    <p id="phone"></p>
</div>
</div>
<div class="default_address">
<div class="address_head">
    <h2>ADDRESS</h2>
    <button>EDIT</button>
</div>
<div>
    <p>123, kalaivanar nagar, madurai veeran st</p>
    <p>Padi</p>
    <p>Chennai, Tamil Nadu</p>
    <p>600050</p>
</div>
</div>`;

const address_book = `<div class="head">
    <h2>ADDRESS BOOK</h2>
    <a href="./create_address.html"><button>ADD+</button></a>
    </div>
    <div class="address_book">
    <div class="address">
    <div class="address_head">
    <h2>ADDRESS</h2>
    <button>EDIT</button>
    </div>
    <div>
    <p>123, kalaivanar nagar, madurai veeran st</p>
    <p>Padi</p>
    <p>Chennai, Tamil Nadu</p>
    <p>600050</p>
    </div>
    </div>
    <div class="address">
    <div class="address_head">
    <h2>ADDRESS</h2>
    <button>EDIT</button>
    </div>
    <div>
    <p>123, kalaivanar nagar, madurai veeran st</p>
    <p>Padi</p>
    <p>Chennai, Tamil Nadu</p>
    <p>600050</p>
    </div>
    </div>
    <div class="address">
    <div class="address_head">
    <h2>ADDRESS</h2>
    <button>EDIT</button>
    </div>
    <div>
    <p>123, kalaivanar nagar, madurai veeran st</p>
    <p>Padi</p>
    <p>Chennai, Tamil Nadu</p>
    <p>600050</p>
    </div>
    </div>
    <div class="address">
    <div class="address_head">
    <h2>ADDRESS</h2>
    <button>EDIT</button>
    </div>
    <div>
    <p>123, kalaivanar nagar, madurai veeran st</p>
    <p>Padi</p>
    <p>Chennai, Tamil Nadu</p>
    <p>600050</p>
    </div>
    </div>
    </div>`;

let main_section = document.getElementById("main");

function profile(e) {
    main_section.innerHTML = "";
    main_section.insertAdjacentHTML("afterbegin", user_profile);

    //get value from local storage
    const uniqueID = JSON.parse(localStorage.getItem("uniqueID"));
    const user_cred = JSON.parse(localStorage.getItem("user_cred"));
    function profile_data(e) {
        return e.email === uniqueID;
    }
    const person_data = user_cred.find(profile_data);
    document.getElementById("first_name").innerText = person_data.first_name;
    document.getElementById("last_name").innerText = person_data.last_name;
    document.getElementById("email").innerText = person_data.email;
    document.getElementById("phone").innerText = person_data.Phone;
}

function address(e) {
    main_section.innerHTML = "";
    main_section.insertAdjacentHTML("afterbegin", address_book);
}


// edit profile

const uniqueID = JSON.parse(localStorage.getItem("uniqueID"));
const user_cred = JSON.parse(localStorage.getItem("user_cred"));

function profile_data(e) {
    return e.email === uniqueID;
}
const person_data = user_cred.find(profile_data);
document.getElementById("first_name").value = person_data.first_name;
document.getElementById("last_name").value = person_data.last_name;
document.getElementById("email").value = person_data.email;
document.getElementById("phone").value = person_data.phone;

function update(e) {
    e.preventDefault();

    const uniqueID = JSON.parse(localStorage.getItem("uniqueID"));
    const user_cred = JSON.parse(localStorage.getItem("user_cred"));

    function profile_data(a) {
        return a.email === uniqueID;
    }
    const person_data = user_cred.find(profile_data);

    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    person_data.first_name = first_name;
    person_data.last_name = last_name;
    person_data.address = address;
    person_data.phone = phone;
    person_data.email = email;

    localStorage.setItem("user_cred", JSON.stringify(user_cred));
    window.location.href = "./profile.html";
}

function del(e) {
    e.preventDefault();

    if (window.confirm("Are you sure?")) {
        const uniqueID = JSON.parse(localStorage.getItem("uniqueID"));
        const user_cred = JSON.parse(localStorage.getItem("user_cred"));

        function profile_data(a) {
            return a.email === uniqueID;
        }

        const person_data = user_cred.find(profile_data);

        const indexOfUser = user_cred.indexOf(person_data);
        user_cred.splice(indexOfUser, 1);

        localStorage.removeItem("uniqueID");

        localStorage.setItem("user_cred", JSON.stringify(user_cred));
        window.location.href = "../../index.html";
    }
}

function logOut() {
    localStorage.removeItem("uniqueID");
    window.location.href = "../Log in and Sign up/Log in.html";
}
