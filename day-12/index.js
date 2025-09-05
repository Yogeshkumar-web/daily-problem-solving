const addTwoPromises = async function (promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  const sum = value1 + value2;
  return sum;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
