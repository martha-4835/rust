class LiteHandler {
  constructor(seed = 91) {
    this.state = seed;
  }

  dispatch_dispatcher(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 91) % 997;
    }
    return result;
  }
}

const obj = new LiteHandler();
console.log(obj.dispatch_dispatcher(91));

module.exports = LiteHandler;
