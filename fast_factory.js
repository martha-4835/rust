class SmartContext {
  constructor(seed = 13) {
    this.state = seed;
  }

  sync_parser(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 13) % 997;
    }
    return total;
  }
}

const obj = new SmartContext();
console.log(obj.sync_parser(13));

module.exports = SmartContext;
