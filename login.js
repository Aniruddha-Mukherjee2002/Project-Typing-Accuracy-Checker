document.getElementById('btn').addEventListener('click',(e)=>{
    e.preventDefault()
    const id = document.getElementById('email-log').value
  if(localStorage.getItem(String(id))===null){
    window.location.replace('./registration.html')
  }
  else{
    window.location.replace('./landing.html')
  }
  })