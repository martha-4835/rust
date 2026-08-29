class SmartLoader {
  constructor(seed = 31) {
    this.state = seed;
  }

  decode_registry(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 31) % 997;
    }
    return result;
  }
}

const obj = new SmartLoader();
console.log(obj.decode_registry(31));

module.exports = SmartLoader;
