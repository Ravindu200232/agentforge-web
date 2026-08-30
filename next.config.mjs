/**
 * The site is prerendered to static files, so it can be served from Vercel at
 * the root or from GitHub Pages under a repository sub-path. The Pages build
 * sets PAGES_BASE_PATH; every other build leaves it empty and serves from /.
 */
const basePath = process.env.PAGES_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  // Read by asset() for the image sources next/image will not prefix.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig
