import { ReactNode } from "react";
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
	children: ReactNode;
};
export default function LogoutButton({ children }: LogoutButtonProps) {
	return (
		<button
			className="flex items-center [&>svg]:size-4 gap-2"
			onClick={() => signOut()}
		>
			{children}
		</button>
	);
}
