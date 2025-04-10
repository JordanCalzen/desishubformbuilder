import LoginForm from "@/components/auth/login-form";
export default function LoginPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#030712] to-[#0C1220] text-white dark">
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10">
				<div className="gap-2 mt-2 w-full max-w-4xl">
					<LoginForm />
				</div>
			</div>
		</div>
	);
}
