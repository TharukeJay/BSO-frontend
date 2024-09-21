export async function login(context: { request: { json: () => PromiseLike<{ email: any; password: any; }> | { email: any; password: any; }; }; }) {
    const { email, password } = await context.request.json();
    const response = await fetch(`${process.env.STRAPI_URL}/auth/local`, {
        method: 'POST',
        body: JSON.stringify({
            identifier: email,
            password,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
}
