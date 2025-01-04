"use client";

import { signIn } from "@app/server/react";

export const ExampleForm = () => {
	return (
		<form>
			<input type="email" />
			<input type="password" />
			<button
				type="button"
				onClick={() => {
					signIn("credentials", {
						username: "admin",
						password: "admin",
					});
				}}
			>
				Submit
			</button>
		</form>
	);
};
