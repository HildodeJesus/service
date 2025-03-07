import { ReactNode } from "react";
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
	children: ReactNode;
};
export default function LogoutButton({ children }: LogoutButtonProps) {
	const handleLogout = async () => {
		await signOut({ callbackUrl: "/" });

		document.cookie =
			"next-auth.session-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		document.cookie =
			"__Secure-next-auth.session-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		document.cookie =
			"__Host-next-auth.session-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	};

	return (
		<button
			className="flex items-center [&>svg]:size-4 gap-2"
			onClick={() => handleLogout()}
		>
			{children}
		</button>
	);
}
