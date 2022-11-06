import axios from 'axios';

export const pixabayApi = async (searchValue, page) => {
    const responce = await axios.get('https://pixabay.com/api/', {
        params: {
            key: '29499113-43da6bfb9ce26b9bb71689aa3',
            q: searchValue,
            per_page: 12,
            page: page,
        },
    });

    return responce.data;
};