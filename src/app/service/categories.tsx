export async function getCategories() {
    const res = await fetch(`${process.env.API_BASE_URL}/api/v1/categories`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    return await res.json();
}
