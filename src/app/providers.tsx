/** @format */
'use client'
import { NextUIProvider } from "@nextui-org/react";

export async function Providers(param: any) {
	return <NextUIProvider>{param.children}</NextUIProvider>;
}
