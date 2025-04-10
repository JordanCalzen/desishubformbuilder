import SignupForm from "@/components/auth/signup";
import React from "react";

export default function page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#030712] to-[#0C1220] text-white dark flex items-center justify-center">
			<SignupForm />
		</div>
	);
}
