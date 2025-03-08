import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function MenuLinkServer({
	url,
	title,
}: {
	url: string;
	title: string;
}) {
	const session = await getServerSession();

	return (
		<Link href={`/${session?.user.name}/${url}`}>
			<span>{title}</span>
		</Link>
	);
}
