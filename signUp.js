document.getElementById("signUpForm").addEventListener("submit", signIn);

async function signIn(event) {
  var form1 = document.getElementById("signUpForm");
  const data = new FormData(form1);
  try {
    const res = await fetch('http://192.168.61.30:8081/marketmate/user/signup', {
      method: 'POST',
      body: data
    });
  
      alert(res.json().message);
  } catch (error) {
    
  }
  event.preventDefault();
  form1.reset();
}