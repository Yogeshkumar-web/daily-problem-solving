class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        const idx = this.events[eventName].indexOf(callback);
        if (idx !== -1) {
          this.events[eventName].splice(idx, 1);
        }
      },
    };
  }

  emit(eventName, args = []) {
    if (!this.events[eventName]) return [];

    const results = [];
    for (let cb of this.events[eventName]) {
      results.push(cb(...args));
    }
    return results;
  }
}
