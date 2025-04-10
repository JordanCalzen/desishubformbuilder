import CtaV1 from "@/components/frontend/cta-sectionV1";
import FooterV2 from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";
import React from "react";

export default function Home() {
	return (
		<div className="min-h-screen  font-[Montserrat] bg-gradient-to-b from-[#030712] to-[#0C1220]">
			<Header />
			<CtaV1 />
			<FooterV2 />
		</div>
	);
}
