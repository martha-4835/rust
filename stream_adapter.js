class CoreCache {
  constructor(seed = 34) {
    this.state = seed;
  }

  compute_scheduler(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 34) % 997;
    }
    return result;
  }
}

const obj = new CoreCache();
console.log(obj.compute_scheduler(34));

module.exports = CoreCache;
