import  bent  from "bent";


const getJSON = bent('/.netlify/functions','json')

async function getCategories() {
    return await getJSON('/getcategories')
}

export default getCategories;