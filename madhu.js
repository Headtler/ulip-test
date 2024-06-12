const axios = require('axios');

const login = async () => {
  const url = 'https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/user/login';
  const data = {
    username: 'easemy_usr',
    password: 'easemy@12062024'
  };
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios.post(url, data, config);
    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Login failed:', error.response.data);
  }
};

login();
