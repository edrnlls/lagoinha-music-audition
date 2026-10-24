export function publicUrl(fileName) {
  const base = import.meta.env.BASE_URL || "./";
  const clean = String(fileName).replace(/^\/+/, "");
  return `${base}${encodeURI(clean)}`;
}
