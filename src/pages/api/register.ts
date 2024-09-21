export async function register(context: { request: { json: () => PromiseLike<{ username: any; email: any; password: any; }> | { username: any; email: any; password: any; }; }; }) {
    const { username, email, password } = await context.request.json();
    const response = await fetch(`${process.env.STRAPI_URL}/auth/local/register`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
}
