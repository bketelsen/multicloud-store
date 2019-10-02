import  bent  from "bent";


const getJSON = bent('https://sls-wus-dev-multicloud-product-demo-bjk.azurewebsites.net/api','json')

async function getCategories() {
    return await getJSON('/categories')
}

export default getCategories;