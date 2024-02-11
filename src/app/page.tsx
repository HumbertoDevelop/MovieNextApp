/** @format */

import GenreNavbar from "@/components/GenreNavbar";
import { NowPlaying } from "@/components/NowPlaying";
import { TopRatedListMovies } from "@/components/TopRatedListMovies";
import UpComingListMovies from "@/components/UpComingListMovies";
// import { TopRatedListMovies } from "@/components/TopRatedListMovies";

export default async function Page() {
	return (
		<>
			<header className="container-header grid grid-cols-1 p-2 h-screen items-center sm:grid-cols-2 lg:grid-cols-3">
				<NowPlaying />
			</header>
			<GenreNavbar/>
			<UpComingListMovies/>
			<TopRatedListMovies/>
		</>
	);
}
