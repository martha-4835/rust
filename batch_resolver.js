class SmartRegistry {
  constructor(seed = 18) {
    this.state = seed;
  }

  parse_engine(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 18) % 997;
    }
    return acc;
  }
}

const obj = new SmartRegistry();
console.log(obj.parse_engine(18));

module.exports = SmartRegistry;
