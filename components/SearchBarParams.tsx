'use client'
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SearchBarParams() {
	const params = useParams();
	const router = useRouter();
	let search = Array.isArray(params.search) ? params.search[0] : params.search;

	if (search) {
		search = decodeURIComponent(search);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let search = formData.get('q')?.toString();
		if (search) {
			search = encodeURIComponent(search);
			router.push(`/searchparams/${search}`);
		}
	}
	return (
		<form onSubmit={handleSubmit}>

			<input
				key={search}
				type="text"
				name="q"
				placeholder="Search using dynamic URL params with basic HTML form.  Auto-filled with current search..."
				autoComplete="off"
				defaultValue={search || ''}
				className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
			/>
		</form>
	);
}
