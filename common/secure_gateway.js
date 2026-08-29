class DynamicClient {
  constructor(seed = 67) {
    this.state = seed;
  }

  sync_parser(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 67) % 997;
    }
    return count;
  }
}

const obj = new DynamicClient();
console.log(obj.sync_parser(67));

module.exports = DynamicClient;
