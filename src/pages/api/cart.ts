export async function get(context: { cookies: { token: any; }; }) {
    const { token } = context.cookies;  // Get the user’s authentication token from cookies
    const response = await fetch(`${process.env.STRAPI_URL}/users/me?populate=cart`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const userData = await response.json();
    return new Response(JSON.stringify(userData.cart), { status: response.status });
}
