export default async function fetcher(link) {
    const res = await fetch(link);

    return res.json();
}
