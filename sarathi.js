const axios = require('axios');

// Function to log in and retrieve the authorization token
async function loginAndGetToken() {
    const loginUrl = 'https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/user/login';
    const credentials = {
      username: 'easemy_usr',
      password: 'easemy@12062024'
    };
    try {
      const response = await axios.post(loginUrl, credentials, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      return  response.data.response.id; // Assuming the token is returned in the 'token' field
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error);
      return null;
    }
  }
// Function to get vehicle details using the token
async function getDLDetails(token) {
    const apiUrl = 'https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/SARATHI/01';
    const vehicleData = {
        dlnumber: 'TS03320190000537',
        dob: '1997-06-25'
    };
    try {
        const response = await axios.post(apiUrl, vehicleData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('Vehicle details:', response.data);
    } catch (error) {
        console.error(error ,'Request failed:', error.response ? error.response.data : error);
    }
}

// Main function to handle the flow
async function main() {
    const token = await loginAndGetToken();
    if (token) {
        await getDLDetails(token);
    } else {
        console.log('Failed to retrieve token.');
    }
}

main();
