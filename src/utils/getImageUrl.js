export const getImageUrl = (url, defaultImage) => {
  if (!url) {
    return defaultImage; // If no URL is provided, use the default image
  }

  // Check if the URL is a real URL (starts with http:// or https://)
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url; // Use the real URL as-is
  }

  // If it's a path, prepend the base URL
  return `http://10.0.70.205:4000${url}`;
};
