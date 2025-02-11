'use client'
import { useSearchParams } from "next/navigation";
import Form from 'next/form'

export default function SearchBar() {
	const searchParams = useSearchParams();
  
	return (
	  <Form action="/search" className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
		<input
		  key={searchParams?.get('q')}
		  type="text"
		  name="q"
		  placeholder="Search using query params with Next Form component.  Auto-filled with current search..."
		  autoComplete="off"
		  defaultValue={searchParams?.get('q') || ''}
		  className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
		/>
	  </Form>
	);
  }
  