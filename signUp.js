document.getElementById("signUpForm").addEventListener("submit", signIn);

async function signIn(event) {
  event.preventDefault();
  var form1 = document.getElementById("signUpForm");
  const data = new FormData(form1);
  try {
    const res = await fetch('http://192.168.61.30:8081/marketmate/user/signup', {
      method: 'POST',
      body: data
    });
    var d = await res.json();
      alert(d.message);
  } catch (error) {
  }
  event.preventDefault();
  form1.reset();
}