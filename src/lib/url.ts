export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function createProductUrl(
  id: number,
  title: string,
  locale: string = "en"
): string {
  const slug = createSlug(title);
  return `/${locale}/products/${id}/${slug}`;
}
