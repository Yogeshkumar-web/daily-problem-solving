function debounce(fn, t) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

function logMessage(msg) {
  console.log("Executed:", msg, "at", Date.now());
}

const debouncedLog = debounce(logMessage, 1000);

debouncedLog("first");
debouncedLog("second");
debouncedLog("third");
