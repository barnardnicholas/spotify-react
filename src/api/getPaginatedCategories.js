import api from '.';
import getToken from './getToken';
import { makeQuery } from '../utils/utils';

const getPaginatedCategories = async query => {
  try {
    const token = await getToken();
    const headers = { Authorization: token };
    const { data } = await api.get(`browse/categories/${makeQuery(query)}`, { headers });
    console.dir(data);
    return data.categories;
  } catch (error) {
    console.log({ error });
  }
};

export default getPaginatedCategories;
