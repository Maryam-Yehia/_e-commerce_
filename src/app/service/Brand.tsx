export async function gatAllBrand() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/brands`);
  const data = await res.json();
  return data;
}