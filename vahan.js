import axios from 'axios';

const config = {
    method: 'post',
    url: 'https://www.ulip.dgip.gov.in/ulip/v1.0/VEHAN/01',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlYXNlbXlfdXNyIiwiaWF0IjoxNzE4MTk1NTcyLCJhcHBzIjoiZGF0YXB1c2gifQ.jPuoztXkKOA3O5BAT-izUdYXkP0iLSNJ-crOWwYy6WWrkVfBY6ohJ3zSVY5IjLkQeLIBPMXTU576oxe0bUmd3A'
    },
    data : JSON.stringify({
        "vehiclenumber": "AP16AX2794"
    })
};

axios(config)
.then(function (response) {
    console.log(JSON.stringify(response.data));
})
.catch(function (error) {
    console.log(error);
});
