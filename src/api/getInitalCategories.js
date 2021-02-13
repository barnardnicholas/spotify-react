import api from '.';
import getToken from './getToken';

const getInitalCategories = async () => {
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

export default getInitalCategories;
