import axios from 'axios';

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;

//fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//api_key=49201db0d2374f410ce50ffd8c1b3595