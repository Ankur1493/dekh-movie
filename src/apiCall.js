const fetchMovieData = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=49201db0d2374f410ce50ffd8c1b3595');
    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};

export default fetchMovieData;
