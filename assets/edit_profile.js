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
  const address = document.getElementById("address").value;

  (person_data.first_name = first_name),
    (person_data.last_name = last_name),
    (person_data.address = address);
  person_data.phone = phone;
  person_data.email = email;

  localStorage.setItem("user_cred", JSON.stringify(user_cred));
  window.location.href = "./profile.html";
}

function del(e) {
  e.preventDefault();

  if (confirm("Are you sure?")) {
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

function logOut(e) {
  localStorage.removeItem("uniqueID");
  window.location.href = "../Log in and Sign up/Log in.html";
}
