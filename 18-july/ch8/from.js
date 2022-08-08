function changeFunction() {
  document.getElementById("para").innerHTML = "";
  document.getElementById("para").innerHTML = "you can select Multiple....";
}

function onSubmit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let mob = document.getElementById("mob").value;
  let dob = document.getElementById("dob").value;
  let addr = document.getElementById("addr").value;

  let named = (document.getElementById("s-name").innerHTML = name);

  // let data = "<tr><td>document.getElementById("s-name").innerHTML = name ";

  document.getElementById("s-name").innerHTML = name;
  document.getElementById("s-email").innerHTML = email;
  document.getElementById("s-pass").innerHTML = pass;
  document.getElementById("s-mob").innerHTML = mob;
  document.getElementById("s-dob").innerHTML = dob;
  document.getElementById("s-addr").innerHTML = addr;
}
