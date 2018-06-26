export const isEmptyObject = (obj) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
    return false;
  }
  return true;
};
