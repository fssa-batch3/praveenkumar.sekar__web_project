function update(e){
    e.preventDefault();

    let uniqueID = JSON.parse(localStorage.getItem("uniqueID"));
    let user_cred = JSON.parse(localStorage.getItem("user_cred"));

function profile_data(a){
    return a.email == uniqueID;
}
    person_data = user_cred.find(profile_data)

    let first_name = document.getElementById("first_name").value,
        last_name = document.getElementById("last_name").value,
        phone = document.getElementById("phone").value,
        email = document.getElementById("email").value,
        address = document.getElementById("address").value;

        person_data["first_name"] = first_name,
        person_data["last_name"] = last_name,
        person_data["address"] = address;

        localStorage.setItem('user_cred',JSON.stringify(user_cred));
        window.location.href = "./profile.html";
}

function del (e) {


if(confirm("Are you sure?")){
    let uniqueID = JSON.parse(localStorage.getItem("uniqueID"));
    let user_cred = JSON.parse(localStorage.getItem("user_cred"));

    function profile_data(a){
        return a.email == uniqueID;
    }

    person_data = user_cred.find(profile_data);

const indexOfUser = user_cred.indexOf(person_data);
user_cred.splice(indexOfUser,1);

localStorage.setItem('user_cred',JSON.stringify(user_cred));
window.location.href = "../../index.html";

};

}

function logOut (e) {

    localStorage.setItem('uniqueID', "");
    window.location.href = "../Log in and Sign up/Log in.html";

}
