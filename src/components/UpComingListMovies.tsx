/** @format */
import { getUpComingMovies } from "@/libs/fetch/fetch";
import { Card, CardHeader, Image, CardFooter, Button } from "@nextui-org/react";

export default async function UpComingListMovies() {
	const { dates, pages, results, total_pages, total_results } = await getUpComingMovies();
	return (
		<div className="gap-2 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 p-4">
			{results ? (
				results.map(
					({
						id,
						adult,
						backdrop_path,
						genre_ids,
						original_language,
						original_title,
						overview,
						popularity,
						poster_path,
						release_date,
						title,
						video,
						vote_average,
						vote_count,
					}: IMovie) => {
						const imgMovie: string = poster_path
							? "https://image.tmdb.org/t/p/w500/" + poster_path
							: "https://image.tmdb.org/t/p/w500/" + backdrop_path;
						return (
							<Card
								key={id}
								isFooterBlurred
								className="w-full h-[300px] animation-movies">
								<CardHeader className="absolute z-10 top-1 flex-col items-start">
									{/* <p className="text-tiny text-white/60 uppercase font-bold"> */}
									{/* {overview} */}
									{/* </p> */}
									{/* <h4 className="text-white/90 font-medium text-xl">{title}</h4> */}
								</CardHeader>
								<Image
									removeWrapper
									alt="Relaxing app background"
									className="z-0 w-full h-full object-cover"
									src={imgMovie}
								/>
								<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
									<div className="flex flex-grow gap-2 items-center">
										<Image
											alt="Breathing app icon"
											className="rounded-full w-10 h-11 bg-black"
											src="/images/breathing-app-icon.jpeg"
										/>
										<div className="flex flex-col">
											<p className="text-md text-white/80">{title}</p>
										</div>
									</div>
									<Button radius="full" size="md">
										{vote_average}
									</Button>
								</CardFooter>
							</Card>
						);
					}
				)
			) : (
				<p>Nothing</p>
			)}
		</div>
	);
}
