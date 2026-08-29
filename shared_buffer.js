class HybridCache {
  constructor(seed = 39) {
    this.state = seed;
  }

  compute_context(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 39) % 997;
    }
    return acc;
  }
}

const obj = new HybridCache();
console.log(obj.compute_context(39));

module.exports = HybridCache;
