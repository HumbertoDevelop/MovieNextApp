import {
	movieGenresUrl,
	nowPlayingUrl,
	topRatedMoviesUrl,
	upcomingMoviesUrl,
} from "../url/url";

export async function getUpComingMovies(): Promise<TMovieResponse> {
	try {
		const response = await fetch(upcomingMoviesUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`,
			},
		});

		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

		const { results } = await response.json();

		return results;
	} catch (error) {
		console.error("Fetch failed: ", error);
		throw error;
	}
}

export async function getTopRatedMovies(): Promise<TMovieResponse> {
	try {
		const response = await fetch(topRatedMoviesUrl, {
			method: "GET",
			headers: {
				"Content-Type": "aplication/json",
				Authorization: "Bearer " + process.env.MOVIEDB_TOKEN,
			},
		});

		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

		const { results } = await response.json();

		return results;
	} catch (error) {
		console.error("Fetch failed: ", error);
		throw error;
	}
};

export async function getNowPlaying(): Promise<TMovieResponse> {

	try {
		const response = await fetch(nowPlayingUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`,
			},
		});

		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

		const data = await response.json();

		return data;
	} catch (error) {
		console.error("Fetch failed: ", error);
		throw error;
	}
}

export async function getMoviesGenre(): Promise<TMovieResponse> {
	try {
		const response = await fetch(movieGenresUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`,
			},
		});

		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

		const { genres } = await response.json();

		return genres;
	} catch (error) {
		console.error("Fetch failed: ", error);
		throw error;
	}
}