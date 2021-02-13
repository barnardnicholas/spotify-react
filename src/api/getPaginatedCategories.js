import api from '.';
import getToken from './getToken';

const getPaginatedCategories = async (offset = 0, limit = 8) => {
  try {
    const token = await getToken();
    const headers = { Authorization: token };
    const { data } = await api.get('browse/categories/', { headers });
    console.dir(data);
    return data.categories;
  } catch (error) {
    console.log({ error });
  }
};

export default getPaginatedCategories;
