/** @format */

import { getMoviesGenre } from "@/libs/fetch/fetch";

export default async function GenreNavbar() {
	const { genres } = await getMoviesGenre();

	return (
		<ul className="list-styled flex overflow-x-auto items-center scroll-horizontal">
			{genres && genres.length > 0 ? (
				genres.map(({ id, name }: any) => {
					return <li key={id} className="">{name}</li>
				})
			) : (
				<p>Nada</p>
			)}
		</ul>
	);
}
