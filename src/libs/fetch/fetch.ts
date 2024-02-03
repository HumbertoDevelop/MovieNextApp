/** @format */

// Movies

import { topRatedMoviesUrl, upcomingMoviesUrl } from "../url/url";

export const getUpComingMovies = async () => {
	try {
		const response = await fetch(upcomingMoviesUrl, {
			method: "GET",
			headers: {
				"Content-Type": "aplication/json",
				Authorization: "Bearer " + process.env.MOVIEDB_TOKEN,
			},
		});
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getTopRatedMovies = async () => {
	try {
		const response = await fetch(topRatedMoviesUrl, {
			method: "GET",
			headers: {
				"Content-Type": "aplication/json",
				Authorization: "Bearer " + process.env.MOVIEDB_TOKEN,
			},
		});
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
};
