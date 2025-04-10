import { ArrowRight, MessageSquare, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CtaV1() {
	return (
		<section className="bg-gray-950  text-white py-16 px-6 md:px-12 lg:px-16 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Left Section - Main CTA */}
					<div className="space-y-8">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
							<span className="text-white">
								Create, Customize, Manage and Share{" "}
							</span>
							<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
								cutting-edge Forms
							</span>
						</h2>

						<p className="text-lg text-gray-300 max-w-lg">
							Manage your forms and submissions{" "}
							<span className="text-blue-400 font-medium">with</span> ease and
							most advanced{" "}
							<span className="text-purple-500 font-medium">features</span> in
							the industry.
						</p>

						<div className="flex flex-wrap gap-4">
							<Button
								asChild
								className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
							>
								<Link href="">
									<Plus className="w-5 h-5" />
									Create a new form
								</Link>
							</Button>
							{/* <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 border border-gray-700 transition-all shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30">
								Talk to us <MessageSquare className="w-5 h-5" />
							</button> */}
						</div>
					</div>

					{/* Right Section - Testimonial */}
					<div className="relative">
						<div className="bg-gray-900 overflow-hidden rounded-xl border border-gray-800 shadow-xl relative z-10">
							{/* <svg
								className="absolute text-blue-600 w-12 h-12 -top-4 -left-4 opacity-20"
								fill="currentColor"
								viewBox="0 0 32 32"
								aria-hidden="true"
							>
								<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>

							<blockquote className="relative">
								<p className="text-lg md:text-xl leading-relaxed mb-6">
									"This is the best product ever when it comes to scaling our
									operations. Ten on ten recommended. I just can't wait to see
									what happens with this product in the next phase of our
									growth."
								</p>
								<footer className="mt-4">
									<div className="flex items-center">
										<div className="flex-shrink-0 mr-3">
											<div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
												MS
											</div>
										</div>
										<div>
											<p className="font-bold text-white">Michael Scarn</p>
											<p className="text-sm text-gray-400">
												Side projects builder
											</p>
										</div>
									</div>
								</footer>
							</blockquote> */}
							<Image
								src="https://img.freepik.com/free-photo/home-improvement-form-document-concept_53876-134009.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740"
								alt=""
								width={500}
								height={500}
								className="w-full object-cover"
							/>
						</div>

						{/* Background decorative elements */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl"></div>

						<div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
