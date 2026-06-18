export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Only keep trailing slash fixes for subpaths
    const roots = ["/css", "/web", "/host", "/react"];
    if (roots.includes(url.pathname)) {
      url.pathname = `${url.pathname}/`;
      return Response.redirect(url.toString(), 308);
    }

    return env.ASSETS.fetch(request);
  },
};