/**
 * Converts a string into a URL-friendly slug
 * Example: "Hello World! This is a Test" -> "hello-world-this-is-a-test"
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // Normalize unicode characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
};

/**
 * Generates a unique slug by appending a number if the slug already exists
 */
export const generateUniqueSlug = (
  baseSlug: string,
  existingSlugs: string[]
): string => {
  let slug = slugify(baseSlug);
  let counter = 1;

  while (existingSlugs.includes(slug)) {
    slug = `${slugify(baseSlug)}-${counter}`;
    counter++;
  }

  return slug;
};

/**
 * Validates if a slug is in the correct format
 */
export const isValidSlug = (slug: string): boolean => {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}; 