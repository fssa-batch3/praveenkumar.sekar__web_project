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

    const url_id = document.getElementById("address_book");
    const get_id = url_id.getAttribute("id");

    window.location.href = "./profile.html#address_book";
    main_section.innerHTML = "";

    const head_div = document.createElement("div");
    head_div.setAttribute("class", "head");
    main_section.appendChild(head_div);

    const acc_head = document.createElement("h2");
    acc_head.innerText = "ADDRESS BOOK"
    head_div.appendChild(acc_head);

    const prof_link = document.createElement("a");
    prof_link.setAttribute("href", "./create_address.html");
    head_div.appendChild(prof_link);

    const add_btn = document.createElement("button");
    add_btn.innerText = "ADD +";
    prof_link.appendChild(add_btn);

    main_section.appendChild(head_div);

    // const add_bk = document.createElement("div");
    // add_bk.setAttribute("class", "address_book");
    // main_section.appendChild(add_bk);

    let user_address = JSON.parse(localStorage.getItem("user_address"));
    let user_id = JSON.parse(localStorage.getItem("uniqueID"));
    const current_user_address = user_address.filter((e) => e.user_id === user_id);

    for (let i = 0; i < current_user_address.length; i++) {

        const add_div = document.createElement("div");
        add_div.setAttribute("class", "address");

        const add_head = document.createElement("div");
        add_head.setAttribute("class", "address_head");
        add_div.appendChild(add_head);

        if (current_user_address[i].default === true) {

            const add_title_div = document.createElement("div");
            add_head.appendChild(add_title_div);

            const add_title = document.createElement("h2");
            add_title.innerText = current_user_address[i].title.toUpperCase();
            add_title_div.appendChild(add_title);

            const add_default_text = document.createElement("p");
            add_default_text.innerText = "(default)";
            add_title_div.appendChild(add_default_text);

        }

        else {
            const add_title = document.createElement("h2");
            add_title.innerText = current_user_address[i].title.toUpperCase();
            add_head.appendChild(add_title);

        }

        const add_edit = document.createElement("button");
        add_edit.setAttribute("data-id", current_user_address[i].address_uuid);
        add_edit.setAttribute("class", "edit_btn");
        add_edit.innerText = "EDIT";
        add_head.appendChild(add_edit);

        const add_body = document.createElement("div");
        add_body.setAttribute("class", "address_body");
        add_div.appendChild(add_body);

        const user_name = document.createElement("p");
        add_body.appendChild(user_name);

        const user_name_b = document.createElement("b");
        user_name_b.innerText = current_user_address[i].first_name + " " + current_user_address[i].last_name;
        user_name.appendChild(user_name_b);

        const house_info = document.createElement("p");
        house_info.innerText = current_user_address[i].house_no;

        add_body.appendChild(house_info);

        const area = document.createElement("p");
        area.innerText = current_user_address[i].area;
        add_body.appendChild(area);

        const city = document.createElement("p");
        city.innerText = current_user_address[i].city + " " + current_user_address[i].pincode;
        add_body.appendChild(city);

        const add_buttons = document.createElement("div");
        add_buttons.setAttribute("class", "address_buttons");
        add_div.appendChild(add_buttons);

        const add_delete = document.createElement("button");
        add_delete.setAttribute("data-id", current_user_address[i].address_uuid);
        add_delete.setAttribute("class", "delete_btn");
        add_delete.innerText = "DELETE";
        add_buttons.appendChild(add_delete);

        if (current_user_address[i].default === false) {

            const add_default = document.createElement("button");
            add_default.setAttribute("data-id", current_user_address[i].address_uuid);
            add_default.setAttribute("class", "btn_default");
            add_default.innerText = "SET AS DEFAULT";
            add_buttons.appendChild(add_default);
        }

        main_section.appendChild(add_div);
    }

    // address edit

    const edit = document.querySelectorAll("button.edit_btn");

    edit.forEach(function (getID) {
        getID.addEventListener("click", function () {
            const { id } = this.dataset;

            localStorage.setItem("address_uuid", JSON.stringify(id));

            window.location.href = "./address_edit.html";
        })
    });

    // delete address

    const del_add = document.querySelectorAll("button.delete_btn");

    del_add.forEach(function (getID) {
        getID.addEventListener("click", function () {

            const { id } = this.dataset;

            localStorage.setItem("address_uuid", JSON.stringify(id));

            const add_uuid = JSON.parse(localStorage.getItem("address_uuid"));

            function find_data(e) {
                return e.address_uuid === add_uuid;
            }

            const address_del = user_address.find(find_data);

            if (address_del.default === true) {
                window.alert("This your default address. Please change your default address to another address before deleting")
            }

            else {

                if (window.confirm("Are you sure?")) {

                    const indexOfAddress = user_address.indexOf(address_del);

                    user_address.splice(indexOfAddress, 1);

                    localStorage.setItem("user_address", JSON.stringify(user_address));

                    window.location.reload();
                }

            }
        })
    });

    // setting new address as default

    const default_add = document.querySelectorAll("button.btn_default");

    default_add.forEach(function (getID) {
        getID.addEventListener("click", function () {

            const { id } = this.dataset;

            localStorage.setItem("address_uuid", JSON.stringify(id));

            const add_uuid = JSON.parse(localStorage.getItem("address_uuid"));

            if (window.confirm("Are you sure you want to change this as your default address?")) {

                let def_add = current_user_address.find(e => e.default === true);

                def_add.default = false;

                function find_data(e) {
                    return e.address_uuid === add_uuid;
                }

                const set_default = user_address.find(find_data);

                set_default.default = true;

                localStorage.setItem("user_address", JSON.stringify(user_address));

                window.location.reload();

            }

        })
    });

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
document.getElementById("phone").value = person_data.Phone;

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


