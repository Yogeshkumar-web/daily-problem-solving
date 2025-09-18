function compactObject(obj) {
  if (!obj) return obj;

  if (Array.isArray(obj)) {
    let result = [];
    for (let item of obj) {
      if (item) {
        if (typeof item === "object") {
          result.push(compactObject(item));
        } else {
          result.push(item);
        }
      }
    }
    return result;
  }

  if (typeof obj === "object") {
    let result = {};
    for (let key in obj) {
      if (obj[key]) {
        if (typeof obj[key] === "object") {
          result[key] = compactObject(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }

  return obj;
}
