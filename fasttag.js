const axios = require('axios');

const config = {
  method: 'post',
  url: 'https://www.ulipstaging.dpiit.gov.in/ulip/v1.0.0/OFIASTAG/01',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNLVdTdGF2TklJLHJlY29yZCBVbGlQIiwiaXNzIjoiTmV0bHlJbXByb3ZlIiwiaWF0IjoxNjM5ODI3OTQ1LCJleHAiOjE2Mzk4MzE1NDUsImNsaWVudF9pZCI6IjEiLCJ1c2VyX2lkIjoxfQ.Sl6J2OMDY3MaTouoqH1b4wGlrNzWkk5jZvAucp22I4E', 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify({
    "vehiclenumber": "MH04JK9325"
  })
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.error(error);
  });
