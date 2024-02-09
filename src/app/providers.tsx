/** @format */
'use client'
import { NextUIProvider } from "@nextui-org/react";

export async function Providers(param: { children: React.ReactNode }) {
	return <NextUIProvider>{param?.children}</NextUIProvider>;
}
