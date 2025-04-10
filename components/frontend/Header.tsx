import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Button } from "react-day-picker";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<div className="px-2 pt-2 sticky top-0 z-50 w-full">
			<header className=" border-b bg-transparent  rounded-lg">
				<div className=" flex h-16 items-center justify-between">
					<Link
						href="/"
						className=" w-[250px] lg:w-[200px] flex items-center gap-2 p-3"
					>
						<Image
							src="/desishublogo.png"
							alt=""
							width={300}
							height={300}
							className="w-full h-full object-cover object-center"
						/>
					</Link>

					<nav className="hidden md:flex text-white items-center gap-6">
						<Link
							href="#"
							className="text-sm font-medium hover:text-blue-600 transition-colors"
						>
							WorkSpace
						</Link>
						<Link
							href="#"
							className="text-sm font-medium  hover:text-blue-700 transition-colors"
						>
							Templates
						</Link>
						<Link
							href="#"
							className="text-sm font-medium  hover:text-blue-600 transition-colors"
						>
							What{"'"}s new
						</Link>
					</nav>

					<div className="flex items-center gap-4">
						<Button
							asChild
							className="bg-blue-100 text-blue-800 hover:bg-blue-200"
						>
							<Link href="/signup">Sign Up</Link>
						</Button>
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
								>
									<Menu className="h-6 w-6 text-white" />
									<span className="sr-only">Toggle Menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="left"
								className="pr-0 bg-[#0C1220] text-white"
							>
								<nav className="grid gap-6 px-2 py-6">
									<Link href="/browse" className="hover:text-blue-600">
										WorkSpace
									</Link>
									<Link href="/sell" className="hover:text-blue-600">
										Templates
									</Link>
									<Link href="/governance" className="hover:text-blue-600">
										What{"'"}s new
									</Link>
									<Link href="/profile" className="hover:text-blue-600">
										Profile
									</Link>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</header>
		</div>
	);
}
