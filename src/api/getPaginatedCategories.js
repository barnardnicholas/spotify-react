import api from '.';
import getToken from './getToken';

const getPaginatedCategories = async (offset = 0, limit = 20) => {
  // Assemble query from arguments
  let query = offset || limit ? '?' : '';
  if (offset) query += `offset=${offset}`;
  if (limit) query += `${offset ? '&' : ''}limit=${limit}`;

  try {
    const token = await getToken();
    const headers = { Authorization: token };
    const { data } = await api.get(`browse/categories/${query}`, { headers });
    console.dir(data);
    return data.categories;
  } catch (error) {
    console.log({ error });
  }
};

export default getPaginatedCategories;
