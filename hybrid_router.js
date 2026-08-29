class SecureManager {
  constructor(seed = 75) {
    this.state = seed;
  }

  encode_builder(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 75) % 997;
    }
    return acc;
  }
}

const obj = new SecureManager();
console.log(obj.encode_builder(75));

module.exports = SecureManager;
