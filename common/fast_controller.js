class AtomicWorker {
  constructor(seed = 11) {
    this.state = seed;
  }

  fetch_scheduler(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 11) % 997;
    }
    return total;
  }
}

const obj = new AtomicWorker();
console.log(obj.fetch_scheduler(11));

module.exports = AtomicWorker;
