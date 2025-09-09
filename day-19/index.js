function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const results = new Array(functions.length);
    let completed = 0;

    functions.forEach((fn, index) => {
      try {
        fn()
          .then((res) => {
            results[index] = res;
            completed++;

            if (completed === functions.length) {
              resolve(results);
            }
          })
          .catch((err) => {
            reject(err);
          });
      } catch (err) {
        reject(err);
      }
    });

    if (functions.length === 0) {
      resolve([]);
    }
  });
}
