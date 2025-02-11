function arrayOfRandomNumbers(length, ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(Array.from({ length }, () => Math.floor(Math.random() * 100)));
		}, ms);
	});
}
export async function AsyncNumbers() {
	// Simulate an async operation generating random numbers

	const numbers = await arrayOfRandomNumbers(10, 5000);
	return (
		<div>
			<h1>Async Numbers</h1>
			<ul>
				{numbers.map((number, idx) => (
					<li key={idx}>{number}</li>
				))}
			</ul>
		</div>
	);
}


export function AsyncSkeleton() {
	return (
		<h1>ASYNC SKELETON</h1>
	)
}