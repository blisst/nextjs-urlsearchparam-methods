function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

export default async function Search() {
	await sleep(5000);
	return (
		<h1>SEARCH PAGE after sleep</h1>
	)
}