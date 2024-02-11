
const baseApiUrl = "https://api.themoviedb.org/3";

export const upcomingMoviesUrl = `${baseApiUrl}/movie/upcoming?language=-US&page=1`;
export const topRatedMoviesUrl = `${baseApiUrl}/tv/top_rated?language=en-US&page=1`;
export const nowPlayingUrl = `${baseApiUrl}/movie/now_playing?language=en-US&page=1`;
export const movieGenresUrl = `${baseApiUrl}/genre/movie/list?language=en`;