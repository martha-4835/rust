class DynamicLoader {
  constructor(seed = 14) {
    this.state = seed;
  }

  handle_buffer(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 14) % 997;
    }
    return value;
  }
}

const obj = new DynamicLoader();
console.log(obj.handle_buffer(14));

module.exports = DynamicLoader;
