"use client";

import { useEffect, useState } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function BreadcrumbCustom() {
	const [pathname, setPathname] = useState("");

	useEffect(() => {
		setPathname(window.location.pathname);
	}, []);

	const links = pathname
		.split("/")
		.filter(link => link !== "")
		.map((link, i, arr) => ({
			name: link,
			path: `/${arr.slice(0, i + 1).join("/")}`,
		}));

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{links.map((link, i) => (
					<div key={i} className="flex items-center">
						<BreadcrumbItem className="hidden md:block">
							{i === links.length - 1 ? (
								<BreadcrumbPage className="capitalize text-orange-500">
									{link.name}
								</BreadcrumbPage>
							) : (
								<BreadcrumbLink
									href={link.path}
									className="capitalize text-orange-300 hover:text-orange-500"
								>
									{link.name}
								</BreadcrumbLink>
							)}
						</BreadcrumbItem>
						{i !== links.length - 1 && (
							<BreadcrumbSeparator className="hidden md:block text-orange-400" />
						)}
					</div>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
