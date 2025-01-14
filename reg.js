
//Object structure
const user = {
  email:"",
  accuracy:0,
  password:"",
  cks:0,
  wks:0,
  best:0
}

//listening event when the user will come for the first time on our website
document.getElementById('btn-reg').addEventListener('click',(e)=>{
    e.preventDefault()
    const id = document.getElementById('email-reg').value
    const pass = document.getElementById('password-reg').value
  
    console.log(id+" "+pass)
  
    user.email = String(id)
    user.password = String(pass)
    localStorage.setItem(String(id),JSON.stringify(user))
    window.location.href="./login.html"
    
  })

  