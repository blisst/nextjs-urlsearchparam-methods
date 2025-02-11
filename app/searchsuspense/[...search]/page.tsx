import { AsyncNumbers, AsyncSkeleton } from "@/components/AsyncNumbers";
import { Suspense } from "react";

export default async function Search() {

	return (
		<Suspense fallback={<AsyncSkeleton />}>
			<AsyncNumbers />
		</Suspense>
	)
}