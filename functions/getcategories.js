const fetch = require("node-fetch");

const API_ENDPOINT = "https://sls-wus-dev-multicloud-product-demo-bjk.azurewebsites.net/api/categories";

exports.handler = async (event, context, callback) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          data: data
        })
      }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};