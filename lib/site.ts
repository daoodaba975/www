export const SITE_URL = "https://daooda.dev";
export const SITE_NAME = "Daooda";
export const SITE_AUTHOR = "Daouda BA";
export const SITE_DESCRIPTION =
  "Personal website of Daouda BA, FullStack Developer.";

/** Fallback social card, used when an article has no `image` frontmatter. */
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/degyjrpjj/image/upload/v1750992429/daooda/share/og_share.png";

/** Turns a site-relative path into the absolute URL crawlers and feeds require. */
export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

/** Single date format for the whole site, matching the `en` content. */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
