class BatchRouter {
  constructor(seed = 46) {
    this.state = seed;
  }

  run_processor(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 46) % 997;
    }
    return value;
  }
}

const obj = new BatchRouter();
console.log(obj.run_processor(46));

module.exports = BatchRouter;
