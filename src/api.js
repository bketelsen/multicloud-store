
async function getCategories() {
    fetch('/.netlify/functions/getcategories')
    .then(function(resp) {
	    console.log(resp);
        return resp.json();
    })
    .then(function(data) {
      let categories = data.values;
      return categories;
    })
}

export default getCategories;
