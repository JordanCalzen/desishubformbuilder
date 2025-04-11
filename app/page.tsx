import CtaV1 from "@/components/frontend/cta-sectionV1";
import FooterV2 from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";
import Hero from "@/components/frontend/Hero";
import React from "react";

export default function Home() {
	return (
		<div className="min-h-screen  font-[Montserrat] bg-gradient-to-b from-blue-50 to-white">
			<Header />
			<Hero />
			<FooterV2 />
		</div>
	);
}
