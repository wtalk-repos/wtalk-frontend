export function removeUnspecifiedProps(obj:any) {
  // Delete undefined or null properties
  Object.keys(obj).forEach((key) => {
    if (obj[key] == undefined || obj[key] == null) {
      delete obj[key];
    }
  });
  return obj;
}
