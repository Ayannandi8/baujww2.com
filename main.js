


/*
function submit() {
  if ( password !== rePassword ){
    p.textContent = "You are redirecting to your page";
    p.style.color = 'darkred'
  } else if( password === rePassword) {
    p.textContent = "You have entered wrong password !";
  }
  
}*/



function submit() {
  let email = document.getElementById("email").value
let password = document.getElementById("password").value
let rePassword = document.getElementById("rePassword").value
let p = document.getElementById("p")

  localStorage.setItem("E-mail : ", email)
  localStorage.setItem( "Password : ", password)
  localStorage.setItem("Repassword : ", rePassword)
  console.log(localStorage)
  
  p.textContent = "Your account is being created !"
}




