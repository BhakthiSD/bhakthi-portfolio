import { defineConfig, loadEnv, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";

function siteMetadata(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, "");
  return {
    name: "portfolio-site-metadata",
    transformIndexHtml(html) {
      if (!base) return html;
      return html.replace(
        "</head>",
        `    <meta property="og:url" content="${base}/" />\n    <link rel="canonical" href="${base}/" />\n  </head>`,
      );
    },
    generateBundle() {
      if (!base) return;
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}/</loc></url></urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "VITE_");
  return { plugins: [vue(), siteMetadata(env.VITE_SITE_URL ?? "")] };
});
