class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const expiryTime = currentTime + duration;

    const alreadyExists =
      this.cache.has(key) && this.cache.get(key).expiry > currentTime;
    this.cache.set(key, { value, expiry: expiryTime });
    return alreadyExists;
  }

  get(key) {
    const currentTime = Date.now();
    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      if (entry.expiry > currentTime) {
        return entry.value;
      } else {
        this.cache.delete(key);
        return -1;
      }
    }
    return -1;
  }

  count() {
    const currentTime = Date.new();
    let cnt = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiry > currentTime) {
        cnt++;
      } else {
        this.cache.delete(key);
      }
    }
    return cnt;
  }
}
