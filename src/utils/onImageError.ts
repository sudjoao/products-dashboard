export const onImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  e.currentTarget.src = require('../assets/images/no_image.jpg');
  e.currentTarget.onerror = null;
};
