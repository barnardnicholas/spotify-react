import api from '.';
import getToken from './getToken';

const getAllCategories = async () => {
    try {
        const token = await getToken();
        const headers = { Authorization: token };
        const { data } = await api.get('browse/categories/', { headers });
        return data.categories;
    } catch (error) {
        console.log({ error });
    }
};

export default getAllCategories;
