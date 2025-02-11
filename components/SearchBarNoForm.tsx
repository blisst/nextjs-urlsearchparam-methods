'use client'
import { url } from "inspector";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SearchBarNoForm() {
	const searchParams = useSearchParams();
	const router = useRouter();
	let search = searchParams?.get('q');

	if (search) {
		search = decodeURIComponent(search);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let search = formData.get('q')?.toString();
		if (search) {
			const urlSearchParams = new URLSearchParams();
			urlSearchParams.set('q', search);
			router.push(`/search?${urlSearchParams.toString()}`);
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				key={search}
				type="text"
				name="q"
				placeholder="Search using query params with basic HTML form.  Auto-filled with current search..."
				autoComplete="off"
				defaultValue={search || ''}
				className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
			/>
		</form>
	);
}
