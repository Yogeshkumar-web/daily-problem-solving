const cancellable = function (fn, args, t) {
  fn(...args);

  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  const cancelFn = () => {
    clearInterval(intervalId);
  };

  return cancelFn;
};

function sayHello(name) {
  console.log("Hello, " + name + "!");
}

const cancelFn = cancellable(sayHello, ["Yogee"], 1000);

setTimeout(cancelFn, 3000);
