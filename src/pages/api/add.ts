export async function add(context: { request: { json: () => PromiseLike<{ productId: any; }> | { productId: any; }; }; cookies: { token: any; }; }) {
    const { productId } = await context.request.json();
    const { token } = context.cookies;

    const response = await fetch(`${process.env.STRAPI_URL}/users/me?populate=cart`, {
        method: 'PUT',
        body: JSON.stringify({
            cart: [productId], // Update the cart by adding the product ID
        }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
}
