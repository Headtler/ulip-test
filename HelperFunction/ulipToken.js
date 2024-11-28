const axios = require("axios");

async function loginAndGetToken() {
    try {
        const response = await axios.post('https://www.ulip.dpiit.gov.in/ulip/v1.0.0/user/login', {
          username: 'easemy_usr',  // Replace 'xxxx' with actual username
          password: 'easemy@01072024'  // Replace 'xxxx@123' with actual password
        }, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        console.log( response.data.response.id," response.data response.data response.data")
        return response.data.response.id; // Adjust this if the token is nested differently in response
      } catch (error) {
        console.error('Login Error:', error);
        return null;
      }
}
module.exports = { loginAndGetToken };
