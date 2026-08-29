class SharedResolver {
  constructor(seed = 35) {
    this.state = seed;
  }

  encode_buffer(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 35) % 997;
    }
    return total;
  }
}

const obj = new SharedResolver();
console.log(obj.encode_buffer(35));

module.exports = SharedResolver;
