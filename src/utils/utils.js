const makeQuery = queryObj => {
  // Expects query object with keys/values as terms
  // Returns completed query string if complete, empty string if invalid
  try {
    let result = '';
    const keys = Object.keys(queryObj);
    if (!keys.length) return result;
    else {
      result += '?';
      result += keys
        .map(key => {
          if (queryObj[key]) return `${key}=${queryObj[key]}`;
          else return '';
        })
        .join('&');
      return result;
    }
  } catch (e) {
    console.log('oops - ', e);
    return '';
  }
};

// module.exports = { makeQuery }; // Export for TTD
export { makeQuery }; // Export for app
