/** Compile-time deployment prefix. Empty on a root host, /LAPA on GitHub Pages. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const assetPath = (path: string) => `${basePath}/${path.replace(/^\/+/, '')}`;
