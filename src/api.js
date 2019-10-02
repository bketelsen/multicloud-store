

async function getCategories() {
    fetch('/.netlify/functions/getcategories')
    .then((resp) => resp.json())
    .then(function(data) {
      let categories = data.values;
      return categories;
    })
}

export default getCategories;