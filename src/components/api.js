import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchPictures(searchQuery, page) {
    const response = axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=29499113-43da6bfb9ce26b9bb71689aa3&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response;
}

fetchPictures.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};