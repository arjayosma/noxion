export const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
};
