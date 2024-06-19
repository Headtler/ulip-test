const axios = require('axios');

// Function to log in and retrieve the authorization token
async function loginAndGetToken() {
    const loginUrl = 'https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/user/login';
    const credentials = {
        username: 'easy', // Complete and correct the username
        password: 'easy123' // Complete and correct the password
    };
    try {
        const response = await axios.post(loginUrl, credentials, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data.token; // Make sure the token is being accessed correctly based on the actual API response structure
    } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error);
        return null;
    }
}

// Function to get vehicle details using the token
async function getVehicleDetails(token) {
    const apiUrl = 'https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/VAHAN/01';
    const vehicleData = {
        vehiclenumber: 'HP857787'
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
        console.error('Request failed:', error.response ? error.response.data : error);
    }
}

// Main function to handle the flow
async function main() {
    const token = await loginAndGetToken();
    if (token) {
        await getVehicleDetails(token);
    } else {
        console.log('Failed to retrieve token.');
    }
}

main();
