"use client";

import Header from "@/components/header";
import { useEffect } from "react";

export default function Page() {
	useEffect(() => {
		fetch("/api/products", { method: "POST" });
	}, []);

	return (
		<>
			<Header />
			<main>dashboard</main>
		</>
	);
}
