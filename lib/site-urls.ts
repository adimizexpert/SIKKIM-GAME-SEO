/**
 * Single source of truth for canonical site URL.
 * Always use https and non-www so every page gets a self-referencing canonical
 * pointing to the preferred version.
 */
export const SITE_BASE_URL = 'https://sikkimgamelogin.com'

/**
 * Build self-referencing canonical URL: https://sikkimgamelogin.com + path.
 * No www, no trailing slash (except for home '/').
 */
export function canonicalUrl(path: string): string {
  let normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }
  return `${SITE_BASE_URL}${normalized}`
}
