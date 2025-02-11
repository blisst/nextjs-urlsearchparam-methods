import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SearchBar from "../components/SearchBar";
import SearchBarParams from "../components/SearchBarParams";
import SearchBarSuspense from "../components/SearchBarSuspense";
import SearchBarNoForm from "@/components/SearchBarNoForm";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Compare NextJS search params methods ",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="container mx-auto">
					<div className="my-5">

						<h1>Search using Query Params (Vercel commerce method)</h1>
						<SearchBar />
					</div>

					<div className="my-5">

						<h1>Search using Query Params WITHOUT Form component</h1>
						<SearchBarNoForm />
					</div>
					<div className="my-5">
						<h1>Search using URL Params and Loading (shows loading state each search)</h1>
						<SearchBarParams />

					</div>
					<div className="my-5">
						<h1>Search using URL Params and Suspense (shows skeleton each search)</h1>
						<SearchBarSuspense />
					</div>
					<div className="my-5">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
