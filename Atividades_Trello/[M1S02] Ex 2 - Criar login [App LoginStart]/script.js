let user = document.getElementById("username");
let pass = document.getElementById("password");
let val = document.getElementById("val");

const usuario = "AssisFreitas";
const senha = "lab365";

function entrar() {
  if (user.value == "" || pass.value == "") {
    val.innerHTML = "Usuário ou senha invalidos, tente novamente!"
  } else {
    if (user.value == usuario && pass.value == senha) {
      window.location.href = "main.html"
    }

  }
}

