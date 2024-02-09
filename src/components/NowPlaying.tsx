/** @format */
"use client";

import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

export const NowPlaying = () => {
	return (
		<Card className="bg-transparent text-white border-none">
			<CardHeader className="font-bold pt-4 pb-2 text-3xl sm:text-5xl text-red-300 tracking-widest">
				Dead Pool
			</CardHeader>
			<CardBody>
				<p className="sm:text-base text-xs font-medium leading-none mb-2">
					Get ready for more irreverent and fun action with Deadpool 3! The
					Mouthy Mercenary returns with his acid humor and his ability to break
					the fourth wall in this new installment full of explosions, laughs and
					unforgettable moments. Are you ready to join Deadpool in his next
					adventure? Do not miss this movie that defies all the conventions of
					the superhero genre!.
				</p>
			</CardBody>
			<Chip color="danger" radius="sm" className="ml-3">COMING SOON</Chip>
		</Card>
	);
};
