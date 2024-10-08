const axios = require('axios');

// Function to log in and return the access token
async function getAccessToken() {
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
// Function to fetch vehicle details using the access token
async function fetchVehicleDetails(accessToken, vehicleNumber) {
    try {
      const response = await axios.post('https://www.ulip.dpiit.gov.in/ulip/v1.0.0/FASTAG/01', {
        vehiclenumber: vehicleNumber
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      console.log('FastTag Details:', response.data.response[0].response);
      console.log('FastTag Details:', response.data.response[0].response.vehicle.vehltxnList.txn);
    } catch (error) {
      console.error('Fetch FastTag Details Error:', error);
    }
  }
  
  // Example usage
  async function main() {
    // const vehicleNumber = 'MH12PN6251'; // Manish Sir
    const vehicleNumber = 'PB11BF4112'; // Replace with actual vehicle registration number
    // const vehicleNumber = 'PB13BG5619'; // Replace with actual vehicle registration number
    // const vehicleNumber = 'CG07BC9186'; // Replace with actual vehicle registration number
    // const vehicleNumber = 'MH04LE5221'; // Replace with actual vehicle registration number
    const accessToken = await getAccessToken();
    console.log(accessToken,"accessTokenaccessTokenaccessToken")
    if (accessToken) {
      await fetchVehicleDetails(accessToken, vehicleNumber);
    }
  }
  
  main();
  
