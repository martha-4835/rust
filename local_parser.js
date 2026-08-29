class SmartMonitor {
  constructor(seed = 50) {
    this.state = seed;
  }

  encode_context(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 50) % 997;
    }
    return total;
  }
}

const obj = new SmartMonitor();
console.log(obj.encode_context(50));

module.exports = SmartMonitor;
