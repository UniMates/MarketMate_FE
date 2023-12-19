
document.getElementById("loginForm").addEventListener("submit", signIn);

async function signIn(event) {
  event.preventDefault();
  var form1 = document.getElementById("loginForm");
  const data = new FormData();
  data.append("userRole",document.getElementById("userRole").value);
  data.append("userName",document.getElementById("userName").value);
  data.append("password",document.getElementById("password").value);
  data.append("name","name");
  var role=document.getElementById("userRole").value;
  var usaename=document.getElementById("userName").value;
  var pass = document.getElementById("password").value;
  try {
    const res = await fetch(`http://localhost:8081/marketmate/user/login?userName=${usaename}&password=${pass}&userRole=${role}`, {
      method: 'GET'
    });
    
    var d = await res.json();
    alert(d.message);
  } catch (error) {
    
  }
  event.preventDefault();
  form1.reset();
  event.preventDefault();
}