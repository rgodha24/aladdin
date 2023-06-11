export async function incrementItem(id: number) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	console.log(id);
	return;
}
export async function decrementItem(id: number) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	console.log(id);
	return;
}
