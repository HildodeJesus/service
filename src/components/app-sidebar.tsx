"use client";

import * as React from "react";
import {
	ClipboardList,
	Command,
	House,
	LifeBuoy,
	Send,
	Store,
	Tags,
	UtensilsCrossed,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

const navInfo = {
	navMain: [
		{
			title: "Home",
			url: "/dashboard",
			icon: House,
		},
		{
			title: "Pedidos",
			url: "/dashboard/pedidos",
			icon: ClipboardList,
		},
		{
			title: "Comandas",
			url: "/dashboard/comandas",
			icon: Tags,
		},
	],
	navSecondary: [
		{
			title: "Support",
			url: "#",
			icon: LifeBuoy,
		},
		{
			title: "Feedback",
			url: "#",
			icon: Send,
		},
	],
	projects: [
		{
			title: "Pratos",
			url: "/dashboard/pratos",
			icon: UtensilsCrossed,
		},
		{
			title: "Produtos",
			url: "/dashboard/produtos",
			icon: Store,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { data } = useSession();
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="/dashboard">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold text-base capitalize">
										{data?.user.name}
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={navInfo.navMain} title="Geral" />
				<NavMain items={navInfo.projects} title="Gerenciamento" />
				{/* <NavSecondary items={navInfo.navSecondary} className="mt-auto" /> */}
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
