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
	const links = pathname.split("/").map(link => {
		if (link == "") return;

		return link;
	});

	useEffect(() => {
		setPathname(window.location.pathname);
	}, []);

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{links.map((link, i) => {
					if (i == links.length - 1)
						return (
							<BreadcrumbItem key={i} className="hidden md:block">
								<BreadcrumbPage className="capitalize">{link}</BreadcrumbPage>
							</BreadcrumbItem>
						);
					return (
						<>
							<BreadcrumbItem key={i} className="hidden md:block">
								<BreadcrumbLink href={`/${link}`} className="capitalize">
									{link}
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
						</>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
