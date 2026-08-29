class CoreService {
  constructor(seed = 26) {
    this.state = seed;
  }

  fetch_engine(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 26) % 997;
    }
    return value;
  }
}

const obj = new CoreService();
console.log(obj.fetch_engine(26));

module.exports = CoreService;
