export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.hostname = "api.openai.com"; // Forward to OpenAI API

    const headers = new Headers(request.headers);
    headers.set("Authorization", `Bearer ${env.OPENAPI_API_KEY}`); // Inject OpenAI API key

    return fetch(url, {
      method: request.method,
      headers,
      body: request.method !== "GET" ? JSON.stringify(await request.json()) : null,
    });
  }
};
