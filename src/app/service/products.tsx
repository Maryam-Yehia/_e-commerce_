export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products`,
    {
    cache:'force-cache'
    });
  const {data} = await res.json();
  return data;
}
export async function getSpecficProducts(id:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products`,
    {
    cache:'force-cache'
    });
  const {data} = await res.json();
  return data;
}


