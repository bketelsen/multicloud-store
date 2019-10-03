import categories from "./categorystore.js";
async function getCategories() {
    fetch('/.netlify/functions/getcategories')
    .then(function(resp) {

        return resp.json();
    })
    .then(function(data) {
        const categories = data.data.values;
      return categories;
    })
}

export default getCategories;
