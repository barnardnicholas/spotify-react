const makeQuery = queryObj => {
  // Expects query object with keys/values as terms
  // Returns completed query string if complete, empty string if invalid

  try {
    const keys = Object.keys(queryObj);
    if (!keys.length) return '';
    else return '?somequery=true';
  } catch (e) {
    console.log('oops - ', e);
    return '';
  }

  // Assemble query from arguments
  let query = offset || limit ? '?locale=en_GB&' : '';
  if (offset) query += `offset=${offset}`;
  if (limit) query += `${offset ? '&' : ''}limit=${limit}`;
};

module.exports = { makeQuery };
