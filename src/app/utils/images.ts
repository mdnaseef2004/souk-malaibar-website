export const getImageUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith('data:')) {
    return path;
  }
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Ensure base URL doesn't have double slashes and ends with a slash if not just root
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  // Remove leading slash from path to avoid double slashes when joining
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  
  return `${normalizedBase}${normalizedPath}`;
};
