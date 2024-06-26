// const axios = require('axios');

// // Function to log in and retrieve the authorization token
// async function loginAndGetToken() {
//   const loginUrl = 'https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/user/login';
//   const credentials = {
//     username: 'easemy_usr',
//     password: 'easemy@12062024'
//   };
//   try {
//     const response = await axios.post(loginUrl, credentials, {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     });
//     return response.data.response.id; // Assuming the token is returned in the 'token' field
//   } catch (error) {
//     console.error('Login failed:', error.response ? error.response.data : error);
//     return null;
//   }
// }
// // Function to get vehicle details using the token
// async function getDLDetails(token) {
//   console.log(token, "tokentoken")
//   const apiUrl = 'https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/SARATHI/01';
//   const vehicleData = {
//     "dlnumber": "GJ04 20120005008",
//     "dob": "1987-05-26"
//   };
//   try {
//     const response = await axios.post(apiUrl, vehicleData, {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     });
//     console.log('Vehicle details:', response.data);
//   } catch (error) {
//     console.error(error, 'Request failed:', error.response ? error.response.data : error);
//   }
// }

// // Main function to handle the flow
// async function main() {
//   const token = await loginAndGetToken();
//   if (token) {
//     await getDLDetails(token);
//   } else {
//     console.log('Failed to retrieve token.');
//   }
// }

// main();


const axios = require('axios');

// Function to log in and return the access token
async function getAccessToken() {
  try {
    const response = await axios.post('https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/user/login', {
      username: 'easemy_usr',  // Replace 'xxxx' with actual username
      password: 'easemy@12062024'  // Replace 'xxxx@123' with actual password
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data.response.id, " response.data response.data response.data")
    return response.data.response.id; // Adjust this if the token is nested differently in response
  } catch (error) {
    console.error('Login Error:', error);
    return null;
  }
}
// Function to fetch vehicle details using the access token
async function getDLDetails(accessToken, vehicleNumber) {
  try {
    const response = await axios.post('https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/SARATHI/01',
      {
        dlnumber: "GJ04 20120005008",
        dob: "1987-05-26"
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
  // const vehicleNumber = 'MH18BG6198'; // Replace with actual vehicle registration number
  // const vehicleNumber = 'MH04LE5221'; // Replace with actual vehicle registration number
  const vehicleNumber = 'CG07BC9186'; // Replace with actual vehicle registration number
  // const vehicleNumber = 'MH04LE5221'; // Replace with actual vehicle registration number
  const accessToken = await getAccessToken();
  console.log(accessToken, "accessTokenaccessTokenaccessToken")
  if (accessToken) {
    await getDLDetails(accessToken, vehicleNumber);
  }
}

main();