/** @format */

import { ListMovies } from "@/components/ListMovies";
import { getUpComingMovies } from "@/libs/fetch/fetch";
// import Image from "next/image";

export default async function Home() {
	const { dates, pages, results, total_pages, total_results } =
		await getUpComingMovies();
	// https://image.tmdb.org/t/p/w500/ldfCF9RhR40mppkzmftxapaHeTo.jpg
// console.log(results)
	return (
		<div>
			<ListMovies results={results}/>
		</div>
	);
}
