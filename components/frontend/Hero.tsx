import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export default function Hero() {
	return (
		<div>
			<section className="py-12 md:py-16 ">
				<div className=" px-2">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[Sora] text-gray-900 mb-4">
							Find the Perfect Service Provider for Your Home
						</h1>
						<p className="text-lg text-gray-600 mb-8">
							Trusted professionals for all your home service needs, vetted and
							reviewed by your community.
						</p>
						<div className="relative max-w-xl mx-auto">
							<div className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm border">
								<div className="flex-1">
									<Input
										type="text"
										placeholder="What service do you need?"
										className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</div>
								<div className="w-px h-8 bg-gray-200"></div>
								<div className="flex-1">
									<Input
										type="text"
										placeholder="Your location"
										className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</div>
								<Button className="bg-blue-600 hover:bg-blue-700">
									<Search className="h-4 w-4 mr-2" />
									Search
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
