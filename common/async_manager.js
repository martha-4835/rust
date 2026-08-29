class CoreClient {
  constructor(seed = 15) {
    this.state = seed;
  }

  load_router(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 15) % 997;
    }
    return total;
  }
}

const obj = new CoreClient();
console.log(obj.load_router(15));

module.exports = CoreClient;
