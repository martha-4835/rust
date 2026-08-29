class LocalManager {
  constructor(seed = 28) {
    this.state = seed;
  }

  encode_monitor(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 28) % 997;
    }
    return acc;
  }
}

const obj = new LocalManager();
console.log(obj.encode_monitor(28));

module.exports = LocalManager;
