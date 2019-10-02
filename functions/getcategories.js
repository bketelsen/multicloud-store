import fetch from "node-fetch";

const API_ENDPOINT = "https://sls-wus-dev-multicloud-product-demo-bjk.azurewebsites.net/api/categories";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data.values
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};