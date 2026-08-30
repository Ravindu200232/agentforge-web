/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is fully static; `next build` emits it straight to out/ so it can
  // be served from GitHub Pages or any bucket without a Node process.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
