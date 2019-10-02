import  bent  from "bent";


const getJSON = bent('/.netlify/functions','json')

async function getCategories() {
    return await getJSON('/categories')
}

export default getCategories;