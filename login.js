// document.getElementById("loginForm").addEventListener("submit", login);


// async function login(e) {
//     var url = 'http://192.168.61.30:8081/marketmate/user/login';
//     var form1 = document.getElementById("loginForm");
//     const data = new FormData(form1);
//     try {
//         const res = await fetch(url, {
//             method: "POST",
//             body: data
//         });
//         // const users = await response.json();

//         // Check if the provided username and password match any user in the database
//         // const authenticatedUser = users.find(user => user.type === type && user.username === username && user.email === password);
// alert(res.json().message);
//         if (res.json().data) {
//             alert("Login Success");
//         } else {
//             alert("Login Faild");
//         }
//         e.preventDefault();
//         form1.reset();
        
//     } catch (error) {
//         // console.error('Error fetching data:', error);
//         // document.getElementById("error-message").innerText = "Error connecting to the server";
//     }
// }


document.getElementById("loginForm").addEventListener("submit", signIn);

async function signIn(event) {
  event.preventDefault();
  var form1 = document.getElementById("loginForm");
  const data = new FormData();
  data.append("userRole",document.getElementById("userRole").value);
  data.append("userName",document.getElementById("userName").value);
  data.append("password",document.getElementById("password").value);
  data.append("name","name");
  try {
    const res = await fetch('http://192.168.61.30:8081/marketmate/user/login', {
      method: 'POST',
      body: data
    });
    // if(res.body.ok){
    //   alert("Login Success");
    // }else{
    //   alert("Login Faild");
    // }
    
  console.log(res.message);
  } catch (error) {
    
  }
 
  event.preventDefault();
  form1.reset();
  event.preventDefault();
}