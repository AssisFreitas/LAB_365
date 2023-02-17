let user = document.getElementById("username");
let pass = document.getElementById("password");
let val = document.getElementById("val");

// users:{
//   name:'',
//   phone:'',
//   user:'',
//   senha:''
// }

function entrar() {
  if (user.value == "" || pass.value == "") {
    val.innerHTML = "Digite um usuário e/ou senha válidos, tente novamente!"
  } else if (user.value == usuario && pass.value == senha) {
    window.location.href = "main.html"
  } else {
    val.innerHTML = "Usuário e/ou senha inválidos, Registre-se!"
  }
}

function registrar() {
  if (user.value == "" || pass.value == "") {
    val.innerHTML = "Digite usuário e senha para registrar-se!"
  } else {
     const login = Json.stringify(usuario = user.value, senha = pass.value );
  
    localStorage.setItem(user, login);
    // localStorage.setItem(senha, pass.value);
    // window.location.href = "main.html"

  }
}


