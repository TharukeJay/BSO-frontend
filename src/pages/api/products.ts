export async function get() {
    const response = await fetch(`${process.env.STRAPI_URL}/products`);
    const products = await response.json();
    return new Response(JSON.stringify(products), { status: response.status });
}
