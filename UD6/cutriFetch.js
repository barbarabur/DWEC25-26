const asyncRequest = require("./asyncRequest");

function cutriFetch(recurso) {
    
    return new Promise((resolve, reject) => {
       asyncRequest(recurso, (data) =>{
        resolve(data);
       });
    });
}

module.exports = cutriFetch;