function signUp() {
    const navigate = function(url) {
      console.log('Navigating to:', url);
    };
  
    const handleSubmit = async function(e) {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const form = {
        type: data.get('type'),
        username: data.get('username'),
        userId: data.get('userId'),
        email: data.get('email'),
        password: data.get('password'),
        confirmPassword: data.get('cPassword')
      };
  
      try {
        const res = await fetch('', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'content-type': 'application/json',
          },
        });
  
        if (res.ok) {
          console.log('Registration successful');
          navigate('/');
        } else {
          console.error('Registration failed:', res.statusText);
        }
      } catch (error) {
        // Handle errors during the fetch operation
        console.error('Error during registration:', error);
      }
    };
}
  